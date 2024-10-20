import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const ItemListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  background-color: #b2ebf2;
  border: 1px solid #00796b;
  border-radius: 4px;
`;

function ItemList({ items, setItems, handleDelete, showAlert }) {
    const handleEdit = (id, newName, newCost) => {
        const updatedItems = items.map(item => 
            item.id === id ? { ...item, name: newName, cost: newCost } : item
        );
        setItems(updatedItems);
        showAlert('아이템이 수정되었습니다.', 'success');
    };

    return (
        <ItemListContainer>
            {items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
        </ItemListContainer>
    );
}

export default ItemList;
