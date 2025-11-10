import { useState } from "react"

function SearchFilter(){
  const[searchedQuery, setSearchedQuery] = useState("")
  const[listThings, setListThings] = useState([
    "Apple", "banana", "Grapes", "PineApple", "Guava", "cricket", "Football", "Rubgy", "UFC", "Karan", "Rohith", "Harinath", "Akhil;", "Ramesh", "Dinesh"
  ])
  const[listToDisplay, setListToDisplay] = useState(listThings)

  function handleInputChange(e){
    setSearchedQuery(e.target.value)
    let final = listThings.filter((t)=>t.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
    setListToDisplay(final)
  }

  return <div>
    <input placeholder="Search Your Query" name="searchedQuery" value={searchedQuery} onChange={(e)=>handleInputChange(e)} />
    {
      listToDisplay.map((t)=> <p>{t}</p> )
    }
  </div>
}

export default SearchFilter