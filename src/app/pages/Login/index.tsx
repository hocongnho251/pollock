/**
 *
 * Login
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { LayoutContainer } from 'app/components/LayoutContainer/Loadable';

interface Props {}

export function Login(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <LayoutContainer>
      <div>Main</div>
    </LayoutContainer>
  );
}
