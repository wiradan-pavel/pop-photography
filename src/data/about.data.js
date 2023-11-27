// header
import aboutHeaderImg from '../assets/images/about/header.png';

// story
import challengesImg from '../assets/images/about/story/challenges.svg';
import journeyImg from '../assets/images/about/story/journey.svg';
import milestonesImg from '../assets/images/about/story/milestones.svg';

// approach
import approachImg from '../assets/images/about/approach.png';

// team
import empl1 from '../assets/images/about/team/empl1.jpg';
import empl2 from '../assets/images/about/team/empl2.jpg';
import empl3 from '../assets/images/about/team/empl3.jpg';
import empl4 from '../assets/images/about/team/empl4.jpg';

// mission
import missionLeft from '../assets/images/about/mission/left.jpg';
import missionRight from '../assets/images/about/mission/right.jpg';

// header
export const aboutHeader = {
  title: 'About Pop Photography',
  imgUrl: aboutHeaderImg,
};

// story
export const aboutStory = {
  title: 'Brand Story',
  cards: [
    {
      id: 1,
      title: 'Our Journey',
      text: "At Pop! Photography, we believe that every child deserves to shine, and that's where our story begins. Founded by Alex and Adam in the vibrant cities of Melbourne and Sydney, we embarked on a mission to create a world where the magic of high-end photography is accessible to everyone.",
      imgUrl: journeyImg,
    },
    {
      id: 2,
      title: 'Milestones',
      text: 'Our milestones are a testament to our commitment to excellence. From our first studio opening to our expansion into two thriving cities, each step forward has been a celebration of capturing the essence of childhood.',
      imgUrl: milestonesImg,
    },
    {
      id: 3,
      title: 'Challenges & Triumphs',
      text: "Like any great adventure, our journey has had its challenges. But we've met each obstacle with determination and creativity. From finding the perfect backdrop for a photoshoot to making a shy child giggle, every challenge has made us better at what we do.",
      imgUrl: challengesImg,
    },
  ],
};

// approach
export const aboutApproach = {
  title1: 'Our Expertise &',
  title2: 'Approach',
  text: 'Have fun! With over four decades of combined experience in the | | entertainment industry and personal photography, we know how to create a relaxed | | and enjoyable environment.',
  imgUrl: approachImg,
};

// team
export const aboutTeam = {
  title: 'Meet the Team',
  text: "At Pop! Photography, we believe that every child deserves to shine, and that's where our story begins. Founded by Alex and Adam in the vibrant cities of Melbourne and Sydney, we embarked on a mission to create a world where the magic of high-end photography is accessible to everyone.",
  cards: [
    {
      id: 1,
      imgUrl: empl1,
      name: 'John Doe',
      who: 'CEO & Co-Founder',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
      id: 2,
      imgUrl: empl2,
      name: 'John Doe',
      who: 'CEO & Co-Founder',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
      id: 3,
      imgUrl: empl3,
      name: 'John Doe',
      who: 'CEO & Co-Founder',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
      id: 4,
      imgUrl: empl4,
      name: 'John Doe',
      who: 'CEO & Co-Founder',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
  ],
};

// mission
export const aboutMission = {
  title: 'Our Values & Mission',
  text: 'At POP Photography, we live by the values of creativity, professionalism, and inclusivity, using imagination to create artful photographs, approaching every project with dedication, and ensuring that everyone feels valued. Our mission is to offer a safe, enjoyable photography experience that lets kids shine and create lasting memories, turning ordinary moments into the extraordinary.',
  imgLeftUrl: missionLeft,
  imgRightUrl: missionRight,
};
