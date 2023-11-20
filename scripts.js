const letterP = document.getElementById("letterP")
const scoreP = document.getElementById("scoreP")
const buttonsOption = document.getElementsByClassName("buttonOption")

import score from "./score"
import updateScore from "./score"

const letters = [
    { a: "𐎠" },
    { i: "𐎡" },
    { u: "𐎢" },
    { k: "𐎣" },
    { ku: "𐎤" },
    { x: "𐎧" },
    { g: "𐎥" },
    { gu: "𐎦" },
    { c: "𐎨" },
    { ç: "𐏂" },
    { j: "𐎩" },
    { ji: "𐎪" },
    { t: "𐎫" },
    { tu: "𐎬" },
    { th: "𐎰" },
    { d: "𐎭" },
    { di: "𐎮" },
    { du: "𐎯" },
    { p: "𐎱" },
    { f: "𐎳" },
    { b: "𐎲" },
    { n: "𐎴" },
    { nu: "𐎵" },
    { m: "𐎶" },
    { mi: "𐎷" },
    { mu: "𐎸" },
    { y: "𐎹" },
    { v: "𐎺" },
    { vi: "𐎻" },
    { r: "𐎼" },
    { ru: "𐎽" },
    { l: "𐎾" },
    { s: "𐎿" },
    { z: "𐏀" },
    { š: "𐏁" },
    { h: "𐏃" }
]

const startChallenge = () => {
    const generateRandomIndex = () => {
        const random = Math.floor(Math.random() * 36)

        return random
    }

    const getLetterByIndex = (index) => {
        const letter = (Object.values(letters[index]))

        return letter.toString().trim()
    }

    const getKeyByIndex = (index) => {
        const transliteration = Object.keys(letters[index])

        return transliteration.toString().trim()
    }

    const challengeIndex = generateRandomIndex()
    const challengeLetter = getLetterByIndex(challengeIndex)
    const challengeKey = getKeyByIndex(challengeIndex)

    letterP.innerText = challengeLetter

    let randomCorrectButton = Math.floor(Math.random() * 4)
    buttonsOption[randomCorrectButton].innerText = challengeKey

    let options = []
    for (let i = 0; i < 3; i++) {
        while (options[i] == null) {
            let randomKey = getKeyByIndex(generateRandomIndex())

            if(randomKey === challengeKey || options.includes(randomKey)) continue
            else options.push(randomKey)
        }
    }

    for (let i = 0; i < 4; i++) {
        if (i != randomCorrectButton) {
            buttonsOption[i].innerText = options.pop()
        }
    }

    scoreP.innerText = `Score: ${score}`

    const checkAnswer = (option) => {
        if (option == randomCorrectButton) {
            updateScore()

            randomCorrectButton = null
            
            startChallenge()
        }

        else {

        }
    }
    
    buttonsOption[0].addEventListener('click', function() {checkAnswer(0)})
    buttonsOption[1].addEventListener('click', function() {checkAnswer(1)})
    buttonsOption[2].addEventListener('click', function() {checkAnswer(2)})
    buttonsOption[3].addEventListener('click', function() {checkAnswer(3)})
}


window.addEventListener('load', startChallenge)