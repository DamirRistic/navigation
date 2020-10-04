import styled, { css } from "styled-components";

export const NavigationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 948px;
  width: 440px;
  border-top-left-radius: 48px;
`;

export const NavigationContainerCover = styled(NavigationContainer)`
  background-color: ${({ theme }) => theme.color.white};
  z-index: 2;

  ${({ open }) =>
    open &&
    css`
      height: 100%;
      top: 6px;
      left: 253px;
      transform: rotate(-7deg);
    `}
`;

export const Cover = styled(NavigationContainer)`
  height: 667px;
  width: 375px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const TitleBar = styled.div`
  margin: 43px 0 0 36px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: max-content;
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 35px;

  span {
    height: 4px;
    width: 30px;
    border-radius: 3.5px;
    background-color: ${({ theme }) => theme.color.light};

    &:nth-child(1) {
      margin-bottom: 6px;
    }

    &:nth-child(2) {
      margin-bottom: 7px;
    }
  }
`;

export const NavigationContainerMenu = styled(NavigationContainer)`
  background-color: ${({ theme, open }) =>
    open ? theme.color.main : theme.color.white};
  z-index: 1;
`;

export const Menu = styled(NavigationContainer)`
  height: 771px;
  width: 375px;
  display: flex;
  flex-direction: column;
`;

export const MenuHeader = styled.h1`
  margin: 122px 0 0 58px;
  color: #ffffff;
  font-family: Avenir;
  font-size: 1.75rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 38px;
`;

export const MenuList = styled.ul`
  width: 176px;
  margin-left: 27px;
  display: flex;
  flex-direction: column;
`;

export const MenuListItem = styled.li`
  width: 100%;
  border-radius: 15.5px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  padding: 12px 0 12px 30px;
  margin-bottom: 19px;
  text-align: left;
  font-size: 1.25rem;
  letter-spacing: -0.5px;
  line-height: 27px;

  &.active {
    margin-top: 57px;
    border-radius: 15.5px;
    background-color: ${({ theme }) => theme.color.darkAccent};
    color: ${({ theme }) => theme.color.dark};
  }

  &:nth-child(2) {
    margin-bottom: 18px;
  }

  &:nth-child(5) {
    padding: 0;
    margin: 29.5px 0 59.5px;
    height: 1px;
    width: 100%;
    border: 1px solid #84818e;
  }

  &:last-child {
    margin-bottom: 0;
    padding: 0 0 0 30px;
  }
`;
