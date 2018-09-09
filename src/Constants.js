export const WorkWithItems ={
    ADD_ITEM: 'ADD_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
    SELECT_ITEM: 'SELECT_ITEM',
    UP_COMMENT_COUNT: 'UP_COMMENT_COUNT'
};

export const WorkWithComments ={
    ADD_COMMENT: 'ADD_COMMENT',
    DELETE_COMMENT: 'DELETE_COMMENT'
};


export const StorageKeys ={
    COMMENTS: 'COMMENTS',
    ITEMS: 'ITEMS'
};

export const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
};

export const Storage = () => {
    return {
        set: (key,data) => localStorage.setItem(key, JSON.stringify(data)),
        get: (key)=>  JSON.parse(localStorage.getItem(key)),
    };
};