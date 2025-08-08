import LeftSide from './ui/LeftSide'
import RightSide from './ui/RightSide'
import { useSelector } from 'react-redux'

const AllDetail = () => {
  const courses = useSelector((state)=>state.app.course_array)
  return (
    <section className={courses.length>=1?"alldetail-view-section":"alldetail-section"}>
        <div>
            <LeftSide/>
            <RightSide/>
        </div>
    </section>
  )
}

export default AllDetail
{/* <section className={courses.length>=1?"alldetail-view-section":"alldetail-section"}> */}