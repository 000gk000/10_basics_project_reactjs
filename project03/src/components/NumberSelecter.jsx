import React from "react";

import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  return (
    <>
    <NumberSelectorcontainer> 
        <div className="flex">
        {arrNumber.map((value, i) => (
        <Box
          isSelected={value === selectedNumber}
          key={i}
          onClick={() => setSelectedNumber(value)}
        >
          {value}
        </Box>
      ))}
        </div>
        <p>select any number</p>
      
    </NumberSelectorcontainer>
    
    </>
    
  );
    
  
};

export default NumberSelector;
const NumberSelectorcontainer = styled.div`
    
    .flex{
            display: flex;
            gap: 24px;
           
    }

    p{
        font-size: 24px;
        font-weight: 700;
    }
`



const Box = styled.div`
  border: 1px solid black;
  height: 72px;
  width: 72px;
  display: grid;
  font-weight: 700;
  place-items: center;
  font-size: 24px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
