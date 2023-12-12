import { Routes, Route } from 'react-router-dom';
import {
  About,
  Blog,
  Faq,
  Home,
  Pricing,
  Services,
  ServiceTeen,
  ServiceChild,
  ServiceKids,
} from './pages';
import { Footer, Header } from './components';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/teen-modelling" element={<ServiceTeen />} />
        <Route path="/services/child-modelling" element={<ServiceChild />} />
        <Route path="/services/kids-photography" element={<ServiceKids />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}
