const App = (()=>{
    const btn = document.querySelector("button")
    const background = document.querySelector("body")
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
    const setColor = () =>{
        background.style.backgroundColor = randomize();
    }

    //add listner to the button
    const listener = () =>{
        btn.addEventListener("click", setColor)
    }

    return {
        set: setColor,
        listen: listener
    }
})();

App.set();
App.listen();