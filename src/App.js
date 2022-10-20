import GlobalStyle from "./commons/GlobalStyle";
import MainHeader from "./components/UI/MainHeader";
import WriteGuestBook from "./pages/WriteGuestBook";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <WriteGuestBook />
    </>
  );
}

export default App;
