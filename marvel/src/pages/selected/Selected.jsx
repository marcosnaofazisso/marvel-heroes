import React from 'react'
import { useSelected, SelectedContext } from '../../components/context/SelectedContextProvider'
import { CenteredHeroes } from '../../assets/style/StyledCharacters';

export default function Selected() {

    const { selectedHero, setSelectedHero } = useSelected(SelectedContext);

    function handleRemove(hero) {
        const countHero = selectedHero.filter((selectedOne) => selectedOne["name"] === hero["name"]);

        if (countHero.length >= 1) {
            const myHeroesUpdated = selectedHero.filter((oldHero) => oldHero["name"] !== hero["name"]);
            setSelectedHero(myHeroesUpdated)
        }
        else {
            alert(`You have not chosen ${hero["name"]} yet!`)
        }

    }

    function handleCountHeroes(hero, action) {
        const countHero = selectedHero.filter((selectedOne) => selectedOne["name"] === hero["name"]);
        if (action === "remove") {
            let boolean = countHero.length >= 1 ? true : false;
            return boolean
        }
    }

    return (
        <CenteredHeroes>
            <h1>Total Selected: {selectedHero.length}</h1>
            {(selectedHero.length === 0 || selectedHero == null) &&
                <div className="selectedHeight">
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
                                <div>
                                    {handleCountHeroes(hero, "remove") && selectedHero.length > 0 &&
                                        <button onClick={() => handleRemove(hero)}>Remove</button>}
                                </div>
                            </div>
                        )
                    })}
                </div>}
        </CenteredHeroes>
    )
}
