// import React, { useState } from 'react'

// const CustomTab = () => {
//     const[tab,setTab] = useState("one")
//     console.log(tab);
//   return (
//     <section>
//         <div>
//             <button className='border-2' onClick={()=>setTab("one")} >tab1</button>
//             <button className='border-2' onClick={()=>setTab("two")} >tab2</button>
//             <button className='border-2' onClick={()=>setTab("three")} >tab3</button>
//         </div>
//         <div>
//             { tab=="one" && <h1>I am in Tab one</h1> }
//             { tab=="two" && <h1>I am in Tab Two</h1> }
//             { tab=="three" && <h1>I am in Tab Three</h1> }
//         </div>
//     </section>
//   )
// }

// export default CustomTab


//! another way of switching among the tabs
import React, { useState } from 'react';
// 1. Define your tab data in an array of objects
const tabData = [
  { id: 'one', label: 'Tab 1', content: <TabOne/> },
  { id: 'two', label: 'Tab 2', content: <h1>I am in Tab Two</h1> },
  { id: 'three', label: 'Tab 3', content: <h1>I am in Tab Three</h1> },
  { id: 'four', label: 'Tab 4', content: <h1>I am in Tab Four</h1> }, // Easily add more tabs
];

const CustomTab = () => {
  const [activeTab, setActiveTab] = useState('one');

  // 2. Find the content for the currently active tab
  const activeTabContent = tabData.find((tab) => tab.id === activeTab)?.content;
//   console.log(activeTabContent);

  return (
    <section>
      <div>
        {/* 3. Map over the tabData array to render buttons */}
        {tabData.map((tab) => (
          <button style={{padding:"8px"}}
            key={tab.id}
            className={`border-2 p-3 m-1 cursor-pointer ${activeTab === tab.id ? 'bg-blue-500 text-white p-3' : 'bg-gray-200 p-[30px]'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            
          </button>
        ))}
      </div>
      <div>
        {/* 4. Render the found content */}
        {activeTabContent}
      </div>
    </section>
  );
};

export default CustomTab;

function TabOne(){
    return(
        <h1>Content From Tab One</h1>
    )
}