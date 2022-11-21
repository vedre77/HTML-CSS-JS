class Game {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    
    renderBackground = () => {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
    
    play = () => {
        this.renderBackground();
        const ball = new Ball(100, 100, 10, 5, 5);
        const paddleLeft = new Paddle(15, 80, 20, 200, 's', 'w');
        const paddleRight = new Paddle(15, 80, 665, 200, 'k', 'i');
        paddleLeft.renderPaddle();
        paddleLeft.controlPaddle();
        paddleRight.renderPaddle();
        paddleRight.controlPaddle();
        ball.renderBall();
        const animate = () => {
            this.renderBackground();
            paddleLeft.renderPaddle();
            paddleRight.renderPaddle();
            ball.moveBall();
            // leftPaddleCollision:
            if (ball.ballX === paddleLeft.posX + 15
                && ball.ballY >= paddleLeft.posY - 45
                && ball.ballY <= paddleLeft.posY + 75) {
                ball.accelerationX = - ball.accelerationX;
                ball.accelerationY = ball.accelerationY * (Math.round(Math.random()) * 2 - 1)
                }
            // rightPaddleCollision:
            if (ball.ballX === paddleRight.posX
                && ball.ballY >= paddleRight.posY - 45
                && ball.ballY <= paddleRight.posY + 75) {
                ball.accelerationX = - ball.accelerationX;
                ball.accelerationY = ball.accelerationY * (Math.round(Math.random()) * 2 - 1)
                }
            if (ball.ballX + ball.radius >= this.canvasWidth) {
                let player2score = document.getElementById('player2'); 
                let score2 = Number(player2score.innerText);
                score2++;
                player2score.innerText = score2;
                stop();
                this.hecklePlayers();
                this.play();
            } else if (ball.ballX - ball.radius <= 0) {
                let player1score = document.getElementById('player1'); 
                let score1 = Number(player1score.innerText);
                score1++;
                player1score.innerText = score1;
                stop();
                this.hecklePlayers();
                this.play();
            }
        };
        const start = setInterval(animate, 17);
        stop = () => clearInterval(start);
    }
    hecklePlayers = () => {
        const player1score = document.getElementById('player1').innerText;
        const player2score = document.getElementById('player2').innerText;
        const message = document.getElementById('message');
        const insults = [` keyboard is that thing with letters!`, ` other score is bigger,
        that's bad!`, ` how about hitting the red thing with the white thing?`, ` need a
        protein bar?`, ` opposite of up is down, in case you mix them up!`];
        let randomNum = Math.floor(Math.random() * 5);
        if (player1score == player2score) {
            const tiedMessage = 'Helloo, are you even playing?!';
            message.innerText = tiedMessage;
        }
        else if (player1score > player2score) {
            const insult = insults[randomNum];
            message.innerText = `Player 1, ${insult}`;
        } else {
            const insult = insults[randomNum];
            message.innerText = `Player 2, ${insult}`;
        }
    }
}

class Ball {
    constructor(ballX, ballY, radius, accelerationX, accelerationY) {
        this.ballY = ballY;
        this.ballX = ballX;
        this.radius = radius;
        this.accelerationX = accelerationX;
        this.accelerationY = accelerationY;
    }
    renderBall = () => {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.ballX, this.ballY, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
    }
    moveBall = () => {
        this.ballX += this.accelerationX;
        this.ballY += this.accelerationY;
        this.renderBall();
        if (this.ballY + this.radius >= game.canvasHeight || this.ballY - this.radius <= 0) {
             this.accelerationY = - this.accelerationY;
         }
    }
}

class Paddle {
    constructor(paddleWidth, paddleHeight, posX, posY, up, down) {
        this.paddleWidth = paddleWidth;
        this.paddleHeight = paddleHeight;
        this.posX = posX;
        this.posY = posY;
        this.up = up;
        this.down = down;
    }
    renderPaddle = () => {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(this.posX, this.posY, this.paddleWidth, this.paddleHeight); // fixed x pos
    }
    controlPaddle = () => {
        document.addEventListener('keypress', event => {
            if (event.key === this.up && this.posY <= 385) {
              this.posY += 25;
            }
            if (event.key === this.down && this.posY >= 45) {
              this.posY -= 25;
            } 
          });
    }
}

const game = new Game(700, 500);
game.play();





