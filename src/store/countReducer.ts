export type InitialStateType = typeof InitialState;
type ActionTypes = ReturnType<typeof incrementAC> | ReturnType<typeof SetToMinValueAC>

const InitialState = {
    counterValue: 0
}

const countReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "INCREMENT": {
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        }
        case "SET-MIN-VALUE": {
            return {
                ...state,
                counterValue: action.minValue
            }
        }
        default: {
            return state
        }
    }
}

export const incrementAC = () => (
    {type: "INCREMENT"} as const
)
export const SetToMinValueAC = (minValue: number) => {
    return {type: "SET-MIN-VALUE", minValue} as const
}

export default countReducer;