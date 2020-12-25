const initialState = {

  subpages: [
    {
      id: 'ubrania',
      name: 'Ubrania',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'biwak',
      name: 'Biwak',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'akcesoria',
      name: 'Akcesoria',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'nasza drużyna',
      name: 'Nasza drużyna',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'kontakt',
      name: 'Kontakt',
      image: '',
    },
  ],

  equipment: [
    {
      id: 'equipment-1',
      name: 'Śpiwór',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '299.99 zł',
      image: 'https://sklep.bushcraftowy.pl/1645-large_default/kurtka-marmot-precip-eco-jacket-black.jpg',
    },
    {
      id: 'equipment-2',
      name: 'Karimata',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '124.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'equipment-3',
      name: 'Ręcznik',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      price: '349.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'equipment-4',
      name: 'Mata samopompująca',
      information: 'Lorem ipsum dolor sit amet.',
      price: '179.90 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'equipment-5',
      name: 'Płachta biwakowa',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '199.90 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'equipment-6',
      name: 'Tarp',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '99.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'equipment-7',
      name: 'Manierka 1L',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '39.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'equipment-8',
      name: 'Zestaw naczyń',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '149.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'equipment-9',
      name: 'Namiot',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '549.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'equipment-10',
      name: 'Hamak',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '139.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
  ],

  accessories: [
    {
      id: 'accessories-1',
      name: 'Kompas',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '99.99 zł',
      image: 'https://sklep.bushcraftowy.pl/1645-large_default/kurtka-marmot-precip-eco-jacket-black.jpg',
    },
    {
      id: 'accessories-2',
      name: 'Notes wodoodporny',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '24.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'accessories-3',
      name: 'Rozpałka',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      price: '9.90 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'accessories-4',
      name: 'Latarka',
      information: 'Lorem ipsum dolor sit amet.',
      price: '179.90 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'accessories-5',
      name: 'Latarka czołowa',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '199.90 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'accessories-6',
      name: 'Krzesiwo',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '29.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'accessories-7',
      name: 'Multitool',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '239.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'accessories-8',
      name: 'Kije trekingowe',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '249.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'accessories-9',
      name: 'Linki do namiotu',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '49.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'accessories-10',
      name: 'Taśma do klejenia',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '139.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
  ],

  clothes: [
    {
      id: 'cloth-1',
      name: 'Kurtka przeciwdeszczowa',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      sex: 'damska',
      price: '249.99 zł',
      image: 'https://sklep.bushcraftowy.pl/1645-large_default/kurtka-marmot-precip-eco-jacket-black.jpg',
    },
    {
      id: 'cloth-2',
      name: 'Kurtka przeciwdeszczowa',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      sex: 'męska',
      price: '249.99 zł',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'cloth-3',
      name: 'Kurtka zimowa',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      price: '349.99 zł',
      sex: 'damska',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'cloth-4',
      name: 'Kurtka zimowa',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      price: '349.99 zł',
      sex: 'męska',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'cloth-5',
      name: 'Czapka zimowa',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '79.99 zł',
      sex: '',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'cloth-6',
      name: 'Rękawiczki',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '99.99 zł',
      sex: '',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'cloth-7',
      name: 'Buty zimowe',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '549.99 zł',
      sex: 'damskie',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'cloth-8',
      name: 'Buty zimowe',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '549.99 zł',
      sex: 'męskie',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'cloth-9',
      name: 'Spodnie trekingowe',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      price: '249.99 zł',
      sex: 'męskie',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'cloth-10',
      name: 'Spodnie trekingowe',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      price: '249.99 zł',
      sex: 'damskie',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
  ],

  contact: [
    {
      id: 'contact-1',
      name: 'Jan Kowalski',
      profession: 'Przewodnik górski',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'contact-2',
      name: 'Franciszek Zawadzki',
      profession: 'Podróżnik & pisarz',
      image: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
  ],

  cart: {
    cartNumber: 0,
    cartCost: 0,

  },

};

export default initialState;
