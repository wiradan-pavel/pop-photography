import {
  ServiceTeenHeader,
  ServiceTeenImp,
  ServiceTeenOppo,
  ServiceTeenUnlock,
  Map,
  Testimonials,
  Faq,
  ServiceTeenBanner,
  Form,
  Gallery,
} from '../components';

export default function ServiceTeen() {
  return (
    <>
      <ServiceTeenHeader />
      <ServiceTeenUnlock />
      <ServiceTeenImp />
      <ServiceTeenOppo />
      <Map />
      <Testimonials />
      <Faq />
      <ServiceTeenBanner />
      <Form />
      <Gallery />
    </>
  );
}
