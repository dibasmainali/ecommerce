import React, { useState, useEffect } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [file, setFile] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews'));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, review, file: file ? URL.createObjectURL(file) : null, rating };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    setName('');
    setReview('');
    setFile(null);
    setRating(0);
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="bg-teal-100 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-700">Submit Your Review</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-teal-500 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-700"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="border border-teal-500 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-700"
            required
          ></textarea>
        </div>
       
        <div>
          <label className="block text-sm font-medium mb-2">Rating:</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={`text-2xl ${rating >= star ? 'text-orange-700' : 'text-gray-400'}`}
                onClick={() => handleRating(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className="bg-orange-700 text-white p-3 rounded-lg w-full hover:bg-orange-800 transition duration-300">Submit</button>
      </form>
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-700">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-orange-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{review.name}</h3>
            <p className="mt-2">{review.review}</p>
            <div className="flex space-x-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`text-xl ${review.rating >= star ? 'text-orange-700' : 'text-gray-400'}`}>
                  ★
                </span>
              ))}
            </div>
            {review.file && (
              <img
                src={review.file}
                alt="Review"
                className="mt-4 max-w-full h-auto rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
