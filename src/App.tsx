import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import '../scss/main.scss';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
