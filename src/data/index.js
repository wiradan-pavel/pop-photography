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
// homeVideos
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import playIcon from '../assets/icons/other/play.svg';
import previewVideo1 from '../assets/videos/previewVideos1.jpg';
import previewVideo2 from '../assets/videos/previewVideos2.jpg';
import previewVideo3 from '../assets/videos/previewVideos3.jpg';
// homeTestimonials
import homeTestimonials from '../assets/images/home/homeTestimonials.jpg';
// gallery
import cameraYellow from '../assets/icons/other/camera.svg';
import gellarySection1 from '../assets/images/gallery/gellarySection1.jpg';
import gellarySection2 from '../assets/images/gallery/gellarySection2.jpg';
import gellarySection3 from '../assets/images/gallery/gellarySection3.jpg';
import gellarySection4 from '../assets/images/gallery/gellarySection4.jpg';
import gellarySection5 from '../assets/images/gallery/gellarySection5.jpg';
import gellarySection6 from '../assets/images/gallery/gellarySection6.jpg';
import gellarySection7 from '../assets/images/gallery/gellarySection7.jpg';
import gellarySection8 from '../assets/images/gallery/gellarySection8.jpg';
import gellarySection9 from '../assets/images/gallery/gellarySection9.jpg';
import gellarySection10 from '../assets/images/gallery/gellarySection10.jpg';
import gellarySection11 from '../assets/images/gallery/gellarySection11.jpg';

// social
import facebook from '../assets/icons/social/facebook.svg';
import facebookFill from '../assets/icons/social/facebookFill.svg';
import gmail from '../assets/icons/social/gmail.svg';
import instagramFill from '../assets/icons/social/instagramFill.svg';
import linkedIn from '../assets/icons/social/linkedIn.svg';
import tiktokFill from '../assets/icons/social/tiktokFill.svg';
import twitter from '../assets/icons/social/twitter.svg';
import youtubeFill from '../assets/icons/social/youtubeFill.svg';

// contacts
import mail from '../assets/icons/contacts/mail.svg';
import phone from '../assets/icons/contacts/phone.svg';

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
  {
    id: 3,
    name: 'homeVideos',
    title: 'Our Videos',
    playIconUrl: playIcon,
    previewVideosImgUrls: [previewVideo1, previewVideo2, previewVideo3],
    videos: [
      {
        id: 1,
        url: video1,
      },
      {
        id: 2,
        url: video2,
      },
      {
        id: 3,
        url: video3,
      },
    ],
  },
  {
    id: 4,
    name: 'homeTestimonials',
    title: 'Testimonials',
    list: [
      {
        id: 1,
        imgUrl: homeTestimonials,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        nickname: 'John SMITH',
        who: 'Kid Model',
        rate: [1, 1, 1, 1, 0.5],
      },
      {
        id: 2,
        imgUrl: homeTestimonials,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        nickname: 'John SMITH',
        who: 'Kid Model',
        rate: [1, 1, 1, 1, 0],
      },
      {
        id: 3,
        imgUrl: homeTestimonials,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        nickname: 'John SMITH',
        who: 'Kid Model',
        rate: [1, 1, 1, 1, 1],
      },
    ],
    button: {
      text: 'Book Now',
      link: '/pricing',
    },
  },
];

export const gallery = {
  title: 'Our Clicks',
  titleImgUrl: cameraYellow,
  photos: [
    {
      src: gellarySection1,
      width: 275,
      height: 437,
    },
    {
      src: gellarySection2,
      width: 348,
      height: 178,
    },
    {
      src: gellarySection3,
      width: 348,
      height: 243,
    },
    {
      src: gellarySection4,
      width: 288,
      height: 705,
    },
    {
      src: gellarySection5,
      width: 283,
      height: 357,
    },
    {
      src: gellarySection6,
      width: 359,
      height: 185,
    },
    {
      src: gellarySection7,
      width: 270,
      height: 336,
    },
    {
      src: gellarySection8,
      width: 283,
      height: 332,
    },
    {
      src: gellarySection9,
      width: 358,
      height: 504,
    },
    {
      src: gellarySection10,
      width: 270,
      height: 353,
    },
    {
      src: gellarySection11,
      width: 643,
      height: 252,
    },
  ],
};

export const footer = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  quickLinksTitle: 'Quick Links',
  quickLinks: [
    {
      id: 1,
      text: 'About us',
      link: '/about',
    },
    {
      id: 2,
      text: 'Services',
      link: '/services',
    },
    {
      id: 3,
      text: 'Pricing',
      link: '/pricing',
    },
    {
      id: 4,
      text: 'Portfolio',
      link: '/portfolio',
    },
    {
      id: 5,
      text: 'Bookings',
      link: '/',
    },
  ],
  contactTitle: 'Contact',
  contacts: [
    {
      id: 1,
      name: 'Call',
      text: '19000 000 00000',
      link: 'tel:19000000019',
      imgUrl: phone,
    },
    {
      id: 2,
      name: 'Email',
      text: 'info@popphotography.com',
      link: 'mailto:info@popphotography.com',
      imgUrl: mail,
    },
  ],
  socialLinksTitle: 'Social Links',
  socialLinks: [
    {
      id: 1,
      name: 'facebook',
      imgUrl: facebookFill,
      link: 'http://google.com',
    },
    {
      id: 2,
      name: 'instagram',
      imgUrl: instagramFill,
      link: 'http://google.com',
    },
    {
      id: 3,
      name: 'youtube',
      imgUrl: youtubeFill,
      link: 'http://google.com',
    },
    {
      id: 4,
      name: 'tiktok',
      imgUrl: tiktokFill,
      link: 'http://google.com',
    },
  ],
  copyrightTitle: 'Copyright © 2023 Pop Photography, All rights reserved.',
};
