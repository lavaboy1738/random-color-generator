const App = (()=>{
    const btn = document.querySelector("button")
    const background = document.querySelector("body")
    const link = document.querySelector("a")
    const colorArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    //generate random hex code
    const randomize = () =>{
        let output = "#";
        for(let i = 0; i<6; i++){
            const randomNum = Math.floor(Math.random()*16)
            output += colorArr[randomNum]
        }
        return output;
    }

    //set color for the background
    const setBackgroundColor = () =>{
        background.style.backgroundColor = randomize();
    }

    //add listner to the button
    const listener = () =>{
        btn.addEventListener("click", setBackgroundColor)
        btn.addEventListener("click", setButtonColor)
    }

    //get color from the background, strip it, and then return an array of RGB values
    const getColor = () =>{
        const color = background.style.backgroundColor
        return color.slice(4, -1).split(", ")
    }

    //check if the background is light or dark, then set the button accordingly.
    const lightOrDark = (colorArr) =>{
        let r, g, b, hsp;
        r = Number(colorArr[0]);
        g = Number(colorArr[1]);
        b = Number(colorArr[2]);
        hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
        );
        // Using the HSP value, determine whether the color is light or dark
        return hsp>127.5
    }

    const setButtonColor = () =>{
        if(lightOrDark(getColor())){
            btn.style.color = "black";
            link.style.color = "black"
            btn.style.border = "2px solid black"
        }else{
            btn.style.color = "white";
            link.style.color = "white"
            btn.style.border = "2px solid white";
        }
    }

    return {
        setBackground: setBackgroundColor,
        setButton: setButtonColor,
        listen: listener
    }
})();

App.setBackground();
App.setButton();
App.listen();