import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import AboutPage from './AboutPage';
import ReservationPage from './ReservationPage';
import ServicePage from './Design';
import ScrollTop from './ScrollTop';
const GalleryPage = lazy(() => import('./GalleryPage'));
const ContactPage = lazy(() => import('./ContactPage'));
export default function App() {
  return <BrowserRouter>
    <ScrollTop />
    <Suspense fallback={<div className="loading-state" role="status">Bizim Çatı…</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/reservasyon" element={<ReservationPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/galeri" element={<GalleryPage />} />
        {[['kirdugunu', 'wedding'], ['dogumgunu', 'birthday'], ['bbq', 'bbq'], ['sirketorganizasyonu', 'corporate'], ['mezuniyet', 'graduation'], ['seminer', 'seminar']].map(([path, kind]) => <Route key={path} path={'/' + path} element={<ServicePage kind={kind} />} />)}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>;
}
