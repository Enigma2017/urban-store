import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ProductPage from './pages/ProductPage/ProductPage';
import '../scss/main.scss';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/contacts" element={<ContactsPage />} />
          <Route index path="/product" element={<ProductPage />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
