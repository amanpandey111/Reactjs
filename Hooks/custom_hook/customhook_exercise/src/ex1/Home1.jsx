import useAuth from "./useAuth"

const Home1 = () => {
    const{str} = useAuth()
  return (
    <>
      <h1>{str ? "User Profile" : "Not Authenticated"}</h1>
    </>
  )
}

export default Home1