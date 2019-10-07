import React from 'react';
import axios from 'axios';
import CowList from './cowList.jsx';
import AddCow from './addcow.jsx';

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            cows: [],
            currentCow: ''
        }

        this.changeCurrent = this.changeCurrent.bind(this);
        this.addCow = this.addCow.bind(this);
        this.deleteCow = this.deleteCow.bind(this);
        this.getCows = this.getCows.bind(this);
        this.updateCow = this.updateCow.bind(this);
    }

    componentDidMount(){
        this.getCows();
    }

    getCows() {
        axios.get('/api/cows').then((results) => {
            this.setState({
                cows: results.data
            });
        }).catch((err) => {
            throw err;
        })
    }

    changeCurrent(newCow) {
        this.setState({
            currentCow: newCow
        })
    }

    addCow(newCowName, newCowDescription){
        axios.post('/api/cows', {
            name: newCowName,
            description: newCowDescription
        }).then(result => {
            console.log(result);
        }).catch(error => {
            throw error;
        })
    }

    deleteCow(id){
        axios.delete('/api/cows/' + id).then(result => {
            console.log(result);
        }).catch(err => {
            throw err;
        })
        this.getCows();
    }

    updateCow(id, name) {
        axios.put('/api/cows/' + id, {
            id: id,
            name: name
        }).then(result => {
            console.log(result);
        }).catch(err => {
            throw err;
        })
        console.log("Hi?")
        this.getCows();
    }

    render(){
        return (
            <div>
                <p> Currently Selected Cow: {this.state.currentCow}</p>
                <p> Here are some cows</p>
                <AddCow addCow={this.addCow}/>
                <CowList updateCow={this.updateCow} deleteCow={this.deleteCow} cows={this.state.cows} currentCow={this.changeCurrent}></CowList>
            </div>
        )
    }
}

export default App;