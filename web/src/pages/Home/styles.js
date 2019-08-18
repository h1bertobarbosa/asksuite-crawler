import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  img {
    width: 188px;
    object-fit: cover;
    border-radius: 4px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      color: #e04815;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      align-self: flex-start;
      margin: 20px 0 auto;
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
        background: ${darken(0.03, '#e04815')};
      }
    }
  }
`;
