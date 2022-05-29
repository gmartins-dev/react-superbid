import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 0;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.div`
  text-align: right;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #0050a0;
`;

export const Description = styled.div`
  text-align: right;
  font-size: 13px;
  color: #66696f;
`;

export const IconArea = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? '#EC660B' : '#d6eaf5'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Point = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border: 3px solid #0050a0;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -6px;
  background-color: ${(props) =>
    props.active ? '#EC660B' : '#d6eaf5'};
`;
