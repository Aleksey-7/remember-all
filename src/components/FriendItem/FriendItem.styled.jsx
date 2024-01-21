import styled from 'styled-components';

export const Image = styled.img`
  padding: 15px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Title = styled.h3`
  width: 90px;
  font-size: 24px;
  font-weight: 500;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 20px;
  border-radius: 50%;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
