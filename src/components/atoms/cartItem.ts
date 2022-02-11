import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .info,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 200px;
    object-fit: cover;
    margin-left: 4px;
  
  }
`;
