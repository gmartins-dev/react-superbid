import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f8f8f8;
  color: #131415;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  display: flex;
  flex: 1;
`;

export const Sidebar = styled.nav`
  width: 250px;
  border-right: 1px solid #0050a0;
`;

export const Page = styled.main`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`;
