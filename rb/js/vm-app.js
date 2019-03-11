/* var app = new Vue({
    el: "#app",
    data: {
      product: "Socks",
      description: "A pair of warm, fuzzy socks",
      image: "./img/vmSocks-green.png",
      url: "./img/vmSocks-blue.png",
      inStock: true,
      inventory: 100,
      onSale: true,
      details: ["80% cotton", "20% polyester", "gender-neutral"],
      variants: [ //plural
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
      sizes: ["small", "medium", "large"],
      cart: 0,
    },
    methods: {
      addToCart() {
        this.cart += 1;
      },
      updateProduct(variantImage) {
        this.image = variantImage;
      },
      removeFromCart() {
        this.cart -= 1;
      }
    }
  });
  */

new Vue({
    el: "#app",
    // used find/replace to format data
    data: { 
        products: [{
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
            MAP_: "",
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
            Description_16: "",
            "": ""
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
            MAP_: "",
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
            Description_16: "",
            "": ""
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
            MAP_: "",
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
            Description_16: "",
            "": ""
        },  {
            Full_Sku: "ZZSP 20.5 ",
            Parent_Sku: "ZZSP",
            Child_Sku: 20.5,
            Detail_Image_Name: "ZZSP.JPG",
            Thumbnail_Image_Name: "ZZSP.JPG",
            New_Product: "",
            Product_Category: "Mezz Cues",
            Product_Name: "Mezz - Sneaky Pete ",
            Available_Options: "20.5 oz ",
            Weight_lb: 1.4,
            MSRP: "$545.00",
            MAP: "$463.25",
            MAP_: "15%",
            Wholesale_Price: "$337.90",
            Box_Width_in: 0,
            Box_Length_in: 0,
            Box_Height_in: 0,
            Number_of_Boxes: 1,
            Ships_in_Own_Box: "No",
            Country_Of_Origin: "Made in Japan ",
            Description_1: "Tip: A 12.8mm Moori Medium tip ",
            Description_2: "Ferrule: Softer X-Ferrule and special Internal Support System",
            Description_3: "Shaft: New WD700 shaft made of Hard rock maple",
            Description_4: "Joint: Mikis united Joint ",
            Description_5: " Pin: 5/16x14 semi quick release",
            Description_6: "Forearm: Hard rock maple with 4 black ebony diamonded points",
            Description_7: "Ring: Black with thin nickel silver ",
            Description_8: " Collar: High impact polished stainless steel",
            Description_9: "Wrap: Laminated Black high impact plastic",
            Description_10: "Sleeve: laminated ebony and birdseye maple",
            Description_11: "Plate: Plate: Black Proprietary plastic stamped with the Mezz logo ",
            Description_12: " Bumper: Black x-rubber rubber with Interchangeable weight bolt system",
            Description_13: "",
            Description_14: "",
            Description_15: "",
            Description_16: ""
        }
    ]
  },
  methods: {
    // WIP: looking up syntax and defining variables 
    getId(id) {
       id === this.Parent_Sku;
    },
    // Cart  
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    }
  }
});
