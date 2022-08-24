import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  color: ${props => props.theme.colors.darkGray};
`;

export const Input = styled.input`
  width: 100%;
  padding: 11px;
  border: ${props => `1px solid ${props.theme.colors.darkGray}`};
  border-radius: 4px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:focus {
    outline: transparent;
    border: ${props => `1px solid ${props.theme.colors.blue}`};
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;
