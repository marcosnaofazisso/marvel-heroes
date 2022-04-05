import React from 'react'
import { useSelected, SelectedContext } from '../../components/context/SelectedContextProvider'

export default function Selected() {

    const { selectedHero } = useSelected(SelectedContext);

    return (
        <>
            <h1>Selected</h1>
            <h2>{selectedHero.length}</h2>
            {(selectedHero.length === 0 || selectedHero == null) &&
                <div>
                    <h1>You haven`t added any heroes :( </h1>
                </div>}
            {selectedHero.length >= 2 && selectedHero.map((hero) => {
                return (
                    <h2>{hero}</h2>
                )
            })}
        </>
    )
}
