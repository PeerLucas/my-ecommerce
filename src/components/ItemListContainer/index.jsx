import ItemCount from '../ItemCount';
import React from 'react';
import Title from '../title';

export const ItemListContainer = ({ texto }) => {
    
    return (
        <>
        <Title greeting= {texto}/>
        <ItemCount/>
        </>
      
        
    );
}

export default ItemListContainer;