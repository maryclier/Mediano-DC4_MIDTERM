import { Link, useLocation } from 'react-router-dom'

function Confirmation() {

  const location = useLocation()

  const name = location.state?.name
  const event = location.state?.event

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-8 col-lg-6">

          <div className="card shadow text-center">

            <div className="card-body p-5">

              <div className="display-1 text-success mb-3">
                ✓
              </div>

              <h1 className="fw-bold text-success">
                Registration Successful!
              </h1>

              {name && event ? (

                <p className="lead mt-3">

                  Thank you,{' '}
                  <strong>{name}</strong>!

                  <br />

                  You are registered for{' '}
                  <strong>{event}</strong>.

                </p>

              ) : (

                <p className="text-secondary">
                  Your registration has been successfully submitted.
                </p>

              )}

              <Link
                to="/events"
                className="btn btn-primary mt-3"
              >
                Browse More Events
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Confirmation