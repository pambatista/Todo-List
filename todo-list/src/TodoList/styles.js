import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    margin-top: 5%;
    color: #023059;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 3% 0;
  input {
    flex: 1;
    max-width: 500px;
    padding: 1em;
    font-size: 18px;
    color: #444;
    border: 0;
    border-radius: 3px;
  }
  button {
    padding: 1em;
    font-size: 20px;
    margin-left: 10px;
    background: #f27e63;
    border: 0;
    border-radius: 3px;
    color: #fff;

    &:hover {
      background: #d97059;
    }
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  li {
    display: flex;
    width: 52%;
    justify-content: space-between;
    margin-top: 10px;
    list-style: none;
    font-size: 18px;
    color: #fff;

    button {
      padding: 0.5em;
      background: #d95284;
      border: 0;
      border-radius: 3px;
      color: #fff;
      text-decoration: none;
    }
  }
`;

export const Item = styled.li`
  span{
    text-decoration: ${props =>props.completed ? 'line-through' : 'none' } ;
  }
`
