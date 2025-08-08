const About = ()=> {
    return(
        <section className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                <img
                    src="./about_us.png"
                    alt="About Us"
                    className="img-fluid rounded shadow"
                />
                </div>
                <div className="col-md-6">
                <h2 className="text-primary mb-3">About Us</h2>
                <p className="text-muted">
                    Welcome to <strong>YourMovieHub</strong>, your ultimate destination for discovering the latest and greatest in movies and TV shows.
                    Inspired by platforms like Netflix, our mission is to deliver a seamless and engaging experience for movie lovers.
                </p>
                <p className="text-muted">
                    Whether you're in the mood for drama, action, thrillers, or documentaries, our platform helps you explore, search, and enjoy your favorite titles all in one place.
                    We combine the power of smart recommendations with a user-friendly interface to make your entertainment journey smooth and exciting.
                </p>
                <p className="text-muted">
                    Dive into a world of cinema — anywhere, anytime.
                </p>
                </div>
            </div>
        </section>

    )
}
export default About