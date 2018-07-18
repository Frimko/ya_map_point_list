import styled from 'react-emotion';

export const LayoutPage = styled('div')`
    display: flex;
    flex-direction: row;
  padding: 0 24px;
  width: 100%;
  justify-content: center;
`;

export const Container = styled('div')`
    height: 500px;
    display: flex;
    flex-direction: row;
`;

export const Col1 = styled('div')`
      width: 400px;
      padding: 0 24px 24px;
      background: #fff; 
      padding: 24px;
      margin: 10px; 
      minHeight: 280;
`;

export const Col2 = styled('div')`
      width: 500px;
      padding: 0 24px 24px;
      display: flex;
      background: #fff; 
      padding: 24px;
      margin: 10px; 
      minHeight: 280
`;
