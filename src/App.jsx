import "./App.css";
import Data from "./data";
import { useState } from "react";
function App() {
  const [characters, setCharacters] = useState("");
  return (
    <div className="App">
      <div className="containerTitle">
        <h1>Black Clover</h1>
        <input
          type="text"
          placeholder="Bir karakter aratın..."
          className="searchInput"
          onChange={(e) => setCharacters(e.target.value)}
        />
      </div>
      <div className="characterDiv">
        {Data.filter((data) => {
          if (characters == "") {
            return data;
          } else if (
            data.title
              .toLocaleLowerCase()
              .includes(characters.toLocaleLowerCase())
          ) {
            return data;
          }
        }).map((data) => {
          return (
            <div className="cardContainer" key={data.id}>
              <img src={data.img} alt="black clover" />
              <h3> {data.title} </h3>
              <p> {data.description} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
