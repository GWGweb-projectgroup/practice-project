var products = [
  {
    "id": "1",
    "name": "Apple 21.5\" iMac, 2.3GHz Dual-Core Intel Core i5, 8GB RAM, 1TB HDD (Mid 2017)",
    "price": 1049.00,
    "inventory": 5,
    "rating": 3.8,
    "image": "../img/products/Computer-Pc-Monitor-Imac-Screen-Personal-Computer-2493287.png",
    "summary": "short description",
    "description": "Description goes here",
    // dateAdded will be useful for listing New Products
    "dateAdded": 201803220930, // yy/mm/dd/24hr-time
  },
  {
    "id": "2",
    "name": "Dell XPS 14Z X14z-2310ELS 14-Inch Laptop",
    "price": 39.95,
    "inventory": 0,
    "rating": 3.6,
    "image": "../img/products/laptop_03.png",
    "description": "Description goes here",
    "dateAdded": 201803220931
  },
  {
    "id": "3",
    "name": "HP Pavilion DV 2000",
    "price": 499.00,
    "inventory": 1,
    "rating": 3.2,
    "image": "../img/products/laptop_01.png",
    "description": "Description goes here",
    "dateAdded": 201803220932
  }
];

// In Stock
function inStock() {
  if( inventory > 0) {
  return "In Stock";
  } else {
    return "Out of Stock";
  }
}

/*
// Id for cart to pull from and default values
var cart = {
  "1": 2,
  "2": 5,
  "3": 5
};


*/
