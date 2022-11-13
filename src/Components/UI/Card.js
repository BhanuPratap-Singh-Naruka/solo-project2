import styled from "styled-components";

const Card = (props) => {
  const Wrapper = styled.div`
    width: 550px;
    height: 704px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  `;

  return (
    <Wrapper>
      <div>{props.children}</div>
    </Wrapper>
  );
};

export default Card;
