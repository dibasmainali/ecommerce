import React, { useState, useEffect } from "react";

const Review = () => {
  // State to store reviews, input fields, and other form-related data
  const [reviews, setReviews] = useState([]); // Stores the list of reviews
  const [name, setName] = useState(""); // Stores the user's name input
  const [review, setReview] = useState(""); // Stores the user's review input
  const [file, setFile] = useState(null); // Stores an optional file upload (image)
  const [rating, setRating] = useState(0); // Stores the user's rating (1-5 stars)
  const [submissionStatus, setSubmissionStatus] = useState(""); // Stores submission success message
  const [showMore, setShowMore] = useState(false); // State to toggle between showing more reviews

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews"));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new review object with input values
    const newReview = {
      name,
      review,
      file: file ? URL.createObjectURL(file) : null, // Convert file to URL if uploaded
      rating,
    };

    // Update the list of reviews and save it to localStorage
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    // Clear input fields after submission
    setName("");
    setReview("");
    setFile(null);
    setRating(0);

    // Show success message for 3 seconds
    setSubmissionStatus("Review submitted successfully!");
    setTimeout(() => setSubmissionStatus(""), 3000);
  };

  // Handle rating selection
  const handleRating = (rate) => {
    setRating(rate);
  };

  // Calculate the average rating from all reviews
  const averageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  // Control how many reviews to show (first 4 or all, based on 'showMore')
  const reviewsToShow = showMore ? reviews : reviews.slice(0, 4);

  return (
    <div className="flex flex-col p-4 rounded-lg shadow-lg max-w-3xl mx-auto mt-8 ml-4 lg:ml-5">
      {/* Form section for submitting reviews */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-500">
          Submit Your Review
        </h2>
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          {/* Name input field */}
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

          {/* Review input field */}
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

          {/* Rating stars input */}
          <div>
            <label className="block text-sm font-medium mb-2">Rating:</label>
            <div className="flex space-x-1">
              {/* Render 5 clickable stars for rating */}
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

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>

          {/* Success message */}
          {submissionStatus && (
            <p className="text-green-500 text-center font-medium">
              {submissionStatus}
            </p>
          )}
        </form>
      </div>

      {/* Section to display all reviews */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-500">
          Reviews
        </h2>

        {/* List of reviews */}
        <div className="space-y-4">
          {reviewsToShow.length > 0 ? (
            reviewsToShow.map((review, index) => (
              <div
                key={index}
                className="bg-violet-100 p-4 rounded-lg shadow-md"
              >
                {/* Display reviewer name */}
                <h3 className="text-lg font-semibold">{review.name}</h3>

                {/* Display review text */}
                <p className="mt-2 text-gray-700">{review.review}</p>

                {/* Display review rating as stars */}
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

                {/* Display image if the reviewer uploaded one */}
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

        {/* Show More/Show Less button (if there are more than 6 reviews) */}
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
