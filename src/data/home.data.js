// homeHeader
import homeHeader1 from '../assets/images/home/homeHeader1.png';
import homeHeader2 from '../assets/images/home/homeHeader2.png';
import homeHeader3 from '../assets/images/home/homeHeader3.png';
import homeHeader4 from '../assets/images/home/homeHeader4.png';
import homeHeader5 from '../assets/images/home/homeHeader5.png';
import homeHeader6 from '../assets/images/home/homeHeader6.png';
import homeHeader7 from '../assets/images/home/homeHeader7.png';
import homeHeader8 from '../assets/images/home/homeHeader8.png';
import homeHeader9 from '../assets/images/home/homeHeader9.png';
import homeHeader10 from '../assets/images/home/homeHeader10.png';
import homeHeader11 from '../assets/images/home/homeHeader11.png';
import homeHeader12 from '../assets/images/home/homeHeader12.png';
import homeHeader13 from '../assets/images/home/homeHeader13.png';
import homeHeader14 from '../assets/images/home/homeHeader14.png';
import homeHeader15 from '../assets/images/home/homeHeader15.png';
import facebook from '../assets/icons/social/facebook.svg';
import gmail from '../assets/icons/social/gmail.svg';
import linkedIn from '../assets/icons/social/linkedIn.svg';
import twitter from '../assets/icons/social/twitter.svg';

// homeWhy
import homeWhy1 from '../assets/images/home/homeWhy1.png';
import homeWhy2 from '../assets/images/home/homeWhy2.jpg';
import homeYearImg from '../assets/images/home/homeYear.jpg';

// homeVideos
import playIcon from '../assets/icons/playIcon.svg';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import previewVideo1 from '../assets/videos/previewVideos1.jpg';
import previewVideo2 from '../assets/videos/previewVideos2.jpg';
import previewVideo3 from '../assets/videos/previewVideos3.jpg';

export const homeHeader = {
  // header
  title: 'Step into the Spotlight with Pop! Photography',
  text: 'Where every child shines bright as a star!',
  imgUrls: [
    homeHeader1,
    homeHeader2,
    homeHeader3,
    homeHeader4,
    homeHeader5,
    homeHeader6,
    homeHeader7,
    homeHeader8,
    homeHeader9,
    homeHeader10,
    homeHeader11,
    homeHeader12,
    homeHeader13,
    homeHeader14,
    homeHeader15,
  ],
  socialLinks: [
    {
      id: 1,
      name: 'twitter',
      imgUrl: twitter,
      link: 'http://google.com',
    },
    {
      id: 2,
      name: 'gmail',
      imgUrl: gmail,
      link: 'http://google.com',
    },
    {
      id: 3,
      name: 'facebook',
      imgUrl: facebook,
      link: 'http://google.com',
    },
    {
      id: 4,
      name: 'linkedIn',
      imgUrl: linkedIn,
      link: 'http://google.com',
    },
  ],
};

export const homeWhy = {
  title1: 'Why Choose',
  title2: 'Pop Photography?',
  list: [
    {
      id: 1,
      text: 'Decades of Excellence: Over 40 Years Of Crafting stories, not just photos.',
    },
    {
      id: 2,
      text: 'Tailored Experience: One-to-one advice ensuring every shot is perfect.',
    },
    {
      id: 3,
      text: 'Safety First: Studios prioritising child safety and cleanliness.',
    },
    {
      id: 4,
      text: 'All-Inclusive: From non-toxic props to professional editing, we’ve got you covered.',
    },
    {
      id: 5,
      text: 'Showcase Ready: A vast range of printing and framing options to flaunt your memories.',
    },
  ],
  imgUrls: [homeWhy1, homeWhy2],
};

export const homeYear = {
  imgUrl: homeYearImg,
  text1: '10',
  text2: 'years',
  text3: 'of experience',
};

export const homeVideo = {
  title: 'Our Videos',
  previewImgUrls: [previewVideo1, previewVideo2, previewVideo3],
  videoUrls: [video1, video2, video3],
  playIcon,
};
