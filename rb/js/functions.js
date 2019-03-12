var product = function (Full_Sku, Parent_Sku, Child_Sku, Detail_Image_Name, Thumbnail_Image_Name, New_Product, Product_Category, Product_Name, Available_Options, Weight_lb, MSRP, MAP, MAP_, Wholesale_Price, Box_Width_in, Box_Length_in, Box_Height_in, Number_of_Boxes, Ships_in_Own_Box, Country_Of_Origin, Description_1, Description_2, Description_3, Description_4, Description_5, Description_6, Description_7, Description_8, Description_9, Description_10, Description_11, Description_12, Description_13, Description_14, Description_15, Description_16) {
  this.Full_Sku = fSku,
  this.Parent_Sku = pSku,
  this.Child_Sku = cSku,
  this.Detail_Image_Name = image,
  this.Thumbnail_Image_Name = thumb,
  this.New_Product = isNew,
  this.Product_Category = category,
  this.Product_Name = pName,
  this.Available_Options = options,
  this.Weight_lb = weight,
  this.MSRP = retail,
  this.MAP = minPrice,
  this.MAP_ = discount,
  this. Wholesale_Price = cost,
  // shipping     (proper assignment? use seperate function?)
  this.Box_Width_in = width,
  this.Box_Length_in = length,
  this.Box_Height_in = height,
  this.Number_of_Boxes = numBoxes,
  this.Ships_in_Own_Box = ownBox,
  this.Country_Of_Origin = country,
  // details     (proper assignment? use seperate function?)
  this.Description_1 = detail[0],
  this.Description_2 = detail[1],
  this.Description_3 = detail[2],
  this.Description_4 = detail[3],
  this.Description_5 = detail[4],
  this.Description_6 = detail[5],
  this.Description_7 = detail[6],
  this.Description_8 = detail[7],
  this.Description_9 = detail[8],
  this.Description_10 = detail[9],
  this.Description_11 = detail[10],
  this.Description_12 = detail[11],
  this.Description_13 = detail[12],
  this.Description_14 = detail[13],
  this.Description_15 = detail[14],
  this.Description_16 = detail[15]
};



// product data
var obj = JSON.parse(json);

details.innerHTML += JSON.stringify(json) + '<br>';
var json = require('./data/data.json'); 


var details = document.getElementById('details');




obj.forEach(function(item, i){
  for(p in item){
      details.innerHTML += p + ': ' + item[p] + '<br>';
  }
  details.innerHTML += '<br>';
});

for(p in obj){
    details.innerHTML += obj[p] + '<br>';
}
// // shipping calculation
// var shipping = function(shipRate, width, length, height, numBoxes, /*ownBox,*/ country) {
//     var shipPrice = width * length * height * shipRate * numBoxes;
//     shipCost.innerHTML += '<p>shipping: $' + shipPrice + '</p>';
//     shipCost.innerHTML += '<p><span>Made in ' + country + '</span></p>';
// }
// var shipCost = document.getElementById('shipping-cost');

// var output2 = document.getElementById('output2');


// console.log(str.toLowerCase());


// categories

cueBrands = [
    '5280',
    'Action',
    'Athena',
    'Blade',
    'Cuetec',
    'Dufferin',
    'Elite',
    'Griffin',
    'Harley Davidson',
    'Joss',
    'Lucasi',
    'Mayhem',
    'McDermott',
    'McFarland',
    'Meucci',
    'Mezz',
    'Outlaw',
    'Peradon',
    'Riley',
    'Schon',
    'Scorpion',
    'Stealth',
    'Tiger',
    'Trouble Shooter Cues',
    'Valley',
    'Viking',
    'Voodoo'
];
