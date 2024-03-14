import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './domain.css'


export default function Media() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      qn1: [],
      qn2: [],
      qn3: '',
      qn4: '',
      qn5: '',
      qn6: '',
      qn7: '',
      qn8: '',
      qn9: '',
      qn10: '',
    });
    const [isLoading, setIsLoading] = useState(false); 

    const handleCheckboxChange = (event, question) => {
      const value = event.target.value;
      const updatedFormData = { ...formData, [question]: [...formData[question], value] };
      setFormData(updatedFormData);
    };
  
    const handleTextChange = (event, question) => {
      const value = event.target.value;
      const updatedFormData = { ...formData, [question]: value };
      setFormData(updatedFormData);
    };

    const handleRadioChange = (event, question) => {
      const value = event.target.value;
      setFormData({ ...formData, [question]: value });
    };
  

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    console.log('Form Data:', formData);
    const response = await fetch('http://localhost:8000/api/media/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);

    navigate('/result', { state: { data } });
  } catch (error) {
    console.error(error);
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};



 
  return (
    <div className="fm">
        <form onSubmit={handleSubmit}>
            <center><h1 className="title">Media and Entertainment</h1></center>
            <div className="qns">
              <center><h1>Fill the following</h1></center>
                <label name="qn1"><b>1. What aspect of media and entertainment are you interested in?</b><br/>
                <input type="checkbox" name="qn1" value="Content creation and production" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Content creation and production <br />
                <input type="checkbox" name="qn1" value="Content distribution and streaming" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Content distribution and streaming <br />
                <input type="checkbox" name="qn1" value="Audience engagement and analytics" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Audience engagement and analytics <br />
                <input type="checkbox" name="qn1" value="Others" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Others <br />
                </label>
                <label name="qn2"><b>2. What tasks or activities do you want to accomplish using cloud services? </b><br/>
                <input type="checkbox" name="qn2" value="Live Video Streaming and Broadcasting" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> Live Video Streaming and Broadcasting <br />
                <input type="checkbox" name="qn2" value="Content Monetization and Subscription Services" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> Content Monetization and Subscription Services <br />
                <input type="checkbox" name="qn2" value="News and Media Distribution" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> News and Media Distribution <br />
                <input type="checkbox" name="qn2" value="Digital Marketing and Advertising" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> Digital Marketing and Advertising <br />
                <input type="checkbox" name="qn2" value="Hosting Website" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> Hosting Website <br />
                </label>
                <label name="qn3"><b>3. Are you looking to enhance viewer engagement through interactive features like polls and Q&A?  </b><br/>
                <input type="radio" name="qn3" value="Yes" onChange={(e) => handleRadioChange(e, 'qn3')} /> Yes <br />
                <input type="radio" name="qn3" value="No" onChange={(e) => handleRadioChange(e, 'qn3')} /> No <br />
                </label>
                <label><b>4. Would you like to implement a media chatbot for viewer inquiries and support?</b></label><br/>
                <input type="radio" name="qn4" value="Yes" onChange={(e) => handleRadioChange(e, 'qn4')} /> Yes <br />
                <input type="radio" name="qn4" value="No" onChange={(e) => handleRadioChange(e, 'qn4')} /> No <br />
                <label><b>5. Do you require a cloud solution for live streaming and event broadcasting to a global audience?</b></label><br/>
                <input type="radio" name="qn5" value="Yes" onChange={(e) => handleRadioChange(e, 'qn5')} /> Yes <br />
                <input type="radio" name="qn5" value="No" onChange={(e) => handleRadioChange(e, 'qn5')} /> No <br />
                <label><b>6. Do you need cloud-based tools for video editing and post-production tasks?  </b></label><br/>
                <input type="radio" name="qn6" value="Yes" onChange={(e) => handleRadioChange(e, 'qn6')} /> Yes <br />
                <input type="radio" name="qn6" value="No" onChange={(e) => handleRadioChange(e, 'qn6')} /> No <br />
                <label><b>7. Do you require a cloud solution for content localization and multilingual subtitles for global audiences?</b></label><br/>
                <input type="radio" name="qn7" value="Yes" onChange={(e) => handleRadioChange(e, 'qn7')} /> Yes <br />
                <input type="radio" name="qn7" value="No" onChange={(e) => handleRadioChange(e, 'qn7')} /> No <br />
                <label><b>8. Are you looking for a system to manage digital rights and content licensing for media distribution?</b></label><br/>
                <input type="radio" name="qn8" value="Yes" onChange={(e) => handleRadioChange(e, 'qn8')} /> Yes <br />
                <input type="radio" name="qn8" value="No" onChange={(e) => handleRadioChange(e, 'qn8')} /> No <br />
                <label><b>9. Are there any specific geographic regions / requirements for your users?</b></label><br/>
                <textarea name="qn9" onChange={(e) => handleTextChange(e,'qn9')}></textarea><br/>
                <label><b>10. Are you interested in managing and tracking viewer engagement and viewer feedback effectively?</b></label><br/>
                <input type="radio" name="qn10" value="Yes" onChange={(e) => handleRadioChange(e, 'qn10')} /> Yes <br />
                <input type="radio" name="qn10" value="No" onChange={(e) => handleRadioChange(e, 'qn10')} /> No <br />
                <center><button className="btn1" disabled={isLoading}>Submit</button></center>
                {isLoading && <p>Loading...</p>}
            </div>
        </form>
    </div>
  )
}

