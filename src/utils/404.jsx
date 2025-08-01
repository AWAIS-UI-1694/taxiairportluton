import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
     <Helmet>
      <title>404 - Page Not Found | Taxi Airport Luton</title>
    </Helmet>
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-9xl font-bold text-gray-600">404</h1>
      <p className="text-xl mt-4 mb-6 text-gray-700">Oops! Page not found.</p>
      <Link to="/" className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded">
        Back to Home
      </Link>
    </div>
    </>
  );
};

export default NotFound;
