import { createContext, useCallback, useContext, useState } from "react"
import Notification from "./notification/Notification"
import ToastContainer from "./ToastContainer"

export const ToastContext = createContext()

export const useNotification = () => useContext(ToastContext)

function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([])
    const id = new Date().getTime()

    const addNotification = useCallback(({ title, description, type, cta, position }) => {
        const obj = { title, description, type, cta, position };
        const id = new Date().getTime()
        setToasts((prev) => {
            return [{ ...obj, id }, ...prev]
        })
    }, []);

    function onRemove(id) {
        setToasts((prev) => {
            return prev.filter((toast) => toast.id !== id)
        })
    }

    function updateToast(id) {
        console.log("hy");
        setToasts((prev) => {
            return prev.map((toast) => {
                toast.exiting = toast.id === id;
                return toast
            })
        })
    }

    console.log(toasts);
    return (
        <ToastContext.Provider value={addNotification}>
            {children}
            <ToastContainer updateToast={updateToast} toasts={toasts} onRemove={onRemove} />
        </ToastContext.Provider>
    )
}

export default ToastProvider