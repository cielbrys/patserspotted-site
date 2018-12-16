{
    let attempts = 5;

    const init = () => {
        showInHtml(`.pogingen`, `only  ${attempts} attempts left!`);

        const $gameElements = Array.from(document.getElementsByClassName("head-Game__child"));

        $gameElements.forEach((element, index) => {
            if (index === 1) {
                element.onclick = () => winner(element)
            } else {
                element.onclick = () => loser(element);
            }
        });

        const $winnerFoto = document.querySelector(`.Winner`);
        $winnerFoto.onclick = showPicture;

    };

    const showInHtml = (className, text) => {
        const $classElement = document.querySelector(className);
        $classElement.textContent = text;
    }

    const showPicture = () => {
        $foto = document.querySelector(`.foto`);
        $foto.style.zIndex = 4;
    }

    const loser = (element) => {
        element.style.opacity = 0;

        attempts--;
        showInHtml(`.pogingen`, `only  ${attempts} attempts left!`);
        if (attempts === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AGAIN!`);
        }
    }

    const winner = (element) => {
        element.style.opacity = 0;
        showInHtml(`.Winner`, `U FOUND THE PATSER!`);
        $winner = document.querySelector(`.Winner`);
        $winner.style.zIndex = 5;
    }

    init();
}