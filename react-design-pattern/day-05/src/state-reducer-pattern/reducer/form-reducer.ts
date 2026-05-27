import type { ActionType, InitialStateType } from "../context"

const defaultFormReducer = (state: InitialStateType, action: ActionType) => {

    switch(action.type) {
        case 'CHANGE_FIELD':
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.payload.name]: action.payload.value
                }
            }
        default:
            return state;
    }
}

const customFormReducer = (state: InitialStateType, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE_FIELD': {
            const base = {
                ...state,
                values : {
                    ...state.values,
                    [action.payload.name] : action.payload.value,
                }
            }
            if (action.payload.name === 'name' && /\d/.test(action.payload.value)) {
                base.errors[action.payload.name] = 'Name Cannot Contain Numbers'
            } else if (action.payload.name === 'email' && !action.payload.value.endsWith('.com')) {
                base.errors[action.payload.name] = 'Email must End With .com';
            } else {
                delete base.errors[action.payload.name];
            }
            return base;
        }
    
        default:
            return state;
    }
}

export { defaultFormReducer, customFormReducer };
