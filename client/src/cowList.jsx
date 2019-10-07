import React from 'react';

class CowList extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return (
            <div style={{paddingTop: '25px'}}>
            {this.props.cows.map(cow => <div onClick={() => {this.props.currentCow(cow.description)}}>{cow.name}</div> )}
            </div>
        )
    }
}

export default CowList;