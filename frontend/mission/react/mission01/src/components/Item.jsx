import React, { useState } from 'react';
import styled from 'styled-components';

const ItemContainer = styled.li`
  background: #ffffff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #00796b;
`;

const ItemName = styled.span`
  font-weight: bold;
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #d32f2f;
  }
`;

const EditButton = styled.button`
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

function Item({ item, handleDelete, handleEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(item.name);
    const [newCost, setNewCost] = useState(item.cost);

    const handleSave = () => {
        handleEdit(item.id, newName, newCost);
        setIsEditing(false);
    };

    return (
        <ItemContainer>
            {isEditing ? (
                <>
                    <input value={newName} onChange={(e) => setNewName(e.target.value)} />
                    <input value={newCost} onChange={(e) => setNewCost(e.target.value)} />
                    <EditButton onClick={handleSave}>저장</EditButton>
                </>
            ) : (
                <>
                    <ItemName>{item.name}</ItemName>
                    <span>{item.cost}원</span>
                    <EditButton onClick={() => setIsEditing(true)}>수정</EditButton>
                    <DeleteButton onClick={() => handleDelete(item.id)}>삭제</DeleteButton>
                </>
            )}
        </ItemContainer>
    );
}

export default Item;
