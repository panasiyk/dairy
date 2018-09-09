import React, {Component} from 'react'
import {connect} from "react-redux";

class Comment extends Component {

    render(){
        return(
            <div className={'row'} style={{borderLeft: 'solid red 5px',marginTop:'1%'}}>
                <div className={'col-2'}>
                    <div className={'avatar'}></div>
                </div>
                <div className={'col-9'} style={{marginLeft:'5%'}}>{this.props.text}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // item: state.ItemsReducer.items[this.props.index]
    }
}

function  mapDispatchToProps (dispatch){
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment);
