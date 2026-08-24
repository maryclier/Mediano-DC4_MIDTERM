import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-light min-vh-100">

      <div className="container">

        <div className="row align-items-center text-center min-vh-100">

          <div className="col-lg-8 mx-auto">

            <h1 className="display-3 fw-bold mb-3">
              Welcome to EventHub
            </h1>

            <p className="lead text-secondary mb-4">
              Your one-stop place for school events,
              activities, celebrations, and student gatherings.
            </p>

            <Link
              to="/events"
              className="btn btn-primary btn-lg"
            >
              Browse School Events
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Home