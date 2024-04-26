import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

import { Login, SignUp } from 'Components';
import MainPage from 'routes/MainPage/MainPage';
import TestPage from 'routes/Test/Test';
import Main from 'layout/Main/Main';
import FullScreen from 'layout/FullScreen/FullScreen';

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/fullscreen' element={<FullScreen />}>
        <Route path='test/:id' element={<TestPage />} />
      </Route>
      <Route path='/' element={<Main />}>
        <Route path='/' element={<MainPage />} />
      </Route>
      <Route path='*' element={<main className={'errorPage'}><p>Неверный адрес</p></main>} />
    </Routes>
  );
}


export default App;