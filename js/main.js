// =======================================================
// THE QUARKY
// Homepage
// =======================================================

if (typeof stories !== "undefined" && stories.length > 0) {

    const latestStory = stories[0];

    document.getElementById("latestStoryCover").src =
        `assets/covers/${latestStory.id}.png`;

    document.getElementById("latestStoryCover").alt =
        latestStory.title;

    document.getElementById("latestStoryTitle").textContent =
        latestStory.title;

    document.getElementById("latestStoryDescription").textContent =
        latestStory.description;

    document.getElementById("latestStoryButton").addEventListener("click", () => {

        window.location.href = `story.html?id=${latestStory.id}`;

    });

}