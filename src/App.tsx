import './App.css';
import Box from './components/Box/Box';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'
import Landing from './pages/landing/Landing';
import PageLayout from './layouts/content/PageLayout';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
      <PageLayout>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Landing/>}
            />
          </Routes>
        </Router>
      </PageLayout>
    </div>
  );
}

export default App;
