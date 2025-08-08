import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'

const option = ["apple","banana","mango","pineapple","grapes","kiwi","dragon fruit"]

const MyAutoComplete1 = () => {
    const[inputvalue,setInputValue] = useState("")
    const handleInputChange = (e,value) => {
        console.log(value);
        setInputValue(value)
    }
    // const handleKey = (e) => {
    //     console.log(e.key);
    // }
  return (
    <>
    <h1>Hello World</h1>
    <Autocomplete
     inputValue={inputvalue}
     onInputChange={handleInputChange}
     options={option}
     renderInput={(props)=> <TextField {...props} label="serach courses" /> }
    //  onKeyDown={handleKey}
    />
    </>
  )
}

export default MyAutoComplete1