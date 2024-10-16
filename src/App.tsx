import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route index path="/" element={<HomePage />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
