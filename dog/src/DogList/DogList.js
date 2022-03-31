import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({dogs}) {
  return (
    <div className="DogList">
      <h1>Check Out Our Dogs  And Find The Right Puppy For You.</h1>
       <div>
        {dogs.map(d => (
          <div key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3>
              <Link to={`/dogs/${d.name}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
