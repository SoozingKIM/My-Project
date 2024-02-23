import styled from 'styled-components';

export const Container = styled.header`
  background-color: yellow;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 1000;
  top:0;
  padding: 10px 0;
`;

export const LogoWrapper = styled.div`
  width: 50px;
  background-color: orange;
`;

export const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;
export const Menu = styled.li`
  background-color: white;
`;
