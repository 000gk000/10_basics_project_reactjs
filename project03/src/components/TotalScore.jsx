import styled from "styled-components";

const TotalScore = () => {
  return (
    <>
      <div>
        <h1>0</h1>
        <p>Total Scores </p>
      </div>
    </>
  );
};
export default TotalScore;

const div = styled.div`
  
  h1 {
    font-size: 100px;
    line-height: 150px;
    
  }

  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
