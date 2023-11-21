// logo
import logo from '../assets/icons/logo.svg';

// decorations
import cameraDec from '../assets/icons/decorations/camera.svg';
import dotsLessDec from '../assets/icons/decorations/dotsLess.svg';
import dotsLessBlackDec from '../assets/icons/decorations/dotsLessBlack.svg';
import dotsMoreDec from '../assets/icons/decorations/dotsMore.svg';
import spiralDec from '../assets/icons/decorations/spiral.svg';
import spiralBlackDec from '../assets/icons/decorations/spiralBlack.svg';
import waveDec from '../assets/icons/decorations/wave.svg';
import homeFeaturesDec from '../assets/icons/decorations/homeFeaturesDec.svg';

// home
// homeMain
import homeMainBack1 from '../assets/images/home/homeMain-back1.svg';
import homeMainBack2 from '../assets/images/home/homeMain-back2.svg';
import homeMain1 from '../assets/images/home/homeMain1.png';
import homeMain2 from '../assets/images/home/homeMain2.png';
import homeMain3 from '../assets/images/home/homeMain3.png';
import homeMain4 from '../assets/images/home/homeMain4.png';
import homeMain5 from '../assets/images/home/homeMain5.png';
import homeMain6 from '../assets/images/home/homeMain6.png';
import homeMain7 from '../assets/images/home/homeMain7.png';
import homeMain8 from '../assets/images/home/homeMain8.png';
import homeMain9 from '../assets/images/home/homeMain9.png';
import homeMain10 from '../assets/images/home/homeMain10.png';
import homeMain11 from '../assets/images/home/homeMain11.png';
import homeMain12 from '../assets/images/home/homeMain12.png';
import homeMain13 from '../assets/images/home/homeMain13.png';
import homeMain14 from '../assets/images/home/homeMain14.png';
import homeMain15 from '../assets/images/home/homeMain15.png';
// homeFeatures
import camera from '../assets/icons/features/camera.svg';
import mirror from '../assets/icons/features/mirror.svg';
import book from '../assets/icons/features/book.svg';
import flapper from '../assets/icons/features/flapper.svg';
import homeFeatures1 from '../assets/images/home/homeFeatures1.png';
import homeFeatures2 from '../assets/images/home/homeFeatures2.jpg';
import homeFeatures3 from '../assets/images/home/homeFeatures3.jpg';
import backgroundHomeFeatures from '../assets/images/home/backgroundHomeFeatures.png';

// social
import facebook from '../assets/icons/social/facebook.svg';
import facebookFill from '../assets/icons/social/facebookFill.svg';
import gmail from '../assets/icons/social/gmail.svg';
import instagramFill from '../assets/icons/social/instagramFill.svg';
import linkedIn from '../assets/icons/social/linkedIn.svg';
import tiktokFill from '../assets/icons/social/tiktokFill.svg';
import twitter from '../assets/icons/social/twitter.svg';
import youtubeFill from '../assets/icons/social/youtubeFill.svg';

export const decorationImgUrls = {
  cameraDec: cameraDec,
  dotsLessDec: dotsLessDec,
  dotsLessBlackDec: dotsLessBlackDec,
  dotsMoreDec: dotsMoreDec,
  spiralDec: spiralDec,
  spiralBlackDec: spiralBlackDec,
  waveDec: waveDec,
};

export const header = [
  {
    id: 1,
    name: 'nav',
    links: [
      {
        id: 1,
        name: 'Home',
        link: '/',
      },
      {
        id: 2,
        name: 'About us',
        link: '/about',
      },
      {
        id: 3,
        name: 'Services',
        link: '/services',
      },
      {
        id: 4,
        name: 'FAQ',
        link: '/faq',
      },
      {
        id: 5,
        name: 'Blog',
        link: '/blog',
      },
      {
        id: 6,
        name: 'Pricing',
        link: '/pricing',
      },
    ],
    linksServices: [
      {
        id: 1,
        name: 'Kids Photography',
        link: '/services/kids-photography',
      },
      {
        id: 2,
        name: 'Child Modelling',
        link: '/services/child-modelling',
      },
      {
        id: 3,
        name: 'Teen Modelling Folios',
        link: '/services/teen-modelling',
      },
    ],
  },
  {
    id: 2,
    name: 'button',
    text: 'Book Now',
    link: '/pricing',
  },
  {
    id: 3,
    name: 'logo',
    imgUrl: logo,
  },
];

export const home = [
  {
    id: 1,
    name: 'homeMain',
    title: 'Step into the Spotlight with Pop! Photography',
    text: 'Where every child shines bright as a star!',
    button: 'Book the Star Experience!',
    linkButton: '/pricing',
    imgs: [
      {
        id: 1,
        name: 'backImage',
        imgUrls: [homeMainBack1, homeMainBack2],
      },
      {
        id: 2,
        name: 'frontImage',
        imgUrls: [
          homeMain1,
          homeMain2,
          homeMain3,
          homeMain4,
          homeMain5,
          homeMain6,
          homeMain7,
          homeMain8,
          homeMain9,
          homeMain10,
          homeMain11,
          homeMain12,
          homeMain13,
          homeMain14,
          homeMain15,
        ],
      },
    ],
    social: [
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
  },
  {
    id: 2,
    name: 'homeFeatures',
    title: 'Features/Benefits',
    whyChooseTitle1: 'Why Choose',
    whyChooseTitle2: 'Pop Photography?',
    cards: [
      {
        id: 1,
        title: 'Custom Photoshoot Themes',
        imgUrl: camera,
      },
      {
        id: 2,
        title: 'Kid-approved Makeup & Styling',
        imgUrl: mirror,
      },
      {
        id: 3,
        title: 'Keepsake Albums & Portfolios',
        imgUrl: book,
      },
      {
        id: 4,
        title: 'A Safe, Fun, & Engaging Ambience',
        imgUrl: flapper,
      },
    ],
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
    button: {
      text: 'LEARN MORE',
      link: '/about',
    },
    imgUrls: [
      homeFeatures1,
      homeFeatures2,
      homeFeaturesDec,
      dotsLessBlackDec,
      backgroundHomeFeatures,
    ],
    imgUrlOther: homeFeatures3,
    otherText1: '10',
    otherText2: 'years',
    otherText3: 'of experience',
  },
];
