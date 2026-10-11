// =======================================================
// THE QUARKY
// Comics
// =======================================================

const comics = [

    {
        id: 1,
        title: "I don't see your point"
    },

    {
        id: 2,
        title: "States of a particle"
    },

    {
        id: 3,
        title: "Gemini AI goes to principal's office"
    },

    {
        id: 4,
        title: "Non-Euclidean geometry"
    },

    {
        id: 5,
        title: "Quantum duck"
    },

    {
        id: 6,
        title: "Phd"
    },

    {
        id: 7,
        title: "Doom"
    },

    {
        id: 8,
        title: "Godlike entity"
    },

    {
        id: 9,
        title: "To Do List"
    },

    {
        id: 10,
        title: "Pineapple on pizza"
    },

    {
        id: 11,
        title: "Entropy"
    },

    {
        id: 12,
        title: "Blood donation"
    },

    {
        id: 13,
        title: "Unemployment"
    },

    {
        id: 14,
        title: "How to play the guitar"
    },

];

// =======================================================

let currentComic = comics.length - 1;

// =======================================================

const comicImage = document.getElementById("comicImage");
const comicTitle = document.getElementById("comicTitle");

const firstButton = document.getElementById("firstComic");
const previousButton = document.getElementById("previousComic");
const randomButton = document.getElementById("randomComic");
const nextButton = document.getElementById("nextComic");
const latestButton = document.getElementById("latestComic");

// =======================================================

function loadComic(index) {

    currentComic = index;

    const comic = comics[index];

    const filename = String(comic.id).padStart(5, "0");

    comicImage.src = `assets/comics/QuarkY_${filename}.png`;

    comicImage.alt = comic.title;

    comicTitle.innerHTML = `
    <div class="comic-number">#${filename}</div>
    <div class="comic-name">${comic.title}</div>
`;
    updateButtons();

}

// =======================================================

function updateButtons() {

    firstButton.disabled = currentComic === 0;

    previousButton.disabled = currentComic === 0;

    nextButton.disabled = currentComic === comics.length - 1;

    latestButton.disabled = currentComic === comics.length - 1;

}

// =======================================================

firstButton.addEventListener("click", () => {

    loadComic(0);

});

previousButton.addEventListener("click", () => {

    if (currentComic > 0) {

        loadComic(currentComic - 1);

    }

});

nextButton.addEventListener("click", () => {

    if (currentComic < comics.length - 1) {

        loadComic(currentComic + 1);

    }

});

latestButton.addEventListener("click", () => {

    loadComic(comics.length - 1);

});

randomButton.addEventListener("click", () => {

    if (comics.length <= 1) return;

    let random;

    do {

        random = Math.floor(Math.random() * comics.length);

    } while (random === currentComic);

    loadComic(random);

});

// =======================================================
// Keyboard Shortcuts
// =======================================================

document.addEventListener("keydown", (event) => {

    switch (event.key) {

        case "ArrowLeft":

            if (currentComic > 0) {

                loadComic(currentComic - 1);

            }

            break;

        case "ArrowRight":

            if (currentComic < comics.length - 1) {

                loadComic(currentComic + 1);

            }

            break;

        case "Home":

            loadComic(0);

            break;

        case "End":

            loadComic(comics.length - 1);

            break;

        case "r":

        case "R":

            randomButton.click();

            break;

    }

});

// =======================================================

loadComic(currentComic);