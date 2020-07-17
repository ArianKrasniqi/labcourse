/* First using static data */

const INITIAL_STATE = {
  sections: [
    {
      title: 'fruits',
      imageUrl: 'images/fruits.jpg', // local file in public/images/
      id: 1,
      linkUrl: 'shop/fruits'
    },
    {
      title: 'sodas',
      imageUrl: 'images/sodas.jpg', // local file in public/images/
      id: 2,
      linkUrl: 'shop/sodas'
    },
    {
      title: 'meats',
      imageUrl: 'images/meats.jpg', // local file in public/images/
      id: 3,
      linkUrl: 'shop/meats'
    },
    {
      title: 'cheese',
      imageUrl: 'images/cheese.jpg', // local file in public/images/
      id: 4,
      linkUrl: 'shop/cheese'
    },
    {
      title: 'vegetables',
      imageUrl: 'images/vegetables.jpg', // local file in public/images/
      id: 5,
      linkUrl: 'shop/vegetables'
    },
    {
      title: 'sweets',
      imageUrl: 'images/sweets.jpg', // local file in public/images/
      id: 5,
      linkUrl: 'shop/sweets'
    },
    {
      title: 'bakery',
      imageUrl: 'images/bakery.jpg', // local file in public/images/
      id: 5,
      linkUrl: 'shop/bakery'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer;