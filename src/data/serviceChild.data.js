import headerImg from '../assets/images/serviceChild/header.jpg';
import discoverImg from '../assets/images/serviceChild/discover.jpg';

// EXP
import exp1Img from '../assets/images/serviceChild/exp/exp1.jpg';
import exp2Img from '../assets/images/serviceChild/exp/exp2.jpg';
import exp3Img from '../assets/images/serviceChild/exp/exp3.jpg';

// WHY
import whyImg from '../assets/images/serviceChild/why/main.jpg';
import buildingImg from '../assets/images/serviceChild/why/building.svg';
import responsImg from '../assets/images/serviceChild/why/respons.svg';
import ethicImg from '../assets/images/serviceChild/why/ethic.svg';

export const serviceChildHeader = {
  title: 'Child Modelling',
  imgUrl: headerImg,
};

export const serviceChildDiscover = {
  title: "Discover Your Child's Modelling Potential with POP! Photography.",
  text: 'The individuality and unique qualities of children and teenagers, along with their distinctive smiles and looks, offer a world of creative opportunities for Modelling in the fashion and advertising industry. Their charm, authenticity, and versatility make them invaluable assets in capturing the imagination and attention of audiences, making them ideal candidates for Modelling a wide array of products and concepts.',
  imgUrl: discoverImg,
};

export const serviceChildExp = {
  title: 'Experience at POP! Photography',
  list: [
    {
      id: 1,
      title: 'Studio Setting',
      text: 'The professional studio environment plays a pivotal role in real child Modelling shoots.',
      imgUrl: exp1Img,
    },
    {
      id: 2,
      title: 'Photographer Expertise',
      text: 'The professional studio environment plays a pivotal role in real child Modelling shoots.',
      imgUrl: exp2Img,
    },
    {
      id: 3,
      title: 'Child Modelling Experience',
      text: 'The professional studio environment plays a pivotal role in real child Modelling shoots.',
      imgUrl: exp3Img,
    },
  ],
};

export const serviceChildWhy = {
  title: 'Why Be a Child Model?',
  imgUrl: whyImg,
  list: [
    {
      id: 1,
      title: 'building self-confidence',
      imgUrl: buildingImg,
    },
    {
      id: 2,
      title: 'responsibility',
      imgUrl: responsImg,
    },
    {
      id: 3,
      title: 'work ethic',
      imgUrl: ethicImg,
    },
  ],
};
