import { useState } from "react";

const itemHeight = 33; // Adjustable global variable
const windowHeight = 800; // Adjustable global variable
const overscan = 4; // Number of extra items to render before the visible range

const VirtualizedList1 = ({ numberOfItems }) => {
    const [scrollTop, setScrollTop] = useState(0);
    const startIndex = Math.max(0,Math.floor(scrollTop / itemHeight)  );
    const endIndex = Math.min(
        numberOfItems,
        Math.floor((scrollTop + windowHeight) / itemHeight)   
    );

    console.log({startIndex,endIndex});

    const generateRows = () => {
        let items = [];
        for (let i = startIndex; i < endIndex; i++) {
            items.push(<ListItem key={i} index={i} />);
        }

        return items;
    };

    console.log(generateRows());

    return (
        <div
            className="overflow-y-scroll w-full border-2 border-black relative"
            style={{ height: `${windowHeight}px`, }}
            onScroll={(e) => {
                setScrollTop(e.currentTarget.scrollTop);
            }}
        >
            <div
                style={{
                    height: `${numberOfItems * itemHeight}px`,
                }}
            >
                {generateRows()}
            </div>
        </div>
    )
}

export default VirtualizedList1

const ListItem = ({ index }) => {
    return (
        <div
            style={{
                height: `${itemHeight}px`,
                top: `${itemHeight * index}px`,
                backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff',
                
            }}
            className="text-center w-full absolute"
        >
            List Item Index - {index}
        </div>
    );
};