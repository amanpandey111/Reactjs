//! handled form using useReducer
import { useReducer } from 'react';

const initialState = {
    name: '',
    email: ''
};

const HandleForm = () => {
    function reducer(state, action) {
        switch (action.type) {
            case "handle_change":
                return {
                    ...state,
                    [action.field]: action.value
                };
            case "submit":
                console.log("Form submitted with state:", state);
                return initialState;
                // return state;
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleInputChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: "handle_change",
            field: name, 
            value: value 
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: "submit" });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder='Enter Your Name'
                        type="text"
                        name='name'
                        value={state.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <input placeholder='Enter Your Email'
                        type="text"
                        name='email'
                        value={state.email}
                        onChange={handleInputChange}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default HandleForm;