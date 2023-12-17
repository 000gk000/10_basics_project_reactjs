import styled from "styled-components";

const StartGame = () => {
  return (
    <>
      <section>
        <div>
          <img src=".\images\dices 1.png" alt="NoImage"></img>
        </div>
        <div>
          <h1>DICE GAME </h1>
          <Button>Play now </Button>
        </div>
      </section>
    </>
  );
};
const Button = styled.button`

  background-color: black; /* Replace with your desired color */
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

`;

export default StartGame



