import {WorkWithComments} from '../Constants'

export const AddComment = (text, itemId) =>{
    return{
        type: WorkWithComments.ADD_COMMENT,
        text,
        itemId
    }
};

export const deleteComments = (itemId) =>{
    return{
        type: WorkWithComments.DELETE_COMMENT,
        itemId
    }
};

