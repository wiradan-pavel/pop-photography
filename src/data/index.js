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

// social
import facebook from '../assets/icons/social/facebook.svg';
import facebookFill from '../assets/icons/social/facebookFill.svg';
import gmail from '../assets/icons/social/gmail.svg';
import instagramFill from '../assets/icons/social/instagramFill.svg';
import linkedIn from '../assets/icons/social/linkedIn.svg';
import tiktokFill from '../assets/icons/social/tiktokFill.svg';
import twitter from '../assets/icons/social/twitter.svg';
import youtubeFill from '../assets/icons/social/youtubeFill.svg';

// features
import camera from '../assets/icons/features/camera.svg';
import mirror from '../assets/icons/features/mirror.svg';
import book from '../assets/icons/features/book.svg';
import flapper from '../assets/icons/features/flapper.svg';

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
  },
];
