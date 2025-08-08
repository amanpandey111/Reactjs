import Chance from "chance"
const chance = Chance()

let getUserName = () => {
    return chance.name({ middle: true })
}

export default getUserName