import React, { useState, useEffect } from 'react'
import { SelectedContext, useSelected } from '../../components/context/SelectedContextProvider'

export default function Characters() {

    const { selectedHero, setSelectedHero } = useSelected(SelectedContext);

    const [heroes, setHeroes] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/rest");
                const results = await response.json();
                setHeroes(results);
                console.log(results);
            }
            catch(e) {
                console.error(e);
            }
        }
        fetchData();
    }, [])

    function handleShow() {
        setShow(!show)
    }
    function handleAdd(hero) {
        console.log(JSON.stringify(hero))
        alert(`Adding ${hero} to Selected`)
        selectedHero.push(hero)
    }
    function handleRemove(hero) {
        alert(`Removing ${hero} from Selected`)
    }

    return (
        <>
            <button onClick={() => handleShow()}>Ver personagens</button>
            {show && <div>
                <div>
                    <h1>Index</h1>
                    {Object.values(heroes).map((hero, index) => {
                        return (
                            <div key={index}>
                                <h3>{index + 1} - {hero["name"]}</h3>
                                <p>{hero["description"]}</p>
                                <img src={hero["thumbnail"]} width={150} alt={hero["name"]} />
                                <button onClick={() => handleAdd(hero["name"])}>Add</button>
                                <button onClick={() => handleRemove(hero["name"])}>Remove</button>
                            </div>
                        )
                    })}
                </div>
            </div>}
        </>

    )
}
