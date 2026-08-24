import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    const newErrors = {}

    // NAME VALIDATION

    if (formData.name.trim() === '') {

      newErrors.name = 'Name is required.'

    } else if (formData.name.trim().length < 2) {

      newErrors.name =
        'Name must be at least 2 characters.'

    }

    // EMAIL VALIDATION

    if (formData.email.trim() === '') {

      newErrors.email = 'Email is required.'

    } else if (!formData.email.includes('@')) {

      newErrors.email =
        'Please enter a valid email address.'

    }

    // EVENT VALIDATION

    if (formData.event === '') {

      newErrors.event =
        'Please select a school event.'

    }

    // SAVE ERRORS

    setErrors(newErrors)

    // STOP IF ERRORS EXIST

    if (Object.keys(newErrors).length > 0) {
      return
    }

    // SUCCESSFUL REGISTRATION

    navigate('/confirmation', {
      state: {
        name: formData.name,
        event: formData.event
      }
    })
  }

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-8 col-lg-6">

          <div className="card shadow">

            <div className="card-body p-4">

              <h1 className="fw-bold mb-2">
                Event Registration
              </h1>

              <p className="text-secondary mb-4">
                Register for one of our upcoming school events.
              </p>

              <form onSubmit={handleSubmit}>

                {/* FULL NAME */}

                <div className="mb-3">

                  <label
                    htmlFor="name"
                    className="form-label fw-bold"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={
                      errors.name
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name}
                    </div>
                  )}

                </div>

                {/* EMAIL */}

                <div className="mb-3">

                  <label
                    htmlFor="email"
                    className="form-label fw-bold"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={
                      errors.email
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email}
                    </div>
                  )}

                </div>

                {/* SCHOOL EVENT */}

                <div className="mb-4">

                  <label
                    htmlFor="event"
                    className="form-label fw-bold"
                  >
                    Select School Event
                  </label>

                  <select
                    id="event"
                    name="event"
                    className={
                      errors.event
                        ? 'form-select is-invalid'
                        : 'form-select'
                    }
                    value={formData.event}
                    onChange={handleChange}
                  >

                    <option value="">
                      -- Select an Event --
                    </option>

                    <option value="Intramurals 2026">
                      Intramurals 2026
                    </option>

                    <option value="Acquaintance Party 2026">
                      Acquaintance Party 2026
                    </option>

                    <option value="Foundation Day 2026">
                      Foundation Day 2026
                    </option>

                    <option value="College Day 2026">
                      College Day 2026
                    </option>

                    <option value="Christmas Party 2026">
                      Christmas Party 2026
                    </option>

                  </select>

                  {errors.event && (
                    <div className="invalid-feedback">
                      {errors.event}
                    </div>
                  )}

                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Submit Registration
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Register