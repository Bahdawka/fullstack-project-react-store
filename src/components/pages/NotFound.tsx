import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">404 - Page Not Found</h1>
        <p className="page-subtitle">
          The page you're looking for doesn't exist.
        </p>
      </div>

      <div className="welcome-section">
        <div className="error-container">
          <div className="error-icon">❌</div>
          <h2 className="error-title">Oops! Page Not Found</h2>
          <p className="error-description">
            The page you are trying to access does not exist or has been moved.
          </p>
          <div className="error-actions">
            <button
              className="form-button"
              onClick={() => navigate('/')}
            >
              Go Home
            </button>
            <button
              className="form-button"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound