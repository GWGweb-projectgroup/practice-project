/**
 * product access
 */
// is this correct? or use Full_Sku:
// function getFullSku() {
//   fullSku = pSku + ' ' + cSku + '.0 ';
// }

// function getDescription() {
//   if (description1 != "") {
//     console.log(this);
//   }
// }

/**
 *
 */


new Vue({
  el: '#app',
  data: {
    pSku: Parent_Sku,
    cSku: Child_Sku,
    fSku: Full_Sku,
    image: Detail_Image_Name,
    thumb: Thumbnail_Image_Name,
    new: New_Product,
    cat: Product_Category,
    pName: Product_Name,
    pOptions: Available_Options,
    weight: Weight_lb,
    price: MSRP,
    minPrice: MAP,
    cost: Wholesale_Price,
    shipping: [
      Box_Width_in,
      Box_Length_in,
      Box_Height_in,
      Number_of_Boxes,
      Ships_in_Own_Box,
      Country_Of_Origin
    ],
    details: [
      Description_1,
      Description_2,
      Description_3,
      Description_4,
      Description_5,
      Description_6,
      Description_7,
      Description_8,
      Description_9,
      Description_10,
      Description_11,
      Description_12,
      Description_13,
      Description_14,
      Description_15,
      Description_16
    ]
  }
});



// nav

// promo

// featured categories

// banner ad slider - affilliates

// top Picks

// Popular

// top selling products

// category listings



/*,
function(data) {
  /**
   * output all data to table


  var html = "<table border='1|1'>";
  html += "<tr>";
  html += "<td><strong>P Sku</strong></td>";
  html += "<td><strong>C Sku</strong></td>";
  //html += "<td><strong>image</strong></td>";
  html += "<td><strong>thumb</strong></td>";
  html += "<td><strong>cat</strong></td>";
  html += "<td><strong>pOptions</strong></td>";
  html += "<td><strong>price</strong></td>";
  html += "</tr>";

  for (var i = 0; i < data.length; i++) {
    html += "<tr>";
    html += "<td>" + data[i].pSku + "</td>";
    html += "<td>" + data[i].cSku + "</td>";
    //
    html += '<td><img src="thumb/' + data[i].thumb + '"></td>';
    html += "<td>" + data[i].cat + "</td>";
    html += "<td>" + data[i].pOptions + "</td>";
    html += "<td>" + data[i].price + "</td>";
  }
  html += "</table>";

  document.getElementById("demo").innerHTML = html;
} */
