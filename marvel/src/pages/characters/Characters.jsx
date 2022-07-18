import React, { useState, useEffect } from 'react'
import { SelectedContext, useSelected } from '../../components/context/SelectedContextProvider'
import { ModalDiv, ModalHeader, ModalFooter, ModalBody, ModalContent, ModalButton } from '../../assets/style/StyledModal';
import ReactPaginate from 'react-paginate'
import { CenteredHeroes } from '../../assets/style/StyledCharacters';


export default function Characters() {

    const { selectedHero, setSelectedHero } = useSelected(SelectedContext);

    const [heroes, setHeroes] = useState([]);
    const [actualPage, setActualPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)

    const [modal, setModal] = useState({
        showModal: false,
        title: "",
        message: ""
    })


    useEffect(() => {
        const getHeroes = async () => {
            try {
                const response = await fetch("https://marvel-requests.herokuapp.com/rest0");
                const data = await response.json()
                setPageCount(Math.ceil(1560 / 100));
                setHeroes(data);
            } catch (e) {
                console.error(e)
            }
        }
        getHeroes();

    }, [])

    const fetchHeroes = async (currentPage) => {
        const response = await fetch(`https://marvel-requests.herokuapp.com/rest${currentPage}`);
        const data = await response.json()
        return data;
    }

    async function handlePageClick(data) {
        let currentPage = data.selected
        const heroesFromServer = await fetchHeroes(currentPage);
        setActualPage(currentPage + 1)
        setHeroes(heroesFromServer)

    }

    function handleAdd(hero) {
        if (selectedHero.length >= 4 && selectedHero.length < 5) {
            setModal({
                showModal: !modal.showModal,
                title: `${hero["name"]} was the last one 😉`,
                message: `Now your league is complete! (5/5) You will not be able to choose anymore heroes⚠️`
            })
            selectedHero.push(hero)
        }
        else {
            if (!selectedHero.includes(hero)) {
                selectedHero.push(hero)
                setModal({
                    showModal: !modal.showModal,
                    title: `Good choice! ✅`,
                    message: `${hero["name"]} is IN your selection!`
                })
            } else {
                alert(`You have already chosen ${hero["name"]}`)

            }

        }
    }
    function handleRemove(hero) {
        const countHero = selectedHero.filter((selectedOne) => selectedOne["name"] === hero["name"]);

        if (countHero.length >= 1) {
            const myHeroesUpdated = selectedHero.filter((oldHero) => oldHero["name"] !== hero["name"]);
            setSelectedHero(myHeroesUpdated)
            setModal({
                showModal: !modal.showModal,
                title: "Bye bye 👋",
                message: `${hero["name"]} is OUT of your selection!`
            })
        }
        else {
            alert(`You have not chosen ${hero["name"]} yet!`)
        }

    }

    function handleCountHeroes(hero, action) {
        const countHero = selectedHero.filter((selectedOne) => selectedOne["name"] === hero["name"]);

        if (action === "add") {
            let boolean = countHero.length >= 1 ? false : true;
            return boolean
        }
        else if (action === "remove") {
            let boolean = countHero.length >= 1 ? true : false;
            return boolean
        }
    }

    return (
        <CenteredHeroes>
            <div>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    previousClassName={'page-item'}
                    nextClassName={'page-item'}
                    breakClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}

                />
                <div className='heroeCard'>
                    {Object.values(heroes).length < 1 && (<div className='charactersHeight'><h1>Loading...</h1></div>)}
                    {Object.values(heroes).map((hero, index) => {
                        return (
                            <div key={index}>
                                <h3>{actualPage === 1 ? index + 1 : ((actualPage - 1) * 100) + index + 1} - {hero["name"]}</h3>
                                <img src={hero["thumbnail"]} width={150} alt={hero["name"]} />
                                <p>#{hero["id"]} - {hero["description"] === "" ? "No description available" : hero["description"]}</p>
                                <div className='heroeCardButton'>
                                    {handleCountHeroes(hero, "add") && selectedHero.length < 5 &&
                                        <button onClick={() => handleAdd(hero)}>Add</button>}
                                    {handleCountHeroes(hero, "remove") && selectedHero.length > 0 &&
                                        <button onClick={() => handleRemove(hero)}>Remove</button>}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    previousClassName={'page-item'}
                    nextClassName={'page-item'}
                    breakClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}

                />
                {modal.showModal &&
                    <ModalDiv>
                        <ModalContent>
                            <ModalHeader>
                                <h1>{modal.title}</h1>
                            </ModalHeader>
                            <ModalBody>
                                <h3>{modal.message}</h3>
                                {(selectedHero.length === 0) &&
                                    <p>Your heroes selection is EMPTY.</p>}
                                {(selectedHero.length < 5) &&
                                    <p>Total Heroes Selected: {selectedHero.length} (máx: 5)</p>}
                            </ModalBody>
                            <ModalFooter>
                                <ModalButton onClick={() => setModal({
                                    showModal: false,
                                    message: ""
                                })}>Ok</ModalButton>
                            </ModalFooter>
                        </ModalContent>
                    </ModalDiv>}
            </div>
        </CenteredHeroes>
    )
}
