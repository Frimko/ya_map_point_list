import { injectGlobal } from 'emotion';


injectGlobal`
  * {
    box-sizing: border-box;
  }
  #root{
    height: 100%;
    background-color: #f0f2f5;
    display: flex;
    margin: 0 auto;
    align-items: center;
  }
`;
