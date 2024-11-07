import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import '../scss/main.scss';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/contacts" element={<ContactsPage />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
