import headerImg from '../assets/images/serviceKids/header.jpg';
import unlockImg from '../assets/images/serviceKids/unlock.jpg';

// IMP
import poseImg from '../assets/images/serviceKids/imp/pose.svg';
import faceImg from '../assets/images/serviceKids/imp/face.svg';
import runwayImg from '../assets/images/serviceKids/imp/runway.svg';

// ELEVATE
import leftImg from '../assets/images/serviceKids/elevate1.jpg';
import rightImg from '../assets/images/serviceKids/elevate2.jpg';

// TRANSFORMATIONS
import beforeImg from '../assets/images/serviceKids/before.jpg';
import afterImg from '../assets/images/serviceKids/after.jpg';

export const serviceKidsHeader = {
  title: 'Kids Photography',
  imgUrl: headerImg,
};

export const serviceKidsUnlock = {
  title: "Unlock Your Child's Star Potential with POP! Photography",
  text1:
    "When it comes to kids' photography, it's not just about taking pictures; it's about capturing the heartwarming essence of childhood. These professional photographs are more than mere images; they're gateways to cherished memories and fleeting emotions. They freeze in time those moments of innocence, laughter, and wonder that define our children's growth.",
  text2:
    'These headshots are not just photographs; they are the keys to unlocking opportunities that can turn dreams into reality.',
  imgUrl: unlockImg,
};

export const serviceKidsImp = {
  title: 'Importance of Impressive Kids Portfolio',
  list: [
    {
      id: 1,
      title: 'High-Fashion Pose',
      text: 'A dramatic runway shot highlighting strong, fierce, and elegant runway presence.',
      imgUrl: poseImg,
    },
    {
      id: 2,
      title: 'Natural Beauty',
      text: 'A sunny, outdoor image that radiates freshness and positivity, suitable for promoting skincare.',
      imgUrl: faceImg,
    },
    {
      id: 3,
      title: 'Runway Glamour',
      text: 'A dynamic shot captured on the runway, exuding confidence, highlighting ability to command attention.',
      imgUrl: runwayImg,
    },
  ],
};

export const serviceKidsElevate = {
  title: "Elevate Your Child's Confidence with Stunning Photos",
  text1:
    'Our team of photographers brings a wealth of expertise and experience to the art of capturing your most precious moments. With a collective history of years spent behind the lens, we have honed our skills to a level of excellence that goes beyond just taking pictures.',
  text2:
    'We pride ourselves on crafting memories, not just images. From stunning portraits that reflect your unique personality to capturing the magical essence of your special day.',
  imgUrlLeft: leftImg,
  imgUrlRight: rightImg,
};

export const serviceKidsTransform = {
  title: 'Transformations Visualized: Before & After',
  imgUrlBefore: beforeImg,
  imgUrlAfter: afterImg,
};
