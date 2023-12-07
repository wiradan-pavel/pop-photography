import servicesHeaderImg from '../assets/images/services/header.jpg';
import servicesOurImg from '../assets/images/services/our.jpg';
// servicesCust
import cust1 from '../assets/images/services/cust/cust1.jpg';
import cust2 from '../assets/images/services/cust/cust2.jpg';
import cust3 from '../assets/images/services/cust/cust3.jpg';

export const servicesHeader = {
  title: 'Our Fantastic Services',
  imgUrl: servicesHeaderImg,
};

export const servicesOur = {
  title: 'Our Services',
  text: 'Emphasize the individuality and unique qualities that make children and teens ideal for Modelling. Highlight their distinctive smiles and looks.',
  imgUrl: servicesOurImg,
  list: [
    {
      id: 1,
      num: '01',
      text: 'Kids Photography',
      link: '/',
    },
    {
      id: 2,
      num: '02',
      text: 'Child Modelling',
      link: '/',
    },
    {
      id: 3,
      num: '03',
      text: 'Teen Modelling Folios',
      link: '/',
    },
  ],
};

export const servicesCust = {
  title: 'Customization Options',
  list: [
    { id: 1, imgUrl: cust1, text: 'themed photoshoots' },
    { id: 2, imgUrl: cust2, text: 'makeup and styling' },
    { id: 3, imgUrl: cust3, text: 'location choices' },
  ],
};
