// contacts
import mail from '../assets/icons/contacts/mail.svg';
import phone from '../assets/icons/contacts/phone.svg';
// social
import facebookFill from '../assets/icons/social/facebookFill.svg';
import tiktokFill from '../assets/icons/social/tiktokFill.svg';
import instagramFill from '../assets/icons/social/instagramFill.svg';
import youtubeFill from '../assets/icons/social/youtubeFill.svg';

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
