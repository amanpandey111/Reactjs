import Navbar from '../ui/Navbar'
import { resumes } from "../../constants/index"
import ResumeCard from '../reusable/ResumeCard'

const Home = () => {
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