import {
  Faq,
  Features,
  Gallery,
  Map,
  ServicesBanner,
  ServicesCust,
  ServicesHeader,
  ServicesOur,
  Testimonials,
} from '../components';

export default function Services() {
  return (
    <>
      <ServicesHeader />
      <Features />
      <ServicesOur />
      <ServicesCust />
      <Map />
      <Testimonials />
      <Faq />
      <ServicesBanner />
      <Gallery />
    </>
  );
}
