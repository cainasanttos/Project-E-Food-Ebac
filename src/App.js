import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <RoutesConfig />
      </AppContainer>
    </Router>
  );
}

export default App;