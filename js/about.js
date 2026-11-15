// =======================================================
// THE QUARKY
// About
// =======================================================

// =======================================================
// EDIT THESE TWO SECTIONS
// =======================================================

const aboutData = {

    inProgress: `

The main series of short stories I'm working on is Paradox, and I have a few other series I planning on starting as well. I'm also writing a sci-fi action novel on the side, but it'll probably end up being pretty short.

`,

    aboutMe: `

Hi! I'm Ryker Besser.

I'm 15 years old and love to write stories about mind bending concepts and ideas. I'm very interested in quantum mechanics, I've already skipped one grade in math and I'm planning on skipping another one this summer, so maybe by then my short stories will have a little bit more math stuff in them. My home address is... well actually I don't think I should share that with you. My favorite story I've published is a tie between 'Nine Dots' and 'Numb', and my least favorite is probably 'Five Second Eternity Part 1'. 

My editor is Broderick Fife, He mostly helps with grammar, although he has proved very helpful in story flow as well. His favorite of my published stories is 'Blind' and his least favorite is 'Nine Dots'.

`

};

// =======================================================
// Statistics
// =======================================================

document.getElementById("storyCount").textContent =
    `I've published ${stories.length} ${stories.length === 1 ? "story" : "stories"}.`;

document.getElementById("comicCount").textContent =
    `I've published ${comics.length} ${comics.length === 1 ? "comic" : "comics"}.`;

// =======================================================
// Total Word Count
// =======================================================

async function updateWordCount() {

    let totalWords = 0;

    for (const story of stories) {

        try {

            const response = await fetch(`storyData/${story.id}.txt`);

            const text = await response.text();

            const words = text
                .trim()
                .split(/\s+/)
                .filter(word => word.length > 0);

            totalWords += words.length;

        }

        catch (error) {

            console.error(`Couldn't load ${story.id}.txt`);

        }

    }

    document.getElementById("wordCount").textContent =
        `I've published ${totalWords.toLocaleString()} words.`;

}

updateWordCount();

// =======================================================
// Fill Text Boxes
// =======================================================

document.getElementById("inProgress").innerHTML =
    aboutData.inProgress.trim().replace(/\n/g, "<br>");

document.getElementById("aboutMe").innerHTML =
    aboutData.aboutMe.trim().replace(/\n/g, "<br>");