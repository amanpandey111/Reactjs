import Notification from "./notification/Notification"

function ToastContainer({ toasts = [], onRemove, updateToast }) {
    const position = toasts?.[0]?.position || "top-right"
    console.log(position);
    return (
        <div data-position={position} className="toast-container" >
            {
                toasts.map((toast) => {
                    return (
                        <Notification updateToast={updateToast} {...toast} key={toast.id} onRemove={onRemove} />
                    )
                })
            }
        </div>
    )

}
export default ToastContainer