import {WorkWithItems} from '../Constants'

export const AddItem = (name) =>{
    return{
        type: WorkWithItems.ADD_ITEM,
        name
    }
};

export const deleteItem = (index) =>{
    return{
        type: WorkWithItems.DELETE_ITEM,
        index
    }
};

export const selectItem = (index) =>{
    return{
        type: WorkWithItems.SELECT_ITEM,
        index
    }
};

export const UpCommentCount = (index) =>{
    return{
        type: WorkWithItems.UP_COMMENT_COUNT,
        index
    }
};