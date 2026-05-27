interface StateType {
    on: boolean;
    clicks: number;
}

type ActionTypes = 'toggle' | 'reset'
interface ActionType {
    type: ActionTypes
}

function toggleReducer(state: StateType, action: ActionType) {
    switch (action.type) {
        case 'toggle':
            return { ...state, on: !state.on, clicks: state.clicks + 1 }
        case 'reset':
            return { ...state, on: false, clicks: 0 }
        default:
            return state;
    }
}

function customToggleReducer(state: StateType, action: ActionType) {
    switch (action.type) {
        case 'toggle':
            if (state.clicks >= 3) return state;
            return { ...state, on: !state.on, clicks: state.clicks + 1 }
        case 'reset':
            return { ...state, on: false, clicks: 0 }
        default:
            return state;
    }
}

export { toggleReducer, customToggleReducer }
