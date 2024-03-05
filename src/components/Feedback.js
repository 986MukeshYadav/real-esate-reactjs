import  { useState } from 'react';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const submitFeedback = () => {
    // Add logic to handle feedback submission
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    // Add API call or other logic for feedback submission
  };

  return (
    <>
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', margin: 0, padding: 0 }}>
        <div style={{ width: '80%', margin: 'auto' }}>
          <div id="feedback-form" style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
            <h2>Please rate your experience</h2>

            {/* Star Ratings */}
            <div>
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  style={{
                    fontSize: '24px',
                    cursor: 'pointer',
                    display: 'inline-block',
                    color: value <= rating ? 'orange' : 'black',
                  }}
                  onClick={() => handleRatingChange(value)}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Feedback Message */}
            <textarea
              id="feedback-message"
              style={{ width: '100%', height: '80px', marginTop: '10px' }}
              placeholder="Leave your feedback..."
              value={feedback}
              onChange={handleFeedbackChange}
            ></textarea>

            {/* Submit Buttons */}
            <button style={{ marginTop: '20px', backgroundColor: 'blue', color: 'white' }} className="btn" id="submit-button" onClick={submitFeedback}>
              Submit
            </button>
            <button style={{ marginTop: '20px', marginLeft: '5px', backgroundColor: 'green', color: 'white' }} className="btn" id="submit-button" onClick={() => window.location.href = 'index.jsp'}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
