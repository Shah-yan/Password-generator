const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let newChar = ""


function generate() {
    let password1 = ""
    let password2 = ""

    for (let x = 0 ; x < 16 ; x++ ) {
    let forRandom = Math.floor(Math.random()*characters.length)
    newChar += characters[forRandom]
    }
    password1 += newChar
    {
    let forRandom = Math.floor(Math.random()*characters.length)
    newChar += characters[forRandom]
    }
    password2 += newChar
    // console.log(password)

    let rectAngle1 = document.getElementById("rectangle1")
    let rectAngle2 = document.getElementById("rectangle2")
    
    // console.log(rectAngle)
    rectAngle1.textContent = password1
    rectAngle2.textContent = password2
    
}

