// var app = new Vue({
//   el: '#product',
//   data: {
//     name: 'McDermott M16',
//     pSku: 'CX04'
//   }
// });

// var lookup = {};
// for (var i = 0, len = array.length; i < len; i++) {
//   lookup[array[i].Parent_Sku] = array[i];
// }
//  ... now you can use lookup[]...

var app = new Vue({
	el: "#app",
	data: {
		/*product: "Socks",
		description: "A pair of warm, fuzzy socks",
		image: "./img/vmSocks-green.png",
		url: "./img/vmSocks-blue.png",
		inStock: true,
		inventory: 100,
		onSale: true,
		details: ["80% cotton", "20% polyester", "gender-neutral"],
		variants: [
			{
				variantId: 2234,
				variantColor: "green",
				variantImage: "./img/vmSocks-green.png"
			},
			{
				variantId: 2235,
				variantColor: "blue",
				variantImage: "./img/vmSocks-blue.png"
			}
		],
		sizes: ["small", "medium", "large"],*/
		products: [
			{
				Full_Sku: "15-4101 14 ",
				Parent_Sku: "15-4101",
				Child_Sku: 14,
				Detail_Image_Name: "15-4101.JPG",
				Thumbnail_Image_Name: "15-4101.JPG",
				New_Product: "",
				Product_Category: "Darts",
				Product_Name: "Bull Seeker Dart Steel Tip ",
				Available_Options: "14 gram",
				Weight_lb: 0.15,
				MSRP: "$4.95",
				MAP: "",
				MAP_percent: "",
				Wholesale_Price: "$2.75",
				Box_Width_in: 0,
				Box_Length_in: 0,
				Box_Height_in: 0,
				Number_of_Boxes: 1,
				Ships_in_Own_Box: "No",
				Country_Of_Origin: "Made in China ",
				Description_1: "Bull Seeker Darts",
				Description_2: "Brass barrels",
				Description_3: "Nylon shaft/Flight Combo",
				Description_4: "Steel Tips",
				Description_5: "14 gram only",
				Description_6: "",
				Description_7: "",
				Description_8: "",
				Description_9: "",
				Description_10: "",
				Description_11: "",
				Description_12: "",
				Description_13: "",
				Description_14: "",
				Description_15: "",
				Description_16: ""
			}, {
				Full_Sku: "15-4105 16 ",
				Parent_Sku: "15-4105",
				Child_Sku: 16,
				Detail_Image_Name: "15-4105.JPG",
				Thumbnail_Image_Name: "15-4105.JPG",
				New_Product: "",
				Product_Category: "Darts",
				Product_Name: "Mark-It Dart Soft Tip ",
				Available_Options: "16 gram",
				Weight_lb: 0.1,
				MSRP: "$7.95",
				MAP: "",
				MAP_percent: "",
				Wholesale_Price: "$2.50",
				Box_Width_in: 0,
				Box_Length_in: 0,
				Box_Height_in: 0,
				Number_of_Boxes: 1,
				Ships_in_Own_Box: "No",
				Country_Of_Origin: "Made in China ",
				Description_1: "Mark-It Darts",
				Description_2: "Brass barrels",
				Description_3: "Nylon shafts",
				Description_4: "2ba Nylon tips",
				Description_5: "16 gram only",
				Description_6: "",
				Description_7: "",
				Description_8: "",
				Description_9: "",
				Description_10: "",
				Description_11: "",
				Description_12: "",
				Description_13: "",
				Description_14: "",
				Description_15: "",
				Description_16: ""
			}, {
				Full_Sku: "15-4120 16 ",
				Parent_Sku: "15-4120",
				Child_Sku: 16,
				Detail_Image_Name: "15-4120.JPG",
				Thumbnail_Image_Name: "15-4120.JPG",
				New_Product: "",
				Product_Category: "Darts",
				Product_Name: "Inferno Dart Soft Tip ",
				Available_Options: "16 gram",
				Weight_lb: 0.55,
				MSRP: "$24.95",
				MAP: "",
				MAP_percent: "",
				Wholesale_Price: "$10.50",
				Box_Width_in: 0,
				Box_Length_in: 0,
				Box_Height_in: 0,
				Number_of_Boxes: 1,
				Ships_in_Own_Box: "No",
				Country_Of_Origin: "Made in China ",
				Description_1: "2 Toned Nickel plated barrels",
				Description_2: "Aluminum shafts",
				Description_3: "2ba Nylon tips",
				Description_4: "16 gram",
				Description_5: "Deluxe tri-pack case, includes: out chart, dart tool and 6 flight protectors",
				Description_6: "",
				Description_7: "6 Extra flights and 3 Extra Nylon Shafts",
				Description_8: "20 Extra 2ba Nylon Tips",
				Description_9: "*Flights and shafts may vary*",
				Description_10: "",
				Description_11: "",
				Description_12: "",
				Description_13: "",
				Description_14: "",
				Description_15: "",
				Description_16: ""
			}, {
				Full_Sku: "15-4120 18 ",
				Parent_Sku: "15-4120",
				Child_Sku: 18,
				Detail_Image_Name: "15-4120.JPG",
				Thumbnail_Image_Name: "15-4120.JPG",
				New_Product: "",
				Product_Category: "Darts",
				Product_Name: "Inferno Dart Soft Tip ",
				Available_Options: "18 gram",
				Weight_lb: 0.55,
				MSRP: "$24.95",
				MAP: "",
				MAP_percent: "",
				Wholesale_Price: "$10.50",
				Box_Width_in: 0,
				Box_Length_in: 0,
				Box_Height_in: 0,
				Number_of_Boxes: 1,
				Ships_in_Own_Box: "No",
				Country_Of_Origin: "Made in China ",
				Description_1: "2 Toned Nickel plated barrels",
				Description_2: "Aluminum shafts",
				Description_3: "2ba Nylon tips",
				Description_4: "18 gram",
				Description_5: "Deluxe tri-pack case, includes: out chart, dart tool and 6 flight protectors",
				Description_6: "",
				Description_7: "6 Extra flights and 3 Extra Nylon Shafts",
				Description_8: "20 Extra 2ba Nylon Tips",
				Description_9: "*Flights and shafts may vary*",
				Description_10: "",
				Description_11: "",
				Description_12: "",
				Description_13: "",
				Description_14: "",
				Description_15: "",
				Description_16: ""
			}
		]
	},
	methods: {
		addToCart() {
			this.cart += 1;
		},
		// updateImage(products) {
		// 	image = this.Thumbnail_Image_Name 
		// },
		removeFromCart() {
			this.cart -= 1;
		},
		getSingle(products) {
			for (p in products) {
				fSku = this.Full_Sku,
				pSku = this.Parent_Sku,
				cSku = this.Child_Sku,
				thumb = this.Thumbnail_Image_Name,
				image = this.Detail_Image_Name,
				isNew = this.New_Product,
				category = this.Product_Category,
				name = this.Product_Name,
				options = this.Available_Options,
				// weight = this.Weight_lb,
				retail = this.MSRP,
				minPrice = this.MAP,
				discount = this.MAP_percent,
				cost = this.Wholesale_Price,
				// Shipping
				width = this.Box_Width_in,
				length = this.Box_Length_in,
				height = this.Box_Height_in,
				numBoxes = this.Number_of_Boxes,
				ownBox = this.Ships_in_Own_Box,
				country = this.Country_Of_Origin,
				details = [
					this.Description_1,
					this.Description_2,
					this.Description_3,
					this.Description_4,
					this.Description_5,
					this.Description_6,
					this.Description_7,
					this.Description_8,
					this.Description_9,
					this.Description_10,
					this.Description_11,
					this.Description_12,
					this.Description_13,
					this.Description_14,
					this.Description_15,
					this.Description_16
				]
			}
		}}
	
// 	featured(getSingle) {
// 		for (let i=0; i<this.length; i++){
// 			return {
// 				pSku,
// 				thumb,
// 				retail
// 		}
// 	}
// }
});
