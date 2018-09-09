import React, {Component} from 'react'
import {connect} from "react-redux";
import {AddItem} from "../actions/ItemsActions";
import { generateKey } from '../Constants'
import Item from './Item'


class ItemsCard extends Component {
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
    }
    addItem(){
        this.props.AddItem(this.mainInput.value);
        this.mainInput.value = '';
    }
    render(){
        return(
            <div className="card shadow p-0 pb-3" style={{height:'590px',overflowX:'hidden', overflowY: 'auto'}}>
                <div className={'p-3'}>
                    <p className="card-title dairy text-muted  pl-2">Items</p>
                    <div className={'row justify-content-around pl-3'}>
                        <input type="text"
                               className="form-control col-8"
                               ref={input=>this.mainInput=input}
                               placeholder="Type name here..."/>
                        <button type="button"
                                className="btn btn-info col-3"
                                onClick={this.addItem}>Add new</button>
                    </div>
                </div>
                <div>
                    {this.props.items.map((item,index)=><div key={generateKey(index)}><Item item={item} index={index} /></div>)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.ItemsReducer.items
    }
}

function  mapDispatchToProps (dispatch){
    return {
        AddItem : (name) => dispatch(AddItem(name)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsCard);