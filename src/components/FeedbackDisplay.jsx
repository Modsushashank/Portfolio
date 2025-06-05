import { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../api';
import '../styles/FeedbackDisplay.css';

const FeedbackDisplay = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/feedback`);
        
        if (response.data.success) {
          // Get the most recent 5 feedbacks
          const recentFeedbacks = response.data.data.slice(0, 5);
          setFeedbacks(recentFeedbacks);
          setError(null);
        } else {
          throw new Error('Failed to fetch feedbacks');
        }
      } catch (err) {
        console.error('Error fetching feedbacks:', err);
        setError('Unable to load feedbacks. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return <div className="feedback-loading">Loading feedbacks...</div>;
  }

  if (error) {
    return <div className="feedback-error">{error}</div>;
  }

  return (
    <div className="feedback-display">
      <h2>People Who've Visited</h2>
      
      {feedbacks.length === 0 ? (
        <p className="no-feedbacks">No visitors yet. Be the first to leave your mark!</p>
      ) : (
        <div className="feedback-carousel">
          {feedbacks.map((feedback, index) => (
            <div key={feedback._id} className="feedback-card">
              <div className="feedback-content">
                <div className="visitor-info">
                  <p className="author-name">{feedback.name}</p>
                  <p className="feedback-date">{formatDate(feedback.createdAt)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackDisplay;
