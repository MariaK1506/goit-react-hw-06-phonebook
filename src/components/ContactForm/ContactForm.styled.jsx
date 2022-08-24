import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;

  padding: 15px;
  border: ${props => `1px solid ${props.theme.colors.lightGray}`};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  color: ${props => props.theme.colors.darkGray};
`;

export const Input = styled.input`
  padding: 11px;
  border: ${props => `1px solid ${props.theme.colors.darkGray}`};
  border-radius: 4px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:focus {
    outline: transparent;
    border: ${props => `1px solid ${props.theme.colors.blue}`};
  }
`;

export const Button = styled.button`
  min-width: 150px;
  height: 40px;
  border: 0px solid transparent;
  border-radius: 4px;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};

  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
