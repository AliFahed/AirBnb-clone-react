import ZaferesUsaImage from './images/zaferes-usa.png';
import WeddingPhotography from './images/wedding-photography.png';
import MountainBike from './images/mountain-bike.png';

export default [
  {
    id: 1,
    img: ZaferesUsaImage,
    stats: {
      rating: '5.0',
      reviewCount: 6,
    },
    country: 'USA',
    title: 'Life Lessons with Kaite Zaferes',
    price: 136,
    cardStatus: 'Sold out',
  },
  {
    id: 2,
    img: WeddingPhotography,
    stats: {
      rating: '5.0',
      reviewCount: 30,
    },
    country: 'USA',
    title: 'Learn wedding photography',
    price: 125,
    cardStatus: 'available',
  },
  {
    id: 3,
    img: MountainBike,
    stats: {
      rating: '4.8',
      reviewCount: 2,
    },
    country: 'USA',
    title: 'Group Mountain Biking',
    price: 50,
    cardStatus: 'Sold out',
  },
];
