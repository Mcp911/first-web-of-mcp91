const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");

let box = 20;
let score = 0;
let snake = [{ x: 9 * box, y: 10 * box }];
let food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box
};
let d; 
let gameSpeed = 100;
let game;

// Keyboard controls
document.addEventListener("keydown", (event) => {
    if(event.keyCode == 37 && d != "RIGHT") d = "LEFT";
    else if(event.keyCode == 38 && d != "DOWN") d = "UP";
    else if(event.keyCode == 39 && d != "LEFT") d = "RIGHT";
    else if(event.keyCode == 40 && d != "UP") d = "DOWN";
});

// Mobile/Button controls (Fixed function name)
window.changeDir = function(dir) {
    if(dir == "LEFT" && d != "RIGHT") d = "LEFT";
    else if(dir == "UP" && d != "DOWN") d = "UP";
    else if(dir == "RIGHT" && d != "LEFT") d = "RIGHT";
    else if(dir == "DOWN" && d != "UP") d = "DOWN";
}

// Speed Control Logic
window.updateSpeed = function(newSpeed) {
    gameSpeed = newSpeed;
    clearInterval(game);
    game = setInterval(draw, gameSpeed);
}

function collision(head, array) {
    for(let i = 0; i < array.length; i++) {
        if(head.x == array[i].x && head.y == array[i].y) return true;
    }
    return false;
}

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < snake.length; i++) {
        // Texture: Head dark green, body light green with border
        ctx.fillStyle = (i == 0) ? "#1b5e20" : "#4caf50"; 
        ctx.strokeStyle = "#ffffff";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;

    if(snakeX == food.x && snakeY == food.y) {
        score++;
        scoreElement.innerHTML = "Score: " + score;
        document.getElementById('eat-sound').play(); 
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
    } else {
        snake.pop();
    }

    let newHead = { x: snakeX, y: snakeY };

    if(snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
        document.getElementById('hit-sound').play();
        clearInterval(game);
        setTimeout(() => alert("Game Over! Score: " + score), 100);
    }

    snake.unshift(newHead);
}

// Game ko start karne ke liye call
game = setInterval(draw, gameSpeed);
