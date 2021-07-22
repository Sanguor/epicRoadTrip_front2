import React, { useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Form = () => {
  const [address, setAddress] = useState("");
  const [radius, setRadius] = useState("");
  const [activity, setActivity] = useState("pois");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(0);
  const [data, setData] = useState([]);
  
  const handleAddressChange = e => { setAddress(e.target.value); };
  const handleRadiusChange = e => { setRadius(e.target.value); };
  const handleActivityChange = e => { setActivity(e.target.value); };

  const handleSubmitSearch = async (e) => {
    try {
      e.preventDefault();
      if (!address) {
        setError(1);
        setData([]);
      } else {
        setError(0);

        const response = await axios.post(`http://localhost:3000/epicroadtrip/${activity}`, { 
          address,
          radius
        });
        setData(response.data);
        setIsLoading(false);

        if (response.data.response && response.data.response.statusCode === 400) {
          setError(2);
        }
      }
    } catch (error) { 
      setError(2);
      setData([]);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmitSearch}>
        <label>
          Destination
          <input type="text" className="" onChange={handleAddressChange} />
        </label>

        <label>
          Radius
          <input type="text" className="" onChange={handleRadiusChange} />
        </label>

        <label>
          Activities
          <select onChange={handleActivityChange}>
            <option value="pois"></option>
            <option value="restaurants">Restaurants</option>
            <option value="tours">Tours and activities</option>
            <option value="sights">Sights</option>
          </select>
        </label>

        <label>
          <input type="submit" value="Validate" className="submit" />
        </label>
      </form>

      <div className={!isLoading && data && data.length > 0 ? "items" : ""}>
        {!isLoading && data && data.length > 0 && data.map((item, key) => 
          <div key={key} className="item">
            <Card name={item.nom} counter={key} size={data.length-1} />
          </div>
        )}
      </div>

      <div className="container-err-msg">
        {error === 1 && <div>The address field is required</div>}
        {error === 2 && <div>We can't find the address</div>}
      </div>
    </div>
  );
};

export default Form;
