import Chance from "chance";
const chance = Chance()

const userGenarate = () => {
    return chance.word({ length: 5 })
}

export default userGenarate