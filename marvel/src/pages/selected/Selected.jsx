import React from 'react'
import { useSelected, SelectedContext } from '../../components/context/SelectedContextProvider'

export default function Selected() {

    const { selectedHero } = useSelected(SelectedContext);

    return (
        <>
            <h1>Total Selected: {selectedHero.length}</h1>
            {(selectedHero.length === 0 || selectedHero == null) &&
                <div>
                    <h1>You haven`t selected any heroes yet 😕</h1>
                </div>}
            {(selectedHero.length == 1 && selectedHero.length < 2) &&
                (<div>
                    <h3>{selectedHero.length} - {selectedHero[0]["name"]}</h3>
                    <p>{selectedHero[0]["description"]}</p>
                    <img src={selectedHero[0]["thumbnail"]} width={150} alt={selectedHero[0]["name"]} />
                </div>)}
            {selectedHero.length >= 2 &&
                <div>
                    {Object.values(selectedHero).map((hero, index) => {
                        return (
                            <div key={index}>
                                <h3>{index + 1} - {hero["name"]}</h3>
                                <p>{hero["description"]}</p>
                                <img src={hero["thumbnail"]} width={150} alt={hero["name"]} />
                            </div>
                        )
                    })}
                </div>}
        </>
    )
}
