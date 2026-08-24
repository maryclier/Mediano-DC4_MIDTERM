import { Link } from 'react-router-dom'

const events = [
  {
    id: 1,
    title: 'Intramurals 2026',
    date: 'September 15-19, 2026',
    location: 'School Gymnasium',
    description:
      'A week-long sports event where students compete in different sports and activities representing their departments and courses.'
  },

  {
    id: 2,
    title: 'Acquaintance Party 2026',
    date: 'October 3, 2026',
    location: 'School Covered Court',
    description:
      'A fun gathering where students can meet new classmates, make friends, and enjoy games, performances, and activities.'
  },

  {
    id: 3,
    title: 'Foundation Day 2026',
    date: 'November 20, 2026',
    location: 'School Auditorium',
    description:
      'A special celebration honoring the history, achievements, and founding of the school.'
  },

  {
    id: 4,
    title: 'College Day 2026',
    date: 'December 5, 2026',
    location: 'College Building',
    description:
      'A celebration for college students featuring academic activities, competitions, presentations, and student performances.'
  },

  {
    id: 5,
    title: 'Christmas Party 2026',
    date: 'December 18, 2026',
    location: 'School Gymnasium',
    description:
      'A joyful Christmas celebration with students, faculty, games, performances, food, and gift-giving activities.'
  }
]

function Events() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">

        <h1 className="fw-bold">
          School Events
        </h1>

        <p className="text-secondary">
          Discover upcoming school activities,
          celebrations, and student events.
        </p>

      </div>

      <div className="row g-4">

        {events.map((event) => (

          <div
            className="col-md-6 col-lg-4"
            key={event.id}
          >

            <div className="card h-100 shadow-sm">

              <div className="card-body d-flex flex-column">

                <span className="badge bg-primary align-self-start mb-3">
                  School Event
                </span>

                <h5 className="card-title fw-bold">
                  {event.title}
                </h5>

                <p className="card-text">
                  <strong>Date:</strong>
                  {' '}
                  {event.date}
                </p>

                <p className="card-text">
                  <strong>Location:</strong>
                  {' '}
                  {event.location}
                </p>

                <p className="card-text text-secondary">
                  {event.description}
                </p>

                <Link
                  to={`/events/${event.id}`}
                  className="btn btn-primary mt-auto"
                >
                  View Details
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Events