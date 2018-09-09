import {WorkWithItems,Storage,StorageKeys} from '../Constants'

function initialState(){
    let state = Storage().get(StorageKeys.ITEMS);
    if(state)
        return state;
    else return {
        items:[],
        isDelete:false,
        selectIndex:''
    };
}
export default function ItemsReducer(state = initialState(), action) {
    let newState;
    switch (action.type){
        case WorkWithItems.ADD_ITEM:{
            if(action.name){
                newState = {...state,items:[...state.items,{name:action.name,commentCount:0}]};
                Storage().set(StorageKeys.ITEMS,newState);
                return newState;
            }
            else {
                Storage().set(StorageKeys.ITEMS,state);
                return state;
            }

        }
        case WorkWithItems.DELETE_ITEM:{
            let items =[...state.items];
            items.splice(action.index,1);
            newState = {...state,items:items,isDelete:true};
            Storage().set(StorageKeys.ITEMS,newState);
            return newState;
        }
        case WorkWithItems.SELECT_ITEM:{
            let items =[...state.items];
            if(items.length){
                if(!state.isDelete){
                    let lastSelectIndex;
                    items.forEach((object,index)=>{
                        if(object.itemStyle)
                            lastSelectIndex = index
                    });
                    if(lastSelectIndex || lastSelectIndex === 0)
                        items[lastSelectIndex].itemStyle = undefined;
                    items[action.index].itemStyle = {borderLeft: 'solid red 5px'};
                    newState = {...state,items:items,selectIndex:action.index};
                    Storage().set(StorageKeys.ITEMS,newState);
                    return newState;
                }else {
                    newState = {...state,isDelete:false,selectIndex:''};
                    Storage().set(StorageKeys.ITEMS,newState);
                    return newState;
                }
            }else {
                newState = {...state,isDelete:false,selectIndex:''};
                Storage().set(StorageKeys.ITEMS,newState);
                return  newState;
            }
        }
        case WorkWithItems.UP_COMMENT_COUNT:{
            let items =[...state.items];
            items[action.index].commentCount++;
            newState = {...state,items:items};
            Storage().set(StorageKeys.ITEMS,newState);
            return newState;
        }

        default:
            return state;
    }
}
