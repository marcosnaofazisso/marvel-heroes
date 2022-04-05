import React, { useState, useEffect } from "react";

export default function App() {

  // const [aux] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [aux] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetch("/rest").then(resp =>
      resp.json().then(data => {
        console.log("DATA " + JSON.stringify(data))
        setHeroes(data);
      }))
  }, [])

  return (
    <div>
      <div>
        <h1>Index</h1>
        {aux.map((t, i) => {
          return (
            <div key={i}>
              <h3>{i + 1} - {heroes[i]["name"]}</h3>
              <p>{heroes[i]["description"]}</p>
              <img src={heroes[i]["thumbnail"]} width={150} alt={JSON.stringify(heroes[i]["name"])} />
            </div>
          )
        })}
      </div>
    </div>

  )
}
