import styled from 'styled-components';
import './styles/App.scss';
import AppReducers from './components/AppRouters';

const AppBody = styled.div`

`;

function App() {
  return (
    <AppBody>
      <AppReducers/>
    </AppBody>
  );
}

export default App;