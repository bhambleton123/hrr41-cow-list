import React from 'react';
import UpdateForm from './updateform.jsx';

class CowList extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            visible: false
        }

        this.showForm = this.showForm.bind(this);
    }

    showForm() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render(){
        return (
            <div style={{paddingTop: '25px'}}>
            {this.props.cows.map(cow => <div onClick={() => {this.props.currentCow(cow.description)}}>
            {cow.name} <button onClick={() => this.props.deleteCow(cow.id)}>delete</button> <button onClick={this.showForm}>update</button>
            {this.state.visible ? <UpdateForm updateCow={this.props.updateCow} id={cow.id}/> : ''}
            </div> )}
            </div>
        )
    }
}

export default CowList;