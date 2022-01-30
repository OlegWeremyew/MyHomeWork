import {UserType} from "../HW8";

type ActionType = { type: 'age', payload: 'up' | "down" } | { type: 'drink', payload: number }

export const AlternativeReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'age': {
            const newState = [...state].sort((a, b) => {
                if (a.age > b.age) return 1
                else if (a.age < b.age) return -1
                else return 0
            })

            return action.payload === "up" ? newState : newState.reverse()
        }
        case 'drink': {
            return state.filter(a => a.age >= action.payload)
        }
        default:
            return state
    }
}