import React from 'react'
import styled from 'styled-components';
import wallpaper from '../../assets/img/wallpaper-marvel.jpg'

export const HomeOne = styled.div`
    background-image: url(${wallpaper});
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-color: #ffffff;
    align-items: center;
    text-align: center;
    h1 {
        margin-top: 0.1rem;
        font-size: 70px;
        color: #FFF;
    }
    .homeHeight {
        height: 30rem;
    }
`;


export default function Home() {
    return (
        <HomeOne>
            <div className="homeHeight">
                <h1>Desafio Marvel</h1>
            </div>
        </HomeOne>
    )
}
