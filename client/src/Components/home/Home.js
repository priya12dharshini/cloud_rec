import React, { useState } from 'react'
import './home.css';

const Home = () => {

  const [selectDomain, setSelectDomain] = useState('');

  const redirectToForm = () => {
    if(selectDomain === 'hcare') {
      window.location.href = '/hform';
    } else if(selectDomain === 'ecom') {
      window.location.href = '/ecom';
    } else if(selectDomain === 'educ') {
      window.location.href = '/educ';
    } else if(selectDomain === 'fin') {
      window.location.href = '/fin';
    } else if(selectDomain === 'media') {
      window.location.href = '/media';
    } else if(selectDomain ==='ml') {
      window.location.href = '/ml';
    }
    else {
      alert("Please select a domain to proceed!");
    }
  }

  return (
    <div className="home">
      <div className="hcon">
        <h1 className="htitle"><i className="fa-solid fa-cloud"></i>&nbsp;&nbsp; Welcome to Cloud Service Recommendation</h1><br/><br/>
        <center><h2>Choose a domain and fill the form <br/>to get your recommendations</h2></center><br/>
        <div>
            <select value={selectDomain} onChange={(e) => setSelectDomain(e.target.value)} className="sdom">
              <option value="">Select a domain</option>
              <option value="hcare">Healthcare</option>
              <option value="ecom">Ecommerce</option>
              <option value="educ">Education</option>
              <option value="fin">Financial services</option>
              <option value="media">Media and Entertainment</option>
              <option value="ml">Machine Learning</option>
            </select>
          </div><br/>
        <center><button onClick={redirectToForm} className="btn">Click here!</button></center>
      </div>
    </div>
  )
}

export default Home;