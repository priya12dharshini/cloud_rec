import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Result.css'; 
import ReactToPrint from 'react-to-print';

const ResultComponent = () => {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const resultRef = useRef(null);

  useEffect(() => {

    const resultData = location.state?.data;

    if (resultData) {
      setIsLoading(true);
      setData(resultData);
      setIsLoading(false);
    } else {
      fetchData(); // If no data passed from Media, fetch data
    }
   }, [location]);

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.post('http://localhost:9000/getService');
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false); // Set loading to false after data is fetched or error occurs
      }
    };
    
    


 /* const handlePrint = () => {
    window.print();
  };*/

  if (isLoading) {
    return <p className="loading fade-in">Loading...</p>; 
  }

  return (
    <div>
      <div className="result-container fade-in" ref={resultRef}>
        <h1 className="result-title">Tailored Cloud Solutions: Personalized Recommendations for Your Needs</h1>
        {error && <p className="error">Error: {error.message}</p>}
        {data && (
          <div>
            {data['AWS Services'] && (
              <div className="result-section">
                <h2>AWS Services:</h2>
                <ul className="result-list">
                  {Object.keys(data['AWS Services']).map((key) => (
                    <li key={key}>{`${key}: ${data['AWS Services'][key]}`}</li>
                  ))}
                </ul>
              </div>
            )}

            {data['Estimated Monthly Cost'] && (
              <div className="result-section">
                <h2>Estimated Monthly Cost:</h2>
                <ul className="result-list">
                  {Object.keys(data['Estimated Monthly Cost']).map((key) => (
                    <li key={key}>{`${key}: ${data['Estimated Monthly Cost'][key]}`}</li>
                  ))}
                </ul>
              </div>
            )}

            {data['Additional Notes'] && (
              <div className="result-section">
                <h2>Additional info:</h2>
                <ul className="result-list">
                  {Object.keys(data['Additional Notes']).map((key) => (
                    <li key={key}>{`${key}: ${data['Additional Notes'][key]}`}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="centered-button">
        <ReactToPrint
          trigger={() => <button>Print</button>}
          content={() => resultRef.current}
        />
      </div>
    </div>
  );
};

export default ResultComponent;
