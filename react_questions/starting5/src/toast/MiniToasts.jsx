
const MiniToasts = ({ myToasts }) => {
  return (
    <>
      {
        myToasts.map((curToast) => {
          return (
            <div key={curToast.id} className={`toast ${curToast.closing ? "closing" : ""}`} >
              <p>{curToast.name}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default MiniToasts;
