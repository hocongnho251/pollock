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
      <HeaderCustom>
        <HeaderContent />
      </HeaderCustom>
      <Content>
        <Div>{props.children}</Div>
      </Content>
      <FooterCustom>
        <FooterContent />
      </FooterCustom>
    </Layout>
  );
}

const Div = styled.div`
  min-height: 65vh;
  padding: 24px;
  background: #fff;
`;

const HeaderCustom = styled(Header)`
  background: white;
`;

const FooterCustom = styled(Footer)`
  background: #292f3a;
`;
