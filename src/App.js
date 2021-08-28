import styled from 'styled-components';
import './styles/App.scss';
import AppReducers from './components/AppRouters';
import Header from './components/UI/Header';

const AppBody = styled.div`
`;
const AppContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 125px;
  padding: 0 15px;
`;

function App() {
  return (
    <AppBody>
      <Header/>
      <AppContainer className="container">
        <AppReducers/>
      </AppContainer>
    </AppBody>
  );
}

export default App;