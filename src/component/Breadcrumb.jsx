// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Breadcrumb = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   return (
//     <div className="bg-gray-100 p-2">
//       <nav className="text-gray-600 text-sm flex space-x-2">
//         <Link to="/" className="hover:text-red-600">Home</Link>
//         {pathnames.length > 0 && <span>&gt;&gt;</span>}
        
//         {/* Dynamically render each part of the path */}
//         {pathnames.map((value, index) => {
//           const to = `/${pathnames.slice(0, index + 1).join("/")}`;

//           return index === pathnames.length - 1 ? (
//             <span key={to} className="text-red-600 font-semibold">
//               {value.charAt(0).toUpperCase() + value.slice(1)}
//             </span>
//           ) : (
//             <React.Fragment key={to}>
//               <Link to={to} className="hover:text-red-600">
//                 {value.charAt(0).toUpperCase() + value.slice(1)}
//               </Link>
//               <span>&gt;&gt;</span>
//             </React.Fragment>
//           );
//         })}
//       </nav>
//     </div>
//   );
// };

// export default Breadcrumb;

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  
  // Split the URL path into an array of path segments, filtering out any empty values
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-gray-100 p-2">
      <nav className="text-gray-600 text-sm flex space-x-2">
        {/* Link to the Home page */}
        <Link to="/" className="hover:text-red-600">Home</Link>
        {pathnames.length > 0 && <span>&gt;&gt;</span>}

        {/* Render each path segment dynamically */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          // If it's the last path segment, display it as plain text
          return index === pathnames.length - 1 ? (
            <span key={to} className="text-red-600 font-semibold">
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </span>
          ) : (
            // For other segments, render them as links
            <React.Fragment key={to}>
              <Link to={to} className="hover:text-red-600">
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Link>
              <span>&gt;&gt;</span>
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumb;
