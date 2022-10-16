/**
 *
 * Header
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Button } from 'antd';
import { ReactComponent as Logo } from '../../../assets/Logo.svg';
import { ReactComponent as SearchIcon } from '../../../assets/Search.svg';
import { ReactComponent as BagIcon } from '../../../assets/Bag.svg';
import { MENU_LIST } from './constants';

interface Props {}

export function Header(props: Props) {
  return (
    <HeaderWrapper>
      <Logo />
      <Menu>
        {MENU_LIST.map(menu => (
          <MenuItem key={menu.key}>{menu.value}</MenuItem>
        ))}
      </Menu>
      <ActionsWrapper>
        <IconButtonWrapper>
          <SearchIcon />
        </IconButtonWrapper>
        <IconButtonWrapper>
          <BagIcon />
        </IconButtonWrapper>
        <ButtonWrapper type="primary">SIGN UP</ButtonWrapper>
      </ActionsWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 16px;
`;

const MenuItem = styled.div`
  position: relative;
  font-size: 15px;
  line-height: 24px;
  margin-right: 30px;
  color: #7b88a8;
  font-weight: 500;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background: #34c635;
    transform-origin: bottom right;
    transition: transform 0.35s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Menu = styled.div`
  display: flex;
  color: #2d3958;
`;

const ActionsWrapper = styled.div`
  display: flex;
`;

const IconButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
`;

const ButtonWrapper = styled(Button)`
  border-radius: 5px;
  width: 129px;
  height: 48px;
  margin-left: 20px;
`;

const MenuActive = styled.div``;
