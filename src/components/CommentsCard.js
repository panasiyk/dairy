import React, {Component} from 'react'
import {connect} from "react-redux";
import Comment from './Comment'
import { AddComment} from '../actions/CommentsActions'
import { UpCommentCount } from '../actions/ItemsActions'
import { generateKey } from '../Constants'



class CommentsCard extends Component {
    constructor(props){
        super(props);
        this.listenEnter();
    }
    listenEnter(){
        document.onkeydown = (e)=>{
            e = e || window.event;

            if (e.ctrlKey && e.keyCode === 13) {
                if(this.mainTextarea.value && (typeof this.props.id !== 'string')){
                    this.props.AddComment(this.mainTextarea.value,this.props.id);
                    this.mainTextarea.value = '';
                    this.props.UpCommentCount(this.props.id);

                } else alert('Enter your comment or select item')
            }
            return true;
        }
    }

    renderComments(){
        if(typeof this.props.id !== 'string'){
            let isExist;
            this.props.comments.forEach((el,id)=>{
                if(this.props.id === el.itemId)
                    return isExist = id
            });
            if(typeof isExist === 'number'){
                let comments = [];
                this.props.comments[isExist].text.forEach((text, id)=> {
                    comments.push(<Comment key={generateKey(id)} text={text}/>)
                });
                return comments;
            }else return [];
        }else return [];
    }

    render(){
        return(
            <div className="card shadow comments-card">
                <div className="card-body">
                    <p className="card-title dairy text-muted">Comments #{this.props.id}</p>
                    <div style={{height:'500px',overflowX:'hidden', overflowY: 'auto'}}>
                        {this.renderComments()}
                    </div>
                    <div className={'row write-block col-4'}>
                        <div className={'col-2'}>
                            <div className={'avatar'}></div>
                        </div>
                        <textarea rows={5} ref={textarea=>this.mainTextarea=textarea}  className="form-control col-9" style={{resize:'none'}}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        id: state.ItemsReducer.selectIndex,
        comments: state.CommentsReducer.comments
    }
}

function  mapDispatchToProps (dispatch){
    return {
        AddComment : (text,itemId) => dispatch(AddComment(text,itemId)),
        UpCommentCount : (itemId) => dispatch(UpCommentCount(itemId)),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsCard);