const gameContainer = document.querySelector('.container');
const playerImg = document.querySelector('.player img');
const computerImg = document.querySelector('.computer img');
const resultText = document.querySelector('.result_text');
const optionImages = document.querySelectorAll('.option_img');

optionImages.forEach((image, index) => {
    image.addEventListener('click',(e) => {
        image.classList.add('active');

        playerImg.src = computerImg.src = "assets/rock.png"

        optionImages.forEach((image2,index2) => {
            index!==index2 && image2.classList.remove('active');
        })

        gameContainer.classList.add('start');
        resultText.textContent = "Wait..."

        time = setTimeout(() => {
            gameContainer.classList.remove('start');
            let imageSrc = e.target.querySelector('img').src;

        playerImg.src = imageSrc;

        let rand = Math.floor(Math.random() * 3);

        let computerImages = ["assets/rock.png","assets/paper.png","assets/scissors.png"];

        computerImg.src = computerImages[rand];

        let computerIndex = ["R","P","S"][rand];
        let userIndex = ["R","P","S"][index];

        let outcomes = {
            RP: "Computer",
            RS: "You",
            PR: "You",
            PS: "Computer",
            SR: "Computer",
            SP: "You"
        }

        resultText.textContent = userIndex === computerIndex ? "Draw!!" : `${outcomes[userIndex+computerIndex]} Won!`;
        },2500)

    })

})