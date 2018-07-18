import React from 'react';
import YandexMap from 'components/YandexMap';
import DraggableListPlacemark from 'containers/DraggableListPlacemark';
import { LayoutPage, Container, Col1, Col2 } from './styled';

const Layout = () => {
  return (
    <LayoutPage>
      <Container>
        <Col1>
          <DraggableListPlacemark/>
        </Col1>
        <Col2>
          <YandexMap/>
        </Col2>
      </Container>
    </LayoutPage>
  );
};


export default Layout;
