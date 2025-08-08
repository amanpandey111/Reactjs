import LeftSide from './ui/LeftSide'
import RightSide from './ui/RightSide'
import { useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'

const AllDetail = () => {
  const courses = useSelector((state)=>state.course_array)
  return (
    <section className={courses.length>=1?"alldetail-view-section":"alldetail-section"}
    style={{}}
    >
        <Stack direction={'row'} sx={{gap:"2rem"}} >
            <LeftSide/>
            <RightSide/>
        </Stack>
    </section>
  )
}

export default AllDetail