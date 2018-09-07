import React, { Component } from 'react';

import './App.css';

export default class Dashboard extends Component {
    constructor(){
        super();
    }

   render() {

    const { dogToAdopt } = this.props;
    const { catToAdopt } = this.props;
       return (
        <div className="container">
            <section className="dog-section">
                <header className="dog-header">
                    <h2>{dogToAdopt.name}</h2>
                     <img src={dogToAdopt.image} alt={dogToAdopt.imageDescription} />
                 </header>
                <main>
                    <dl>
                        <dt>Sex </dt>
                        <dd>{dogToAdopt.sex}</dd>
                        <dt>Age </dt>
                        <dd>{dogToAdopt.age}</dd>
                        <dt>Breed </dt>
                        <dd> {dogToAdopt.breed}</dd>
                        <dt>Story </dt>
                        <dd>{dogToAdopt.story} </dd>
                    </dl>
                    <button className="adopt">Adopt</button>
                </main>
        </section>

        <section className="cat-section">
                <header className="cat-header">
                    <h2>{catToAdopt.name}</h2>
                     <img src={catToAdopt.image} alt={catToAdopt.imageDescription} />
                 </header>
                <main>
                    <dl>
                        <dt>Sex </dt>
                        <dd>{catToAdopt.sex}</dd>
                        <dt>Age </dt>
                        <dd>{catToAdopt.age}</dd>
                        <dt>Breed </dt>
                        <dd> {catToAdopt.breed}</dd>
                        <dt>Story </dt>
                        <dd>{catToAdopt.story} </dd>
                    </dl>
                    <button className="adopt">Adopt</button>
                </main>
        </section>
     </div>


       );
   } 
}