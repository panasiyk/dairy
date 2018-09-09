import {WorkWithComments,Storage,StorageKeys} from '../Constants'

function initialState(){
    let state = Storage().get(StorageKeys.COMMENTS);
    if(state)
        return state;
    else return {
        comments:[]
    };
}

export default function CommentsReducer(state = initialState(), action) {
    let newState;
    switch (action.type){
        case WorkWithComments.ADD_COMMENT:{
            let index;
            state.comments.forEach((el,id)=>{
                if(action.itemId === el.itemId)
                    return index = id
            });

            if(typeof index === 'number'){
                let comments = [...state.comments];
                comments[index].text.push(action.text);
                newState = {...state,comments:comments};
                Storage().set(StorageKeys.COMMENTS,newState);
                return newState;
            }else {
                newState = {...state,comments:[...state.comments,{text:[action.text],itemId:action.itemId}]};
                Storage().set(StorageKeys.COMMENTS,newState);
                return newState;
            }
        }
        case WorkWithComments.DELETE_COMMENT:{
            let comments =[...state.comments];
            let index;
            state.comments.forEach((el,id)=>{
                if(action.itemId === el.itemId)
                    index = id;
            });
            if(index !== undefined){
                comments.splice(index,1);
                for(let i = index; i<comments.length; i++){
                    comments[i].itemId--
                }
            }else{
                for(let i = 0; i<comments.length; i++){
                    comments[i].itemId--
                }
            }
            newState = {...state,comments:comments};
            Storage().set(StorageKeys.COMMENTS,newState);
            return {...state,comments:comments};
        }
        default:
            return state;
    }
}
