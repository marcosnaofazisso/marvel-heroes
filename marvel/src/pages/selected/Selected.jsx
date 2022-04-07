import React from 'react'
import { useSelected, SelectedContext } from '../../components/context/SelectedContextProvider'
import { CenteredHeroes } from '../../assets/style/StyledCharacters';

export default function Selected() {

    const { selectedHero } = useSelected(SelectedContext);

    return (
        <>
            <CenteredHeroes>
                <h1>Total Selected: {selectedHero.length}</h1>
                {(selectedHero.length === 0 || selectedHero == null) &&
                    <div>
                        <h1>You haven`t selected any heroes yet 😕</h1>
                    </div>}
                {selectedHero.length >= 1 &&
                    <div>
                        {Object.values(selectedHero).map((hero, index) => {
                            return (
                                <div key={index}>
                                    <h3>{index + 1} - {hero["name"]}</h3>
                                    <img src={hero["thumbnail"]} width={150} alt={hero["name"]} />
                                    <p>#{hero["id"]} - {hero["description"] === "" ? "No description available" : hero["description"]}</p>
                                </div>
                            )
                        })}
                    </div>}
            </CenteredHeroes>
        </>
    )
}
