import {
  Features,
  Gallery,
  HomeFeatures,
  HomeHeader,
  HomeVideos,
  Testimonials,
} from '../components';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Features />
      <HomeFeatures />
      <HomeVideos />
      <Testimonials />
      <Gallery />
    </>
  );
}
