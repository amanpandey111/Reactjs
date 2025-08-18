
const Condition = () => {
  return (
    <div>
        {/*//todo if marks was there then display it else not */}
        { !!10 && <h1> Well Done You Have Made It. </h1> } 

        {/*//todo if marks was there then display it else not */}
        { !0 && <h1>Better Luck Next Time</h1> }
    </div>
  )
}

export default Condition