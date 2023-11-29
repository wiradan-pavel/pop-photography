import {
  AboutApproach,
  AboutHeader,
  AboutMission,
  AboutStory,
  AboutTeam,
  Gallery,
  Map,
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
      <Map />
      <Testimonials />
      <Gallery />
    </>
  );
}
