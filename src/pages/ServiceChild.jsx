import {
  Faq,
  Form,
  Gallery,
  Map,
  ServiceChildBannerFirst,
  ServiceChildBannerSecond,
  ServiceChildDiscover,
  ServiceChildExp,
  ServiceChildHeader,
  ServiceChildWhy,
  Testimonials,
} from '../components';

export default function ServiceChild() {
  return (
    <>
      <ServiceChildHeader />
      <ServiceChildDiscover />
      <ServiceChildExp />
      <ServiceChildBannerFirst />
      <ServiceChildWhy />
      <Map />
      <Testimonials />
      <Faq />
      <ServiceChildBannerSecond />
      <Form />
      <Gallery />
    </>
  );
}
