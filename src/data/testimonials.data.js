// people
import testimonials1 from '../assets/images/testimonials/testimonials1.jpg';

// stars
import star0 from '../assets/icons/star0.svg';
import star50 from '../assets/icons/star50.svg';
import star100 from '../assets/icons/star100.svg';

export const testimonials = {
  title: 'Testimonials',
  list: [
    {
      id: 1,
      imgUrl: testimonials1,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      nickname: 'John SMITH',
      who: 'Kid Model',
      rate: [1, 1, 1, 1, 0.5],
    },
    {
      id: 2,
      imgUrl: testimonials1,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      nickname: 'John SMITH',
      who: 'Kid Model',
      rate: [1, 1, 1, 1, 0],
    },
    {
      id: 3,
      imgUrl: testimonials1,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      nickname: 'John SMITH',
      who: 'Kid Model',
      rate: [1, 1, 1, 1, 1],
    },
  ],
  star0,
  star50,
  star100,
};
