/**
 *
 * LayoutContainer
 *
 */
import * as React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components/macro';
import { Header as HeaderContent } from '../Header/Loadable';
import { Footer as FooterContent } from '../Footer/Loadable';

const { Header, Footer, Content } = Layout;

interface Props {
  children: JSX.Element;
}

export function LayoutContainer(props: Props) {
  return (
    <Layout>
      <Header style={{ background: 'white' }}>
        <HeaderContent />
      </Header>
      <Content>
        <Div>{props.children}</Div>
      </Content>
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
  );
}

const Div = styled.div`
  min-height: 280px;
  padding: 24px;
  background: #fff;
`;
