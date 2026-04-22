import { useEffect, useState } from 'react';
import './App.css'
import aboutContent from './assets/about.md?raw';
import policyContent from './assets/polic.md?raw';
import termsContent from './assets/terms.md?raw'
import { marked } from 'marked';

function App() {
  //todo this is the older way
  // const [content, setContent] = useState('');
  // useEffect(() => {
  //   fetch('/about.md')
  //   .then((res) => res.text())
  //   .then((data) => setContent(data))
  // }, [])

  //todo this is the newer way
  const html = marked(aboutContent) //todo this is for single file
  const files = [aboutContent, policyContent, termsContent] //todo this is for multiple files

  return (
    <>

      {/* //todo this is the older way  */}
      {/* <div style={{ padding: 12 }} >
        <pre>{content}</pre>
      </div> */}

      {/* //todo this is done without marked  */}
      <div>
        <h2>THis is React 19 version which is latest created on 14 Apr 2026</h2>
        <pre>{aboutContent}</pre>
      </div>

      {/* //todo this is done with marked for single file */}
      {/* <div
      style={{ padding: 20 }}
      dangerouslySetInnerHTML={{ __html: html }}
      /> */}

      {/* // todo this is done to display muyltiple files */}
      {/* {
        files.map((curMd) => (
          <div style={{ padding: 10 }} dangerouslySetInnerHTML={{ __html: marked(curMd) }} />
        ))
      } */}
    </>
  )
}

export default App
