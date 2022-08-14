import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
    console.log(process.env)
    const [data, setData] = useState(undefined);
    const url = process.env.REACT_APP_BASE_URL || "http://localhost:7070";

    const log = console.log;
    log(url + "/data")
    useEffect(() => {
        fetch(url + "/data")
            // eslint-disable-next-line no-sequences
            .then(data => (log("success:"), data.json().then(data => setData(data.data))))
            // eslint-disable-next-line no-sequences
            .catch(_ => (log("error:", _), setData("error")))
    }, [log, url]);


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
