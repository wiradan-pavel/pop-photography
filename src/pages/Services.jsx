import {
  Faq,
  Features,
  Map,
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
    </>
  );
}
