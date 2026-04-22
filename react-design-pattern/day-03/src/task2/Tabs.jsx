import { createContext, useContext, useState } from "react";

const TabContext = createContext()

function TabList({children}) {
    return (
        <div style={{ display: 'flex', gap: 10 }} >
            {children}
        </div>
    )
}

function Tab({children, id}) {
    const context = useContext(TabContext);
    const isActive = context.activeTabs === id;
    return (
        <button
        onClick={() => context.setActiveTabs(id)}
        style={{
            padding: 10,
            background: isActive ? 'red' : 'gray',
            color: 'white'
        }}
        >
            {children}
        </button>
    )
}

function TabPanel({children, id}) {
    const context = useContext(TabContext);
    if(context.activeTabs !== id) return null;
    return (
        <div style={{ marginTop: 10 }} >
            {children}
        </div>
    )
}

function Tabs({children}) {
    const [activeTabs, setActiveTabs] = useState('1');
    return (
        <TabContext.Provider value={{ activeTabs, setActiveTabs }}>
            {children}
        </TabContext.Provider>
    )
}

Tabs.List = TabList
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

export default Tabs;
