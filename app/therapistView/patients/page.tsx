import Image from "next/image";
import "../therapistStyles.css";

export default function Patients() {
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
                                <a className="nav-link active" aria-current="page" href="/therapistView/patients">Patients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/therapistView/requests">Requests</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/therapistView/calendar">Calendar</a>
                            </li>

                        </ul>

                        <a className="nav-link ms-auto" href="#">
                            <i className="bi bi-person-circle fs-3"></i>
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-5" style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #94f1f1ff, #5fc3fdff)" }}>
                <div className="container text-raleway fw-semibold display-4">
                    Your Current Patients:
                </div>
                <div className="container">
                    <div className="pretty-scroll">
                        <div className="card text-raleway" style={{ width: "18rem", flexShrink: 0 }}>
                            <Image src="/exDude1.jpg" className="card-img-top" alt="profileimg" width={288} height={280} style={{ objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">George Yousefson</h5>
                                <p className="card-text">Current Yoga Plan</p>
                                <p className="card-text">Next Meeting Date: 11/24/25</p>
                            </div>
                        </div>
                        <div className="card text-raleway" style={{ width: "18rem", flexShrink: 0 }}>
                            <Image src="/exDude2.jpg" className="card-img-top" alt="profileimg" width={288} height={280} style={{ objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">Alicia Shells</h5>
                                <p className="card-text">Current Yoga Plan</p>
                                <p className="card-text">Next Meeting Date: 12/24/25</p>
                            </div>
                        </div>
                        <div className="card text-raleway" style={{ width: "18rem", flexShrink: 0 }}>
                            <Image src="/exDude3.jpg" className="card-img-top" alt="profileimg" width={288} height={280} style={{ objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">Jennifer Bells</h5>
                                <p className="card-text">Current Yoga Plan</p>
                                <p className="card-text">Next Meeting Date: 12/24/25</p>
                            </div>
                        </div>
                    </div>
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