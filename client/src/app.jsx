import React from 'react';
import axios from 'axios';
import CowList from './cowList.jsx';

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            cows: [],
            currentCow: ''
        }

        this.addCow = this.addCow.bind(this);
        this.changeCurrent = this.changeCurrent.bind(this);
    }

    componentDidMount(){
        const outerThis = this;
        axios.get('/api/cows').then((results) => {
            outerThis.setState({
                cows: results.data
            });
        }).catch((err) => {
            throw err;
        })
    }

    addCow(){
        console.log("works?")
    }

    changeCurrent(newCow) {
        this.setState({
            currentCow: newCow
        })
    }

    render(){
        return (
            <div>
                <p> Currently Selected Cow: {this.state.currentCow}</p>
                <p> Here are some cows</p>
                <button onClick={this.addCow}>Add a cow</button>
                <CowList cows={this.state.cows} currentCow={this.changeCurrent}></CowList>
            </div>
        )
    }
}

export default App;