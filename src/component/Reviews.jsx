import React from 'react'

function Reviews() {
  return (
    <div>
      <section id="testimonials" className="my-12 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="John Doe"
              feedback="Amazing products and great customer service!"
              imageUrl="https://via.placeholder.com/100"
            />
            <TestimonialCard 
              name="Jane Smith"
              feedback="I love my new laptop. Highly recommend Tech Store!"
              imageUrl="https://via.placeholder.com/100"
            />
            <TestimonialCard 
              name="Sam Wilson"
              feedback="Fast shipping and excellent quality. Will buy again!"
              imageUrl="https://via.placeholder.com/100"
            />
          </div>
        </section>
    </div>
  )
}

function TestimonialCard({ name, feedback, imageUrl }) {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className=" flex items-center">
          <img className="w-16 h-16 rounded-full mr-4" src={imageUrl} alt={name} />
          <div>
            <h3 className="text-sm font-semibold">{name}</h3>
            <p className="text-sm">{feedback}</p>
          </div>
        </div>
      </div>
    )
};
// const TestimonialCard = ({ name, feedback, imageUrl }) => {
//     return (
//       <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//         <img src={imageUrl} alt={name} className="w-24 h-24 object-cover rounded-full mx-auto" />
//         <h3 className="text-xl font-semibold mt-4 text-center">{name}</h3>
//         <p className="text-gray-700 mt-2 text-center">{feedback}</p>
//       </div>
//     );
//   };
  


export default Reviews
