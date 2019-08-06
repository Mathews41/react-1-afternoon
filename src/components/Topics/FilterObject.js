import React, {Component} from 'react';

export default class ClassNameGoesHere extends Component {
    constructor(){
        super();
        this.state = {
            Cars: [
                {
                    brand: 'Jaguar',
                    type:'supercar',
                    year: 2016 ,
                },
                {
                    brand: 'Aston-Martin',
                    type: 'supercar',
                    year: 2018,
                },
                {   brand: 'Buggati',
                    type: 'supercar',
                    year: 2018,
            },
            {       brand: 'Tesla',
                    type: 'supercar',
                    year: 2018,
        }
            ],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }
    
      filterCars(prop) {
        let Cars = this.state.Car;
        let filteredCars = [];
    
        for ( let i = 0; i < Cars.length; i++ ) {
          if ( Cars[i].hasOwnProperty(prop) ) {
            filteredCars.push(Cars[i]);
          }
        }
    
        this.setState({ filteredCars: filteredCars });
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.Cars, null, 10) }</span>
            <input className="inputLine" onChange={ () => this.handleChange(this.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.filterCars(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.Cars, null, 10) }</span>
            /</div>
        )
    }
}
