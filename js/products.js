// In Stock
function inStock() {
  if( inventory > 0) {
  return "In Stock";
  } else {
    return "Out of Stock";
  }
}

/**
 *  Filling in product.html
 */

function singleProduct() {
  
  // Setup
  var productTitle = $('.product-title');
  var productImage = $('.product-image');
  var productPrice = $('.price');
  // TODO: var productRating = $('.rating');
  var productDescription = $('.description');
  var productFeatures = $('.product-features');
  var productSpecs = $('.product-specs');
  var similarProducts;

  // TODO: Pull product info by id

}

 /**
 * need to come back to link for Features to be included in table 
 */
var products = [
  // Computers
  {
    "id": "1",
    "name": "Apple 21.5\" iMac, 2.3GHz Dual-Core Intel Core i5, 8GB RAM, 1TB HDD (Mid 2017)",
    "price": 1049.00,
    "inventory": 5,
    "rating": 3.8,
    "image": "../img/products/Computer-Pc-Monitor-Imac-Screen-Personal-Computer-2493287.png",
    "description": "Description goes here",
    // dateAdded is useful for listing New Products
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
  },
  // Audio
  {
    "id": "4",
    "name": "BT Headphones with LED flashing light",
    "price": 29.99,
    "inventory": 20,
    "rating": 3.2,
    "image": "../img/products/audio/a12b50ml8.jpg",
    "description": "Cut the cord with this Bluetooth® stereo headset! With up to six hours of use on a full charge, you can study, clean, or game without being restricted by the cord connected to your device. Featuring a built-in microphone and micro SD card, you can have all the benefits of hands-free calling as well as not be dependent on your phone or other Bluetooth® enabled device for your music.",
    "dateAdded": 201803231118
  },
  {
    "id": "5",
    "name": "QFX Stereo Headphones with Microphone - Black",
    "price": 12.99,
    "inventory": 25,
    "rating": 3.2,
    "image": "../img/products/audio/h-402m-blk.jpg",
    "description": "The H-402M headset folds up for easy transport and storage anywhere you want. Designed with cushioned, pressure-relieving ear pads that rest comfortably on the ears--versus completely covering the ears. They are extremely comfortable for long periods of use",
    "dateAdded": 201803231136
  },
  {
    "id": "6",
    "name": "beFree Sound 5.1 Channel Surround Sound Bluetooth Speaker System- Yellow",
    "price": 195.99,
    "inventory": 5,
    "rating": 3.6,
    "image": "../img/products/audio/h7902.jpg",
    "description": "beFree Sound Bluetooth Speaker System provides clear sound from all satellite speakers and amplifier from up to 30 feet away. You can sync any Bluetooth enabled device; your phone, tablet, media player or even your computer. For other non-Bluetooth devices, there is a USB and SD input ports. Additional conveniences include a remote control. You've got full power to fill your room with big, balanced sound. All the speakers and the amplifier are magnetically shielded to provide protection against image distortion from external electronic sources. Compatible with all smartphones and all mp3 players. The system comes complete, with all necessary cables.",
    "dateAdded": 201803231142
  },
  {
    "id": "7",
    "name": "beFree Sound 5.1 Channel Surround Sound Bluetooth Speaker System",
    "price": 249.99,
    "inventory": 5,
    "rating": 3.6,
    "image": "../img/products/audio/bfs-900.jpg",
    "description": "The beFree Sound speaker system with Bluetooth wireless technology features 5 built-in high-powered speakers and easily connects to your Smartphone or other Bluetooth enabled audio devices. Accessories and features included: Remote Control, Bluetooth technology, FM radio, USB and SD inputs.",
    "dateAdded": 201803231155
  },
  {
    "id": "8",
    "name": "beFree Sound 2.1 Channel Surround Sound Bluetooth Speaker System in Red",
    "price": 189.99,
    "inventory": 5,
    "rating": 3.6,
    "image": "../img/products/audio/bfs-99x.jpg",
    "description": "Enjoy the ultimate home theater experience with beFree Sound's 2.1 Channel Surround Sound Bluetooth Speaker System. This speaker system is designed with sophistication, featuring a sleek look and smooth sound. With Bluetooth, USB, SD and FM radio capability, the system offers the best possible listening options for your enjoyment.",
    "dateAdded": 201803231155
  }
];



/*
// Id for cart to pull from and default values
var cart = {
  "1": 2,
  "2": 5,
  "3": 5
};


*/
