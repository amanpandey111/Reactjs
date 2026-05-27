import { useFormContext } from "../hook/useFormContext";

const FormField = () => {
    const { state, dispatch } = useFormContext()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_FIELD',
            payload: { name: e.target.name, value: e.target.value }
        })
    }
    return (
        <div>
            <input
                name='name'
                value={state.values.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="border p-2 rounded"
            />
            <input
                name='email'
                value={state.values.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="border p-2 rounded"
            />
        </div>
    )
}

export default FormField;
