import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "31/12/2018",
        horario: "23:59",
    },
    casa: {
        nome: "Vasco",
    },
    visitante: {
        nome: "Flamengo",
    }
};

export default class App extends React.Component {

    render() {
        return (
            <PlacarContainer {...dados} />
        );
    }
}