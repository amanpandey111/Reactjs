import Tabs from "./Tabs";

function MyTabs() {
    return(
        <Tabs>
            <Tabs.List>
                <Tabs.Tab id="1">Tab 1</Tabs.Tab>
                <Tabs.Tab id="2">Tab 2</Tabs.Tab>
                <Tabs.Tab id="3">Tab 3</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel id="1">This is Content From Tab 1</Tabs.Panel>
            <Tabs.Panel id="2">This is Content From Tab 2</Tabs.Panel>
            <Tabs.Panel id="3">This is Content From Tab 3</Tabs.Panel>
        </Tabs>
    )
}