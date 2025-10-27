import "../therapistStyles.css";

export default function Calendar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4 text-raleway" style={{ backgroundColor: "#ffffffff" }} data-bs-theme="light">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand" href="/therapistView">Yoga Network</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-lg-0 mt-1">
                            <li className="nav-item">
                                <a className="nav-link" href="/therapistView/patients">Patients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/therapistView/requests">Requests</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/therapistView/calendar">Calendar</a>
                            </li>

                        </ul>

                        <a className="nav-link ms-auto" href="#">
                            <i className="bi bi-person-circle fs-3"></i>
                        </a>
                    </div>
                </div>
            </nav>

            <main>
                <div className="text-raleway py-5">
                    Maybe use react big calendar.
                </div>
            </main>
            
            <footer className="py-5 text-raleway mt-f" style={{ backgroundColor: "#ffffffff" }}>
                <div className="container text-dark text-center">
                    <p className="display-5 mb-3">Yoga Network</p>
                    <small className="text-dark-50">&copy; contact info</small>
                </div>
            </footer>
        </>
    )
}