import styled from "styled-components";

const StartGame = () => {
  return (
    <>
      <Container>
        <div>
          <img src=".\images\dices 1.png" alt="NoImage"></img>
          </div>
        <div className="content">
          <h1>DICE GAME </h1>
          <Button>Play now </Button>
        </div>
      </Container>
    </>
  );
};



export default StartGame



const Button = styled.button`

  background-color: black; /* Replace with your desired color */
  color: white;
  padding: 10px;
  margin-left: 120px;
  border-radius: 10px;
  border: 1px solid black;
  min-width: 200px;

&:hover{
  cursor: pointer;
  background-color: #c2bebe;
  color: black;
  border: 1px solid black;
  transition: 0.3s background ease-in;
 

}
`
const Container = styled.div`
  display: flex;
 align-items: center;
 gap: 150px;
.content{
  h1{
    font-size: 96px;
    white-space: nowrap;
    font-weight: bold;
  }
  
}

`




