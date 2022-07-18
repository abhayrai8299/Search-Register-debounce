export const Add_to_Cart=(item)=>{
    return{
        type:"Add_To_Cart",
        payload:item,
    };
};
export const Remove_to_Cart=(id)=>{
    return{
        type:"Remove_To_Cart",
        payload:id,
    }
}
export const Remove_Individual_Cart=(item)=>{
    return{
        type:"Remove_Individual_Cart",
        payload:item,
    };
};
