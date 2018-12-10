{
    const init = () => {
        startGame();

        const $headChild = document.querySelector(`.box1`);
        $headChild.onclick = () => opacity1();

        const $box2 = document.querySelector(`.box2`);
        $box2.onclick = () => opacity2();

        const $box3 = document.querySelector(`.box3`);
        $box3.onclick = () => opacity3();

        const $box4 = document.querySelector(`.box4`);
        $box4.onclick = () => opacity4();

        const $box5 = document.querySelector(`.box5`);
        $box5.onclick = () => opacity5();

        const $box6 = document.querySelector(`.box6`);
        $box6.onclick = () => opacity6();

        const $box7 = document.querySelector(`.box7`);
        $box7.onclick = () => opacity7();

        const $box8 = document.querySelector(`.box8`);
        $box8.onclick = () => opacity8();

        const $box9 = document.querySelector(`.box9`);
        $box9.onclick = () => opacity9();

        const $box10 = document.querySelector(`.box10`);
        $box10.onclick = () => opacity10();

        const $box11 = document.querySelector(`.box11`);
        $box11.onclick = () => opacity11();

        const $box12 = document.querySelector(`.box12`);
        $box12.onclick = () => opacity12();

        const $box13 = document.querySelector(`.box13`);
        $box13.onclick = () => opacity13();

        const $box14 = document.querySelector(`.box14`);
        $box14.onclick = () => opacity14();

        const $box15 = document.querySelector(`.box15`);
        $box15.onclick = () => opacity15();

        const $box16 = document.querySelector(`.box16`);
        $box16.onclick = () => opacity16();

        const $box17 = document.querySelector(`.box17`);
        $box17.onclick = () => opacity17();

        const $box18 = document.querySelector(`.box18`);
        $box18.onclick = () => opacity18();

        const $box19 = document.querySelector(`.box19`);
        $box19.onclick = () => opacity19();

        const $box20 = document.querySelector(`.box20`);
        $box20.onclick = () => opacity20();

        const $box21 = document.querySelector(`.box21`);
        $box21.onclick = () => opacity21();

        const $box22 = document.querySelector(`.box22`);
        $box22.onclick = () => opacity22();

        const $box23 = document.querySelector(`.box23`);
        $box23.onclick = () => opacity23();

        const $box24 = document.querySelector(`.box24`);
        $box24.onclick = () => opacity24();

        const $box25 = document.querySelector(`.box25`);
        $box25.onclick = () => opacity25();

        const $winnerFoto = document.querySelector(`.Winner`);
        $winnerFoto.onclick = () => showPicture();
    };

    const showPicture = () => {
        $foto = document.querySelector(`.foto`);
        $foto.style.zIndex = 4;

    }

    let aantalPogingen = 5;

    let startGame = () => {
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
    }

    const opacity1 = () => {
        $opacityChange = document.querySelector(`.box1`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 3;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }

    const opacity2 = () => {
        $opacityChange = document.querySelector(`.box2`);
        $opacityChange.style.opacity = 0;
        showInHtml(`.Winner`, `U FOUND THE PATSER!`);
        $winner = document.querySelector(`.Winner`);
        $winner.style.zIndex = 5;
    }
    const opacity3 = () => {
        $opacityChange = document.querySelector(`.box3`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity4 = () => {
        $opacityChange = document.querySelector(`.box4`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity5 = () => {
        $opacityChange = document.querySelector(`.box5`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity6 = () => {
        $opacityChange = document.querySelector(`.box6`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity7 = () => {
        $opacityChange = document.querySelector(`.box7`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity8 = () => {
        $opacityChange = document.querySelector(`.box8`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity9 = () => {
        $opacityChange = document.querySelector(`.box9`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }

    const opacity10 = () => {
        $opacityChange = document.querySelector(`.box10`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querSelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity11 = () => {
        $opacityChange = document.querySelector(`.box11`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity12 = () => {
        $opacityChange = document.querySelector(`.box12`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity13 = () => {
        $opacityChange = document.querySelector(`.box13`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }

    const opacity14 = () => {
        $opacityChange = document.querySelector(`.box14`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity15 = () => {
        $opacityChange = document.querySelector(`.box15`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }

    const opacity16 = () => {
        $opacityChange = document.querySelector(`.box16`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity17 = () => {
        $opacityChange = document.querySelector(`.box17`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity18 = () => {
        $opacityChange = document.querySelector(`.box18`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity19 = () => {
        $opacityChange = document.querySelector(`.box19`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }

    const opacity20 = () => {
        $opacityChange = document.querySelector(`.box20`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity21 = () => {
        $opacityChange = document.querySelector(`.box21`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity22 = () => {
        $opacityChange = document.querySelector(`.box22`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity23 = () => {
        $opacityChange = document.querySelector(`.box23`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity24 = () => {
        $opacityChange = document.querySelector(`.box24`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }
    const opacity25 = () => {
        $opacityChange = document.querySelector(`.box25`);
        $opacityChange.style.opacity = 0;
        aantalPogingen--;
        showInHtml(`.pogingen`, `only  ${aantalPogingen} attempts left!`);
        if (aantalPogingen === 0) {
            $loser = document.querySelector(`.loser`);
            $loser.style.zIndex = 5;
            showInHtml(`.loser`, `U DID NOT FIND THE PATSER! TRY AIGAN!`);
        }
    }


    const showInHtml = (klasse, tekst) => {
        const $temp = document.querySelector(klasse);
        $temp.textContent = tekst;
    }


    init();
}