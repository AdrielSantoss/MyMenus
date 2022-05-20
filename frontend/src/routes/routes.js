import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from '../screens/error404';
import PrincipalPage from '../screens/mainScreen';
import SignPage from '../screens/signScreen';
import LoginPage from '../screens/loginScreen';

const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PrincipalPage />} />
        <Route exact path="*" element={<Error404 />} />
        <Route exact path="/sign" element={<SignPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPages;
