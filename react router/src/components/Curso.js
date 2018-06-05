import React from 'react';

const cursos = [
    { nome: "React" },
    { nome: "Angular" },
    { nome: "NodeJS" },
];

export default class Curso extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <h1>Curso de: {cursos[this.props.params.id].nome}</h1>
        );
    }
}