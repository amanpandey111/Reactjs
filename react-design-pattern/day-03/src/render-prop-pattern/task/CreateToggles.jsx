import ToggleComponent from "./ToggleComponent"

const CreateToggles = () => {
    return (
        <>
            <div>
                <ToggleComponent render={({ isOpen, handleToggle }) => {

                    return (
                        <div>
                            <button onClick={handleToggle} >Toggle1</button>
                            {/* <div className="flex border w-30 rounded-full">
                            <div className={`w-15 h-10 rounded-full ${isOpen ? 'bg-white-500' : 'bg-red-500'}`} ></div>
                            <div className={`w-15 h-10 rounded-full ${isOpen ? 'bg-red-500' : 'bg-white-500'}`} ></div>
                            </div> */}
                            <div
                                className="relative w-20 h-10 rounded-full bg-gray-300 cursor-pointer"
                                onClick={handleToggle}
                            >
                                <div
                                    className={`
                                        absolute top-0 left-0
                                        w-10 h-10 rounded-full
                                        transition-all duration-700 ease-in-out
                                        ${isOpen ? 'translate-x-10 bg-green-500' : 'translate-x-0 bg-red-500'}
                                `}
                                />
                            </div>
                        </div>
                    )
                }} />
            </div>
            <div>
                <ToggleComponent render={({ isOpen, handleToggle }) => {

                    return (
                        <div>
                            <button onClick={handleToggle} >Toggle2</button>
                        </div>
                    )
                }} />
            </div>
        </>
    )
}

export default CreateToggles;
