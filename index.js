let addSubBtn = document.querySelectorAll(".add-sub-btn")
let lengthCounter = document.getElementById("length-counter")
let currentCount = parseInt(lengthCounter.value, 10)
let passGenBtn = document.getElementById("pass-gen-btn")
let popUp = document.getElementById("copyToClipboard")
let randomPassword = document.querySelectorAll(".random-password")



for (let i = 1; i < 5; i++){
    let now = document.getElementById(`pass${i}`)
    now.textContent = passwordGenerator(currentCount)
}

lengthCounter.addEventListener("input", () => {
    let userInput = parseInt(lengthCounter.value, 10)

    if (isNaN(userInput) || userInput < 8){
        currentCount = 8
        lengthCounter.value = currentCount
    } else if (userInput > 30){
        currentCount = 30
        lengthCounter.value = currentCount
    } else {
        lengthCounter.value = currentCount
    }
})


addSubBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let calc = e.target.id

        if (calc === "add-btn" && currentCount < 30){
            currentCount += 1
            lengthCounter.value = currentCount
        } else if(calc === "subs-btn" && currentCount > 8) {
            currentCount -= 1
            lengthCounter.value = currentCount
        }
    })
})



randomPassword.forEach(randomPassword => {
    randomPassword.addEventListener("click", () => {
        let textToCopy = randomPassword.textContent
        navigator.clipboard.writeText(textToCopy).then(() => {
            popUp.classList.add("popUp")

            setTimeout(() => {
                popUp.classList.remove("popUp")
            }, 2000)
            })
    })
})


passGenBtn.addEventListener("click", () => {
    for (let i = 1; i < 5; i++){
        let now = document.getElementById(`pass${i}`)
        now.textContent = passwordGenerator(currentCount)
    }
})




function randomCharacter(len){
    return Math.floor(Math.random() * len)
}


function passwordGenerator(length){
    const lowers  = "abcdefghijklmnopqrstuvwxyz";
    const uppers  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers  = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChar = ""
    

    if (document.getElementById("lowercase").checked){
        allChar += lowers
    }
    if (document.getElementById("uppercase").checked){
        allChar += uppers
    }
    if (document.getElementById("symbols").checked){
        allChar += symbols
    }
    if (document.getElementById("numbers").checked){
        allChar += numbers
    }

    if (allChar === "") {
        document.getElementById("error").removeAttribute("class", "invisible")
        setTimeout(() => {
            document.getElementById("error").setAttribute("class", "invisible")
        }, 2500);
        return ""
    }
    let res = ""
    while (res.length <= length){
        res += (allChar[randomCharacter(allChar.length)])
    }

    return res
}

