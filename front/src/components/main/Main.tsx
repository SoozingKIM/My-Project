import React from 'react';
import styled from 'styled-components';

type Wrapper = {
  children: React.ReactNode;
};

const MainContainer = styled.main`
  background-color: wheat;
  width: 100%; /* 전체 너비를 사용 */
  max-width: 1200px; /* 최대 너비를 설정하여 너비가 너무 커지는 것을 방지 */
  margin: 0 auto; /* 가운데 정렬 */
  padding: 20px; /* 내부 여백 설정 */
`;

function Main({ children }: Wrapper) {
  return <MainContainer>{children}</MainContainer>;
}

export default Main;
