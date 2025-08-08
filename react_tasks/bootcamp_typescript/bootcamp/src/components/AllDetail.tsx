// import LeftSide from './ui/LeftSide'
import LeftSide from './ui/LeftSide'
import RightSide from './ui/RightSide'
import { useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'

const AllDetail = () => {
  const courses = useSelector((state:any)=>state.course_array)
  return (
    <section className={courses.length>=1?"alldetail-view-section":"alldetail-section"}
    style={{width:'100%', position: 'absolute' }}
    >
        <Stack direction={'row'} sx={{gap:"2rem !important"}}>
            <LeftSide/>
            <RightSide/>
        </Stack>
    </section>
  )
}

export default AllDetail