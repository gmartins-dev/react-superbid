import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  background-color: #f8f8f8;
  border: 2px solid
    ${(props) => (props.selected ? '#ec660b' : '#D6EAF5')};
  border-radius: 10px;
  transition: all 0.3s ease 0s;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid #0050a0;
  }
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ec660b;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: auto;
`;

export const Description = styled.div`
  font-size: 15px;
  color: #66696f;
`;
