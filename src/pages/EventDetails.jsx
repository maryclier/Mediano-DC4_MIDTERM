import { Link, useParams } from 'react-router-dom'

const events = [
  {
    id: 1,
    title: 'Intramurals 2026',
    date: 'September 15-19, 2026',
    time: '8:00 AM - 5:00 PM',
    location: 'School Gymnasium',
    description:
      'A week-long sports event where students compete in different sports and activities representing their departments and courses.'
  },

  {
    id: 2,
    title: 'Acquaintance Party 2026',
    date: 'October 3, 2026',
    time: '5:00 PM - 9:00 PM',
    location: 'School Covered Court',
    description:
      'A fun gathering where students can meet new classmates, make friends, and enjoy games, performances, and activities.'
  },

  {
    id: 3,
    title: 'Foundation Day 2026',
    date: 'November 20, 2026',
    time: '8:00 AM - 4:00 PM',
    location: 'School Auditorium',
    description:
      'A special celebration honoring the history, achievements, and founding of the school.'
  },

  {
    id: 4,
    title: 'College Day 2026',
    date: 'December 5, 2026',
    time: '8:00 AM - 4:00 PM',
    location: 'College Building',
    description:
      'A celebration for college students featuring academic activities, competitions, presentations, and student performances.'
  },

  {
    id: 5,
    title: 'Christmas Party 2026',
    date: 'December 18, 2026',
    time: '5:00 PM - 9:00 PM',
    location: 'School Gymnasium',
    description:
      'A joyful Christmas celebration with students, faculty, games, performances, food, and gift-giving activities.'
  }
]

function EventDetails() {

  const { id } = useParams()

  const event = events.find(
    (event) => event.id === Number(id)
  )

  if (!event) {
    return (
      <div className="container py-5">

        <div className="alert alert-danger">

          <h4 className="alert-heading">
            Event Not Found
          </h4>

          <p>
            The event you are looking for does not exist.
          </p>

          <Link
            to="/events"
            className="btn btn-primary"
          >
            Back to Events
          </Link>

        </div>

      </div>
    )
  }

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card shadow">

            <div className="card-body p-4">

              <span className="badge bg-primary mb-3">
                SCHOOL EVENT
              </span>

              <h1 className="fw-bold mb-4">
                {event.title}
              </h1>

              <div className="row g-3 mb-4">

                <div className="col-md-4">

                  <div className="border rounded p-3 h-100">

                    <strong>Date</strong>

                    <p className="mb-0 text-secondary">
                      {event.date}
                    </p>

                  </div>

                </div>

                <div className="col-md-4">

                  <div className="border rounded p-3 h-100">

                    <strong>Time</strong>

                    <p className="mb-0 text-secondary">
                      {event.time}
                    </p>

                  </div>

                </div>

                <div className="col-md-4">

                  <div className="border rounded p-3 h-100">

                    <strong>Location</strong>

                    <p className="mb-0 text-secondary">
                      {event.location}
                    </p>

                  </div>

                </div>

              </div>

              <h4 className="mb-3">
                About This Event
              </h4>

              <p className="text-secondary">
                {event.description}
              </p>

              <div className="mt-4">

                <Link
                  to="/register"
                  className="btn btn-primary me-2"
                >
                  Register Now
                </Link>

                <Link
                  to="/events"
                  className="btn btn-outline-secondary"
                >
                  Back to Events
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default EventDetails