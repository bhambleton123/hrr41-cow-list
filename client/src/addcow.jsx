import React from 'react';

class AddCow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name:'',
            description:''
        }

        this.submit = this.submit.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
    }

    onChangeName (e) {
        this.setState({
          name: e.target.value
        });
        console.log(this.state.name);
    }

    onChangeDescription (e){
        this.setState({
            description: e.target.value
        })
        console.log(this.state.description);
    }

    submit(){
        this.props.addCow(this.state.name, this.state.description);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input placeholder="name" onChange={this.onChangeName}/>
                    <input placeholder="description" onChange = {this.onChangeDescription}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default AddCow;