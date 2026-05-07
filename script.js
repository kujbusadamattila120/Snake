const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Kígyó teste (tömb és objektumok)
let snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200}
];

let dx = 10;
let dy = 0;
