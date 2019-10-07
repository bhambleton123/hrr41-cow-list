import React from 'react';

class UpdateForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name:''
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.submit = this.submit.bind(this);
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    submit(){
        this.props.updateCow(this.props.id, this.state.name);
    }

    render(){
        return (
            <form onSubmit={this.submit} >
                <input placeholder="name" onChange={this.onChangeName}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default UpdateForm;