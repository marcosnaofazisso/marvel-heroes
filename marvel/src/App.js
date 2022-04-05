import React, { useState, useEffect } from "react";

function App() {

  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetch("/rest").then(resp =>
      resp.json().then(data => {
        console.log("DATA" + JSON.stringify(data[0]))
        setHeroes(data);
        console.log("XXXXXXXXXXXXXXXXXXXXXX" + JSON.stringify(heroes))
      }))
  }, [])

  return (
    <div>
      <h1>{heroes[0].name}</h1>
    </div>
  )
}

export default App;

{/* <div key={heroe.data.offset}> */ }
{/* <p>{heroes["data"]["results"][0]["name"]}</p> */ }
{/* <p>{JSON.stringify(heroes["data"]["offset"])}</p> */ }

{/* <div>
      <h1>{heroes[0].name}</h1>
      <p>{heroes[0].description}</p>
      <img src={heroes[0].thumbnail} alt={heroes[0].name} />
      </div> */}