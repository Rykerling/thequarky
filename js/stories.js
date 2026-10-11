// =======================================================
// THE QUARKY
// Stories
// Part 1
// =======================================================


// =======================================================
// Elements
// =======================================================

const storyGrid = document.getElementById("storyGrid");
const searchBox = document.getElementById("storySearch");

const overlay = document.getElementById("overlay");
const sidebar = document.getElementById("storySidebar");

const sidebarCover = document.getElementById("sidebarCover");
const sidebarTitle = document.getElementById("sidebarTitle");
const sidebarRelease = document.getElementById("sidebarRelease");
const sidebarDescription = document.getElementById("sidebarDescription");
const sidebarTags = document.getElementById("sidebarTags");

const readButton = document.getElementById("readStoryButton");
const closeButton = document.getElementById("closeSidebar");

// =======================================================

let selectedStory = null;

// =======================================================
// Story Cards
// =======================================================

function createStoryCard(story){

    const card = document.createElement("div");

    card.className = "story-card";

    card.innerHTML = `

        <img
            class="story-cover"
            src="assets/covers/${story.id}.png"
            alt="${story.title}">

        <h2>${story.title}</h2>

    `;

    card.addEventListener("click", () => {

        openSidebar(story);

    });

    return card;

}

// =======================================================

function displayStories(list){

    storyGrid.innerHTML = "";

    list.forEach(story => {

        storyGrid.appendChild(createStoryCard(story));

    });

}

// =======================================================
// Search
// =======================================================

searchBox.addEventListener("input", () => {

    const search = searchBox.value
        .toLowerCase()
        .trim();

    const filtered = stories.filter(story => {

        const titleMatch =
            story.title
                .toLowerCase()
                .includes(search);

        const tagMatch =
            story.tags
                .join(" ")
                .toLowerCase()
                .includes(search);

        return titleMatch || tagMatch;

    });

    displayStories(filtered);

});

// =======================================================
// Sidebar
// =======================================================

function openSidebar(story){

    selectedStory = story;

    sidebarCover.src =
        `assets/covers/${story.id}.png`;

    sidebarTitle.textContent =
        story.title;

    sidebarRelease.textContent =
        story.release;

    sidebarDescription.textContent =
        story.description;

    sidebarTags.innerHTML = "";

    story.tags.forEach(tag => {

        const element =
            document.createElement("span");

        element.className = "tag";

        element.textContent = tag;

        sidebarTags.appendChild(element);

    });

    overlay.classList.add("show");

    sidebar.classList.add("open");

}
// =======================================================
// THE QUARKY
// Stories
// Part 2
// =======================================================

// Close sidebar

function closeSidebar(){

    sidebar.classList.remove("open");

    overlay.classList.remove("show");

    selectedStory = null;

}

// =======================================================

// Close Button

closeButton.addEventListener("click", closeSidebar);

// Clicking outside the sidebar

overlay.addEventListener("click", closeSidebar);

// Escape key closes sidebar

document.addEventListener("keydown", (event)=>{

    if(event.key === "Escape"){

        closeSidebar();

    }

});

// =======================================================
// Read Story
// =======================================================

readButton.addEventListener("click", ()=>{

    if(!selectedStory) return;

    window.location.href =
        `story.html?id=${selectedStory.id}`;

});

// =======================================================
// Utility
// =======================================================

// Find a story by its ID

function getStoryById(id){

    return stories.find(story => story.id === id);

}

// =======================================================
// Initialization
// =======================================================

// Sort newest first.
// If you later switch to exact dates instead of
// "October 2026", we can make this fully automatic.

displayStories(stories);

// =======================================================