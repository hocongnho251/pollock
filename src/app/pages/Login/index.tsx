/**
 *
 * Login
 *
 */
import React from 'react';
import { LayoutContainer } from 'app/components/LayoutContainer/Loadable';
import { Button } from 'antd';

interface Props {}

export function Login(props: Props) {
  return (
    <LayoutContainer>
      <Button
        onClick={() => {
          console.log('sss');
        }}
      >
        Main
      </Button>
    </LayoutContainer>
  );
}
