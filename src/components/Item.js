import React, {Component} from 'react'
import {connect} from "react-redux";
import { deleteItem,selectItem } from '../actions/ItemsActions'
import { deleteComments } from '../actions/CommentsActions'



class Item extends Component {

    render(){
        return(
            <div className={'pl-4 pr-3'} style={this.props.item.itemStyle?this.props.item.itemStyle:{}}>
                <div onClick={()=>this.props.selectItem(this.props.index)} className={'hover row border-bottom pb-2 pt-2 m-0'}>

                    <h5 className={'col-9 pl-0'}>{this.props.item.name}
                        <div className={'ml-3 badge badge-pill badge-info font-weight-normal'}>{this.props.item.commentCount}</div>
                    </h5>
                    <div className={'col-3'}>
                        <button className="btn btn-outline-danger pr-4 pl-4"
                                onClick={()=>{this.props.deleteItem(this.props.index); this.props.deleteComments(this.props.index)}}>
                            Delete
                        </button>
                    </div>
                </div>
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
        deleteComments : (index) => dispatch(deleteComments(index)),
        deleteItem : (index) => dispatch(deleteItem(index)),
        selectItem : (index) => dispatch(selectItem(index)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);