/**
 *
 * Footer
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Input, Button, Divider } from 'antd';
import { ReactComponent as Logo } from '../../../assets/FooterLogo.svg';
import { COMPANY, CONTACT, SERVICES } from './constants';

interface Props {}

export function Footer(props: Props) {
  return (
    <>
      <FooterWrapper>
        <Logo />
        <div>
          <TextHead>Company</TextHead>
          {COMPANY.map(item => (
            <Text key={item.key}>{item.value}</Text>
          ))}
        </div>
        <div>
          <TextHead>Services</TextHead>
          {SERVICES.map(item => (
            <Text key={item.key}>{item.value}</Text>
          ))}
        </div>
        <div>
          <TextHead>Contact</TextHead>
          {CONTACT.map(item => (
            <Text key={item.key}>{item.value}</Text>
          ))}
        </div>
        <div>
          <TextHead>Newsletter</TextHead>
          <Text>
            Subscribe to our newsletter to keep up to date on our marketing,
            website, design services, and tips.
          </Text>
          <EmailWrapper>
            <Input placeholder="Enter email" />
            <Button type="primary"> SUBMIT</Button>
          </EmailWrapper>
          <Text>
            We hate spam as much as you do. We will never, ever send you such
            emails.{' '}
          </Text>
        </div>
      </FooterWrapper>
      <DividerCustom />
      <div>
        <TextCopyright>
          © 2022 Pollock HCN. All Rights Reserved. Terms & Conditions. Privacy
          Policy.
        </TextCopyright>
      </div>
    </>
  );
}

const FooterWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 50px;
`;

const Text = styled.div`
  color: #e7e5ea;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  text-align: left;
`;

const TextHead = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const EmailWrapper = styled.div`
  display: flex;
  margin: 5px 0;
  & input:first-child {
    margin-right: 6px;
  }
`;

const DividerCustom = styled(Divider)`
  background: #7b88a8;
`;

const TextCopyright = styled(Text)`
  text-align: center;
  font-size: 10px;
`;
