import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';

const Container = styled.div`
  max-width: 700px;
  margin: 20px auto;
  padding: 30px;
  background: #e0f7fa; /* 파란색 배경 */
  border: 2px solid #00796b;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 40%;
  padding: 10px;
  border: 2px solid #00796b;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #00796b;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  &:hover {
    background-color: #004d40;
  }
`;

const ClearButton = styled(Button)`
  background-color: #f44336;
  margin-top: 20px;
  &:hover {
    background-color: #d32f2f;
  }
`;

const Alert = styled.div`
  background-color: ${(props) => (props.type === 'success' ? '#4CAF50' : '#F44336')};
  color: white;
  padding: 10px;
  margin-bottom: 15px;
  text-align: center;
  border-radius: 4px;
`;

const TotalExpense = styled.div`
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  color: #00796b;
  margin-top: 20px;
`;

function BudgetApp() {
    const [items, setItems] = useState([]);
    const [inputName, setInputName] = useState('');
    const [inputCost, setInputCost] = useState('');
    const [alert, setAlert] = useState({ message: '', type: '' });
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const sum = items.reduce((acc, item) => acc + item.cost, 0);
        setTotal(sum);
    }, [items]);

    const handleAdd = () => {
        if (inputName.trim() !== '' && inputCost.trim() !== '') {
            setItems([...items, { id: Date.now(), name: inputName, cost: parseFloat(inputCost) }]);
            setInputName('');
            setInputCost('');
            showAlert('아이템이 추가되었습니다.', 'success');
        }
    };

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
        showAlert('아이템이 삭제되었습니다.', 'danger');
    };

    const handleClear = () => {
        setItems([]);
        showAlert('모든 항목이 삭제되었습니다.', 'danger');
    };

    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => setAlert({ message: '', type: '' }), 2000);
    };

    return (
        <Container>
            {alert.message && <Alert type={alert.type}>{alert.message}</Alert>}
            <div>
                <Input
                    type="text"
                    placeholder="지출 항목"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder="비용"
                    value={inputCost}
                    onChange={(e) => setInputCost(e.target.value)}
                />
                <Button onClick={handleAdd}>제출</Button>
            </div>
            <ItemList items={items} setItems={setItems} handleDelete={handleDelete} showAlert={showAlert} />
            <ClearButton onClick={handleClear}>목록 지우기</ClearButton>
            <TotalExpense>총 지출: {total}원</TotalExpense>
        </Container>
    );
}

export default BudgetApp;
