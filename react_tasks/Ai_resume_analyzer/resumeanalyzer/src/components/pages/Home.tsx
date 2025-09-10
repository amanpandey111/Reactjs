import Navbar from '../ui/Navbar'
import { resumes } from "../../constants/index"
import ResumeCard from '../reusable/ResumeCard'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { usePuterStore } from '../../lib/puter'

const Home = () => {
    const { isLoading, auth } = usePuterStore()
    const navigate = useNavigate()
    const location = useLocation()
    const next = location.search.split('next=')[1]
    console.log(auth.isAuthenticated);

    useEffect(() => {
        if (!auth.isAuthenticated) navigate('/auth?next=/')
    }, [auth.isAuthenticated])
    return (
        <main className='bg-[url("/images/bg-main.svg")] bg-cover' >
            <Navbar />
            <section className='main-section ' >
                <div className='page-heading py-16' >
                    <h1>Track Your Application & Resume Rating</h1>
                    <h2>Review Your Submission and AI-powered Feedback</h2>
                </div>
                {
                    resumes.length > 0 && (
                        <div className='resumes-section' >
                            {
                                resumes?.map((resume) => {
                                    return (
                                        <ResumeCard key={resume.id} resume={resume} />
                                    )
                                })
                            }
                        </div>
                    )
                }
            </section>
        </main>
    )
}

export default Home