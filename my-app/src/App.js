import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactsPage from './components/pages/ContactsPage';
import MoviesPage from './components/pages/MoviesPage';
import NotFoundPage from './components/pages/NotFoundPage';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <Routes>
     <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/contacts" element={<ContactsPage />}/>
      <Route path="/movies" element={<MoviesPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Route>
    </Routes>
  );
}

export default App;
