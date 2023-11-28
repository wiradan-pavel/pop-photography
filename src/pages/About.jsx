import {
  AboutApproach,
  AboutHeader,
  AboutStory,
  AboutTeam,
  Gallery,
  Testimonials,
} from '../components';

export default function About() {
  return (
    <>
      <AboutHeader />
      <AboutStory />
      <AboutApproach />
      <AboutTeam />
      {/* <Testimonials /> */}
      <Gallery />
    </>
  );
}
