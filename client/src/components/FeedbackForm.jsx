import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [serverStatus, setServerStatus] = useState({
    checked: false,
    online: false,
    dbConnected: false
  });

  // Check server status when component mounts
  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api');
        setServerStatus({
          checked: true,
          online: true,
          dbConnected: true // We'll update this when we get feedback response
        });
      } catch (error) {
        setServerStatus({
          checked: true,
          online: false,
          dbConnected: false
        });
      }
    };

    checkServerStatus();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      const response = await axios.post('http://localhost:5000/api/feedback', formData);
      
      // Update DB connection status based on response
      setServerStatus(prev => ({
        ...prev,
        dbConnected: response.data.dbStatus === 'connected'
      }));
      
      if (response.status === 201) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Feedback submitted successfully!' }
        });
        
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        setTimeout(() => {
          setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
          });
        }, 3000);
      }
    } catch (error) {
      // Check if this is a database connection error
      const isDbError = error.response && 
                       error.response.data && 
                       error.response.data.dbStatus === 'disconnected';
      
      if (isDbError) {
        setServerStatus(prev => ({ ...prev, dbConnected: false }));
        setStatus({
          submitted: false,
          submitting: false,
          info: { 
            error: true, 
            msg: 'Database is currently unavailable. Your feedback will not be saved, but you can try again later.'
          }
        });
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { 
            error: true, 
            msg: error.response?.data?.error || error.message || 'An error occurred. Please try again.'
          }
        });
      }
    }
  };

  // If server is offline, show a message
  if (serverStatus.checked && !serverStatus.online) {
    return (
      <div className="feedback-form-container">
        <h2>Share Your Feedback</h2>
        <div className="server-status error">
          <p>
            <i className="fas fa-exclamation-circle"></i>
            Server is currently offline. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="feedback-form-container">
      <h2>Share Your Feedback</h2>
      
      {/* Show DB connection warning if needed */}
      {serverStatus.checked && serverStatus.online && !serverStatus.dbConnected && (
        <div className="server-status warning">
          <p>
            <i className="fas fa-exclamation-triangle"></i>
            Database connection is unavailable. Your feedback will not be saved to the database.
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="submit-btn"
          disabled={status.submitting}
        >
          {status.submitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
        
        {status.info.msg && (
          <div className={`form-message ${status.info.error ? 'error' : 'success'}`}>
            {status.info.msg}
          </div>
        )}
      </form>
    </div>
  );
};

export default FeedbackForm;
