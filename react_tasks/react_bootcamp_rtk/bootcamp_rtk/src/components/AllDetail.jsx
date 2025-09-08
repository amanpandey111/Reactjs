import React, { Suspense } from 'react'
import LeftSide from './ui/LeftSide'
// import RightSide from './ui/RightSide'
import { useSelector } from 'react-redux'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ui/ErrorFallback'

const RightSide = React.lazy(()=>import('./ui/RightSide'))

const AllDetail = () => {
  const courses = useSelector((state)=>state.app.course_array)
  return (
    <section className={courses.length>=1?"alldetail-view-section":"alldetail-section"}>
        <div>
            <LeftSide/>
            <ErrorBoundary
            FallbackComponent={ErrorFallback} onReset={()=>{}}
            >
              <Suspense fallback={<div>Loading...</div>} >
                <RightSide/>
              </Suspense>
            </ErrorBoundary>
        </div>
    </section>
  )
}

export default AllDetail
{/* <section className={courses.length>=1?"alldetail-view-section":"alldetail-section"}> */}