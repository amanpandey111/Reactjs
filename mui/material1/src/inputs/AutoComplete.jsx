import React from 'react'
import { Autocomplete, TextField } from '@mui/material'

const AutoComplete = () => {
    const top100Films = [
        {label:"movie1"},
        {label:"movie2"},
        {label:"movie3"},
        {label:"movie4"},
        {label:"movie5"},
        {label:"movie6"},
        {label:"movie7"},
        {label:"movie8"},
        {label:"movie9"},
        {label:"movie10"},
    ]
    const options = ["one","two","three","four","five","six"]
  return (
    <div>
        <h1>AutoComplete Concept</h1>
        <h3 style={{color:"green"}} >Combo Box</h3>
        <Autocomplete
        // disablePortal
        // options={options}                       //todo : using array of string
        options={top100Films}                      //todo : using array of object
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        />
        <br /><br />

        <h3 style={{color:"green"}} >Playground</h3>
    </div>
  )
}

export default AutoComplete