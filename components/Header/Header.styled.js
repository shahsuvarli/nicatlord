import styled from "styled-components";

export const HeaderMain = styled.div`
  background-color: black;
  height: 100px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  padding: 20px;
  box-sizing: border-box;
  font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif; ;
`;

export const Logo = styled.h1`
  font-size: 30px;
  color: white;
  justify-content: center;
  align-items: center;
  height: auto;
  display: flex;
`;

export const Menu = styled.div`
  color: white;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: 40%;
  align-items: center;
`;

export const Social = styled.div`
  background-color: aqua;
  width: 100px;
  justify-content: space-between;
  align-items: center;
`;
