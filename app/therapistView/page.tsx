import Image from "next/image";
import "./therapistStyles.css";

export default function TherapistView() {
  return (
    <>
      {/* Navbar */}
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
                <a className="nav-link" href="/therapistView/calendar">Calendar</a>
              </li>

            </ul>

            <a className="nav-link ms-auto" href="#">
              <i className="bi bi-person-circle fs-3"></i>
            </a>
          </div>
        </div>
      </nav>

      <main className="py-5" style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #94f1f1ff, #5fc3fdff)" }}>
        <div className="container" style={{ backgroundColor: "transparent" }}>
          <div className="row align-items-start">
            <div className="col-md-7 d-flex justify-content-center align-items-center">
              <WelcomeCard therapistName="name" />
            </div>

            <div className="col-md-5 d-flex flex-column gap-3">
              <div className="text-center text-raleway fs-5">
                <div className="rounded-top-3 py-2" style={{ backgroundColor: "rgba(255, 255, 255, 1)", backdropFilter: "blur(10px)" }}>
                  Upcoming Meetings
                </div>
                <div className="border-top py-2" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", backdropFilter: "blur(10px)" }}>
                  George Yousefson @ Monday, 5:30pm
                </div>
                <div className="border-top rounded-bottom-3 py-2" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", backdropFilter: "blur(10px)" }}>
                  Alicia Shells @ Wednesday, 4:00pm
                </div>
              </div>

              <div className="text-center text-raleway fs-5">
                <div className="rounded-top-3 py-2" style={{ backgroundColor: "rgba(255, 255, 255, 1)", backdropFilter: "blur(10px)" }}>
                  New Requests
                </div>
                <div className="border-top py-2 px-4 d-flex justify-content-between align-items-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", backdropFilter: "blur(10px)" }}>
                  <span>Lily Shwartz</span>
                  <button type="button" className="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#requestModal">
                    View
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container rounded-5 my-5 py-3 px-3" style={{ backgroundColor: "rgba(255, 255, 255, 1)", backdropFilter: "blur(10px)" }}>
          <div className="container text-raleway display-4 my-3">
            Your Current Patients:
          </div>
          <div className="container">
            <div className="pretty-scroll">
              <div className="card text-raleway" style={{ width: "18rem", flexShrink: 0 }}>
                <Image src="/exDude1.jpg" className="card-img-top" alt="profileimg" width={288} height={280} style={{ objectFit: "cover", boxShadow: "0 8px 20px rgba(0,0,0,0.25)" }} />
                <div className="card-body">
                  <h5 className="card-title">George Yousefson</h5>
                  <p className="card-text">Current Yoga Plan</p>
                  <p className="card-text">Next Meeting Date: 11/24/25</p>
                </div>
              </div>
              <div className="card text-raleway" style={{ width: "18rem", flexShrink: 0 }}>
                <Image src="/exDude2.jpg" className="card-img-top" alt="profileimg" width={288} height={280} style={{ objectFit: "cover", boxShadow: "0 8px 20px rgba(0,0,0,0.25)" }} />
                <div className="card-body">
                  <h5 className="card-title">Alicia Shells</h5>
                  <p className="card-text">Current Yoga Plan</p>
                  <p className="card-text">Next Meeting Date: 12/24/25</p>
                </div>
              </div>
              <div className="card text-raleway" style={{ width: "18rem", flexShrink: 0 }}>
                <Image src="/exDude3.jpg" className="card-img-top" alt="profileimg" width={288} height={280} style={{ objectFit: "cover", boxShadow: "0 8px 20px rgba(0,0,0,0.25)" }} />
                <div className="card-body">
                  <h5 className="card-title">Jennifer Bells</h5>
                  <p className="card-text">Current Yoga Plan</p>
                  <p className="card-text">Next Meeting Date: 12/24/25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="modal fade " id="requestModal" tabIndex={-1} aria-labelledby="requestModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Lily Shwartz</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Info about Patient
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-5 text-raleway mt-f" style={{ backgroundColor: "#ffffffff" }}>
        <div className="container text-dark text-center">
          <p className="display-5 mb-3">Yoga Network</p>
          <small className="text-dark-50">&copy; contact info</small>
        </div>
      </footer>
    </>
  );
}

interface WelcomeCard {
  therapistName: string;
}

export function WelcomeCard({therapistName}: WelcomeCard) {
  return (
    <div className="text-raleway rounded-5 p-5 my-3" style={{
      width: "100%",
      minHeight: "300px",
      backgroundColor: "rgba(255, 255, 255, 1)",
      backdropFilter: "blur(10px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 className="display-5 fw-semibold">
        Welcome back {therapistName}!
      </h1>
    </div>
  );
}

interface NextMeetings {
  patientName: string;
  meetingDate: string;
}

export function NextMeeting({patient}: { patient: NextMeetings}) {
  return (
    <div className="border-top py-2" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", backdropFilter: "blur(10px)" }}>
      {patient.patientName} : {patient.meetingDate}
    </div>
  );
}

// Still working on this