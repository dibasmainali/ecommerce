import React, { useState, useEffect } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [file, setFile] = useState(null);
  const [rating, setRating] = useState(0);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [showMore, setShowMore] = useState(false); // State to toggle between showing more reviews

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews"));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      review,
      file: file ? URL.createObjectURL(file) : null,
      rating,
    };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setName("");
    setReview("");
    setFile(null);
    setRating(0);
    setSubmissionStatus("Review submitted successfully!");
    setTimeout(() => setSubmissionStatus(""), 3000); // Clear message after 3 seconds
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const averageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  const reviewsToShow = showMore ? reviews : reviews.slice(0, 4);

  return (
    <div className=" flex flex-col p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8 ml-4 lg:ml-5">
      <div className="">
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-500">
          Submit Your Review
        </h2>
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="border border-teal-500 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-violet-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Review:</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
              className="border border-teal-500 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-violet-300"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Rating:</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className={`text-2xl ${
                    rating >= star ? "text-orange-500" : "text-gray-400"
                  } focus:outline-none`}
                  onClick={() => handleRating(star)}
                  aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
          {submissionStatus && (
            <p className="text-green-500 text-center font-medium">
              {submissionStatus}
            </p>
          )}
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-500">
          Reviews
        </h2>
        <div className="space-y-4">
          {reviewsToShow.length > 0 ? (
            reviewsToShow.map((review, index) => (
              <div
                key={index}
                className="bg-violet-100 p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="mt-2 text-gray-700">{review.review}</p>
                <div className="flex space-x-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-xl ${
                        review.rating >= star
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                    >
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
            ))
          ) : (
            <p className="text-center text-gray-500">No reviews yet.</p>
          )}
        </div>
        {reviews.length > 6 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 transition duration-300"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Review;
