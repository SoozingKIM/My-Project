import * as H from './Header.style';

function Header() {
  return (
    <>
      <H.Container>
        <H.LogoWrapper>
          <a href="home>">로고</a>
        </H.LogoWrapper>
        <H.NavBar>
          <H.Menu>
            <a href="#">메뉴1</a>
          </H.Menu>
          <H.Menu>
            <a href="#">메뉴2</a>
          </H.Menu>
          <H.Menu>
            <a href="#">메뉴3</a>
          </H.Menu>
        </H.NavBar>
        <div>검색하기</div>
      </H.Container>
    </>
  );
}

export default Header;
