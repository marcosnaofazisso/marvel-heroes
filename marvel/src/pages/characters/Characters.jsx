import React, { useState, useEffect } from 'react'
import { SelectedContext, useSelected } from '../../components/context/SelectedContextProvider'

export default function Characters() {

    const { selectedHero, setSelectedHero } = useSelected(SelectedContext);

    // const [aux] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [aux] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [heroes, setHeroes] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        fetch("/rest").then(resp =>
            resp.json().then(data => {
                console.log("DATA " + JSON.stringify(data))
                setHeroes(data);
            }).catch(error => {
                console.log(error)
            }))
    }, [])

    function handleShow() {
        setShow(!show)
    }
    function handleAdd(hero) {
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
                    {aux.map((t, i) => {
                        return (
                            <div key={i}>
                                <h3>{i + 1} - {heroes[i]["name"]}</h3>
                                <p>{heroes[i]["description"]}</p>
                                <img src={heroes[i]["thumbnail"]} width={150} alt={JSON.stringify(heroes[i]["name"])} />
                                <button onClick={() => handleAdd(heroes[i]["name"])}>Add</button>
                                <button onClick={() => handleRemove(heroes[i]["name"])}>Remove</button>
                            </div>
                        )
                    })}
                </div>
            </div>}
        </>

    )
}
