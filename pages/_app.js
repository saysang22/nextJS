import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Top from '../src/component/Top';
import Footer from '../src/component/Footer';

function MyApp({ Component, pageProps }) {
  // Component = 현재 페이지
  // pageProps = 서버사이드렌더링할 때..초기객체?
  return (
  <div>
    <Top/>
    <Component {...pageProps} />
    <Footer/>
  </div>
  )
}

export default MyApp

// 페이지 전환시 레이아웃을 유지 할 수 있다.
// 페이지 전환시 상태값을 유지할 수 있다.ComponentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
// 추가적인 데이터를 페이지로 주입시켜주는게 가능하다.
// 글로벌 CSS를 이곳에 선언한다.
