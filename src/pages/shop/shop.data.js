const SHOP_DATA = [
    {
      id: 1,
      title: 'Mexican',
      routeName: 'mexican',
      items: [
        {
          id: 1,
          name: 'burrito',
          imageUrl: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          price: 25
        },
        {
          id: 2,
          name: 'tacos',
          imageUrl: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
          price: 18
        },
        {
          id: 3,
          name: 'enchiladas',
          imageUrl: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=645&q=80',
          price: 35
        },
        {
          id: 4,
          name: 'nachos',
          imageUrl: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
          price: 25
        },
        {
          id: 5,
          name: 'tamales',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18
        },
        {
          id: 6,
          name: 'menudo',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14
        },
        {
          id: 7,
          name: 'beans',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 8,
          name: 'rice',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'chorroz',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Jamaican',
      routeName: 'jamaican',
      items: [
        {
          id: 10,
          name: 'oxtails',
          imageUrl: 'https://66.media.tumblr.com/278989535d0eadadc00f04adc85f1741/tumblr_oo47l2EdUg1rwy6s8o1_400.jpg',
          price: 220
        },
        {
          id: 11,
          name: 'chicken curry',
          imageUrl: 'http://africanbites.com/wp-content/uploads/2016/01/IMG_9605.jpg',
          price: 280
        },
        {
          id: 14,
          name: 'jamaican patty',
          imageUrl: 'https://whiskitrealgud.com/wp-content/uploads/2015/11/Spicy-Jamaican-Beef-Patties-2.jpg',
          price: 160
        },
       
        {
          id: 13,
          name: 'jerk chicken',
          imageUrl: 'https://www.africanbites.com/wp-content/uploads/2013/03/IMG_6264.jpg',
          price: 160
        },
        {
          id: 12,
          name: 'lamb curry',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 110
        },
      
        {
          id: 15,
          name: 'roti',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        }
      ]
    },
    {
      id: 3,
      title: 'Chinese',
      routeName: 'chinese',
      items: [
        {
          id: 18,
          name: 'Beef and Brocc',
          imageUrl: 'https://steamykitchen.com/wp-content/uploads/2012/08/chinese-broccoli-beef-recipe-9413.jpg',
          price: 125
        },
        {
          id: 19,
          name: 'Orange Chicken',
          imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
          price: 90
        },
        {
          id: 20,
          name: 'Shrimp Lo Mein',
          imageUrl: 'https://images.unsplash.com/flagged/photo-1556742524-750f2ab99913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80',
          price: 90
        },
        {
          id: 21,
          name: 'Fried Rice',
          imageUrl: 'https://images.unsplash.com/photo-1562967915-6ba607ff7d05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
          price: 165
        },
        {
          id: 22,
          name: 'Happy Family',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Italian',
      routeName: 'italian',
      items: [
        {
          id: 23,
          name: 'Pizza',
          imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80',
          price: 25
        },
        {
          id: 24,
          name: 'Spaghetti',
          imageUrl: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
          price: 20
        },
        {
          id: 25,
          name: 'Alfredo',
          imageUrl: 'https://tastesbetterfromscratch.com/wp-content/uploads/2018/07/Instant-Pot-Fettucine-Alfredo-9.jpg',
          price: 80
        },
        {
          id: 26,
          name: 'Crusty Parm',
          imageUrl: 'https://www.centercutcook.com/wp-content/uploads/2013/08/parmesan-crusted-chicken-6.jpg',
          price: 80
        },
        {
          id: 27,
          name: 'Eggplant Parm',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 28,
          name: 'Lasagna',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'Ravioli',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'BBQ',
      routeName: 'BBQ',
      items: [
        {
          id: 30,
          name: 'BBQ Beef Ribs',
          imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1875&q=80',
          price: 325
        },
        {
          id: 31,
          name: 'Grilled Chicken',
          imageUrl: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80',
          price: 20
        },
        {
          id: 32,
          name: 'Brisket',
          imageUrl: 'https://images.unsplash.com/photo-1523986490752-c28064f26be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          price: 25
        },
        {
          id: 33,
          name: 'Smoked Burger',
          imageUrl: 'https://images.unsplash.com/photo-1549892898-79ac97b31fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          price: 25
        },
        {
          id: 34,
          name: 'Grilled Burger',
          imageUrl: 'https://images.unsplash.com/photo-1561807762-8e8b37407e49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80',
          price: 40
        },
        {
          id: 35,
          name: 'Grilled Corn',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ];
  
  export default SHOP_DATA;
  