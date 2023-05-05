import React from 'react';
import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { Link, useRouteError } from "react-router-dom";
import './ErrorPage.css'
const ErrorPage = () => {
    
    return (
        <section   className="error-page">
          <div className="error">
            <FaceFrownIcon className="face" />
            <div className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl text-yellow-500">
                <span className="text-danger">Error</span>
                
              </h2>
              <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
              
              </p>
              <Link to="/" className="btn text-primary">
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      );
};

export default ErrorPage;