import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { Home } from '../../Pages/Home';
import { AboutPomodoro } from '../../Pages/AboutPomodoro';
import { NotFound } from '../../Pages/NotFound';
import { useEffect } from 'react';

//hack para rolar a pagina para cima
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    //console.log(pathname);
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro' element={<AboutPomodoro />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}