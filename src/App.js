import "./App.css";
import DisplaySimpson from "./components/DisplaySimpson";
import sampleSimpson from "./data";
import axios from "axios";
import React from "react";

function App() {
  const [quoteList, setQuoteList] = React.useState(sampleSimpson);

  const getSimpson = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setQuoteList(data);
      });
  };

  return (
    <div>
      <div>
        {quoteList.map((quote, index) => (
          <DisplaySimpson key={index} {...quote} />
        ))}{" "}
      </div>

      <button type="button" onClick={getSimpson}>
        Get Random Simpson
      </button>
    </div>
  );
}

export default App;
