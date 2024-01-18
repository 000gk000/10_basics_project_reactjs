import NumberSelector from "./NumberSelecter";
import styled from "styled-components";
import TotalScore from "./TotalScore";

const GamePlay = () => {
    return (
      <>
        <Maincontainer>
          <div className="topsection">
          <TotalScore/>
           <NumberSelector/>
          </div>
           
        </Maincontainer>
      </>
    );
  };
  
  export default GamePlay;
  const Maincontainer = styled.div`

  .topsection{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-top: 20px;
  }
    
  `