import { useState } from 'react';
import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Display = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 48px;
  padding-right: 20px;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 60px;
  background-color: #eee;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }

  &:active {
    background-color: #aaa;
  }
`;

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleClearButtonClick = () => {
    setDisplayValue('');
  };

  const handleEqualsButtonClick = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <CalculatorWrapper>
      <Display>{displayValue}</Display>
      <ButtonWrapper>
        <Button onClick={() => handleButtonClick('7')}>7</Button>
        <Button onClick={() => handleButtonClick('8')}>8</Button>
        <Button onClick={() => handleButtonClick('9')}>9</Button>
        <Button onClick={() => handleButtonClick('+')}>+</Button>
        <Button onClick={() => handleButtonClick('4')}>4</Button>
        <Button onClick={() => handleButtonClick('5')}>5</Button>
        <Button onClick={() => handleButtonClick('6')}>6</Button>
        <Button onClick={() => handleButtonClick('-')}>-</Button>
        <Button onClick={() => handleButtonClick('1')}>1</Button>
        <Button onClick={() => handleButtonClick('2')}>2</Button>
        <Button onClick={() => handleButtonClick('3')}>3</Button>
        <Button onClick={() => handleButtonClick('*')}>*</Button>
        <Button onClick={() => handleButtonClick('0')}>0</Button>
        <Button onClick={() => handleButtonClick('.')}>.</Button>
        <Button onClick={handleEqualsButtonClick}>=</Button>
        <Button onClick={() => handleButtonClick('/')}>/</Button>
        <Button onClick={handleClearButtonClick}>C</Button>
      </ButtonWrapper>
    </CalculatorWrapper>
  );
}

export default App;
