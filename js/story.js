// =======================================================
// THE QUARKY
// Story Reader
// =======================================================

// Make sure stories.js is loaded before this file in story.html.

const params = new URLSearchParams(window.location.search);
const storyId = params.get("id");

// =======================================================

const storyTitle = document.getElementById("storyTitle");
const storyRelease = document.getElementById("storyRelease");
const storyWords = document.getElementById("storyWords");
const storyTags = document.getElementById("storyTags");
const storyContent = document.getElementById("storyContent");

// =======================================================

const story = stories.find(s => s.id === storyId);

if (!story) {

    storyTitle.textContent = "Story Not Found";

    storyContent.innerHTML = `
        <p>
            Sorry, this story couldn't be found.
        </p>
    `;

    throw new Error("Story not found.");

}

// =======================================================
// Header
// =======================================================

storyTitle.textContent = story.title;

storyRelease.textContent = story.release;

// Tags

story.tags.forEach(tag => {

    const element = document.createElement("span");

    element.className = "story-tag";

    element.textContent = tag;

    storyTags.appendChild(element);

});

// =======================================================
// Load Story Text
// =======================================================

fetch(`storyData/${story.id}.txt`)

    .then(response => {

        if (!response.ok) {

            throw new Error("Unable to load story.");

        }

        return response.text();

    })

    .then(text => {

        buildStory(text);

    })

    .catch(error => {

        console.error(error);

        storyContent.innerHTML = `
        <p>
            Unable to load this story.
        </p>
    `;

    });

// =======================================================

function buildStory(text) {

    storyContent.innerHTML = "";

    const paragraphs = text
        .split(/\r?\n/)
        .map(p => p.trim())
        .filter(p => p.length > 0);

    let totalWords = 0;

    paragraphs.forEach(paragraph => {

        const trimmed = paragraph.trim();

        if (trimmed === "") return;

        // Image marker
        if (trimmed.startsWith("[image:") && trimmed.endsWith("]")) {

            const filename = trimmed
                .replace("[image:", "")
                .replace("]", "");

            const image = document.createElement("img");

            image.src = `assets/storyImages/${filename}`;

            image.className = "story-image";

            storyContent.appendChild(image);

            return;

        }

        const p = document.createElement("p");

        p.textContent = trimmed;

        storyContent.appendChild(p);

        totalWords += trimmed
            .split(/\s+/)
            .filter(word => word.length > 0)
            .length;

    });

    storyWords.textContent =
        totalWords.toLocaleString() + " Words";

}