import { scoreP } from './scripts'

let score = 0

export default updateScore = () => {
    score + 1
    scoreP.innerText = `Score: ${score}`
}

export { score }

