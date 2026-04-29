import { useState } from "react";

const ToggleComponent = ({render}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen((prev) => !prev)
    }
    return (
        <div>
            {render({isOpen, handleToggle})}
        </div>
    )
}

export default ToggleComponent;


