import { useState } from "react";

const GenerateImage = () => {
    const[myText, setMyText] = useState('')

    async function generateImage() {
        let res = await puter.ai.txt2img("A futuristic cityscape at night")
        console.log(res);
    }

    console.log(myText);

    return (
        <div>
            <h2>Let's Generate Image from text</h2>
            {/* <form> */}
                <input type="text" placeholder="enter text to generate image" value={myText} onChange={(e)=>setMyText(e.target.value)} /> <br /> <br />
                <button onClick={generateImage} >generate image</button>
            {/* </form> */}
        </div>
    )
}

export default GenerateImage