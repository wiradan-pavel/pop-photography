import {
  Faq,
  Form,
  Gallery,
  ServiceKidsBannerFirst,
  ServiceKidsBannerSecond,
  ServiceKidsElevate,
  ServiceKidsHeader,
  ServiceKidsImp,
  ServiceKidsTransform,
  ServiceKidsUnlock,
  Testimonials,
} from '../components';

export default function ServiceKids() {
  return (
    <>
      <ServiceKidsHeader />
      <ServiceKidsUnlock />
      <ServiceKidsImp />
      <ServiceKidsBannerFirst />
      <ServiceKidsElevate />
      <ServiceKidsTransform />
      <Testimonials />
      <Faq />
      <ServiceKidsBannerSecond />
      <Form />
      <Gallery />
    </>
  );
}
