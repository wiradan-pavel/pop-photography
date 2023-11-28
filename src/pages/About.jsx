import {
  AboutApproach,
  AboutHeader,
  AboutMission,
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
      <AboutMission />
      {/* <Testimonials /> */}
      <Gallery />
    </>
  );
}
