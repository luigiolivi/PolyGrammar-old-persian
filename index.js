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

const random = Math.floor(Math.random() * 36)

const letter = (Object.values(letters[random])) + ""
console.log(letter)
