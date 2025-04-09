import React from "react";
import styled from "styled-components";
import "./MyStyled.css";

const myStyle = {
  backgroundColor: "gray",
  padding: "10px",
  borderRadius: "5px",
};

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#007BFF" : "#6c757d")};
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#5a6268")};
  }
`;

const MyStyled = () => {
  return (
    <div>
      <h1>Styled Components с пропсами</h1>
      <Button primary>Основная кнопка</Button>
      <Button>Обычная кнопка</Button>
      <div className="myClass">Hello from css</div>
      <div style={myStyle}>Hello from myStyle</div>
      <div style={{ color: "red" }}>Hello from localStyle</div>
      <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>

      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
    </div>
  );
};

export default MyStyled;
