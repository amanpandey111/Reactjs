import Chance from "chance"
const chance = Chance()

const getUserName = () => {
    return chance.animal({type: 'zoo'})
}

export default getUserName