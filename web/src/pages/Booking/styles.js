import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    margin-bottom: 100px;

    button {
      height: 44px;
      background: #e04815;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      padding: 0 25px;

      &:hover {
        background: ${darken(0.08, '#e04815')};
      }
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

export const Item = styled.article`
  max-width: 250px;
  flex: 0 0 250px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  background: #fff;
  border-radius: 4px;

  h3 {
    font-size: 20px;
    font-weight: bold;
  }

  img {
    max-width: 100%;
  }

  p {
    font-size: 16px;
  }

  span {
    font-weight: bold;
  }
`;
