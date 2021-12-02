import {useState} from "react";
import axios from 'axios';

import qs from 'qs';
import './App.css';

function App() {
  const [data, setData] = useState("");

  const storeData = (event) => {
    console.log(event.target.name.value)
    const data = {
      name: event.target.name.value,
      email: event.target.email.value
    }
    event.preventDefault();
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    };
    axios.post('http://localhost:4000/user', data, options)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      }, (error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <form onSubmit={storeData}>
        <label>Name</label> <br/>
        <input type="text" name="name"/> <br/>
        <label>Email</label> <br/>
        <input type="email" name="email"/> <br/>
        <input type="submit" value="submit" />
      </form>
      <br/><br/><br/><br/>

      { data.name && 
        <>
            Name: {data.name} <br/>
            Email: {data.email} <br/>
        </>
      }
    </div>
  );
}

export default App;
