import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

    const [data, setData] = useState(undefined);
    const url = process.env.BASE_URL || "http://localhost:7070";

    const log = console.log;
    log(url + "/data")
    useEffect(() => {
        fetch(url + "/data")
            .then(data => (log("success:"), data.json().then(data => setData(data.data))))
            .catch(_ => (log("error:", _), setData("error")))
    }, [url]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data ?
            <p>
                Data: {data} 
            </p>
            : <p>Loading info</p>
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
