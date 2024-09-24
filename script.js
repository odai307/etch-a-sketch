const container = document.querySelector(".container");
const clearBtn = document.querySelector("#clear");
const select = document.querySelector("select");

// Function to create the grid
const createGrid = (size) => {
    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.style.height = `${480 / size}px`;
            div.style.width = `${480 / size}px`;
            div.style.opacity = 1; // Set initial opacity to 1 (fully visible)
            div.classList.add("square");
            container.appendChild(div);

            // Event listener for mouse enter to change color and darken progressively
            div.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = getRandomColor();

                // Decrease opacity by 10% (0.1) on each interaction
                let currentOpacity = parseFloat(e.target.style.opacity);
                e.target.style.opacity = Math.max(0, currentOpacity - 0.1); // Ensures opacity doesn't go below 0
            });
    }
        }  
};

// Function to generate a random RGB color
const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

// Clear button to reset all squares' background colors and opacity
clearBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
        square.style.opacity = 1; // Reset opacity to fully visible
    });
});

// Event listener to change grid size based on select input
select.addEventListener("change", () => {
    createGrid(select.value);
});

// Initial grid creation based on the select value
createGrid(select.value);
