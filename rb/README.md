# TODO

## Categories

![category Placeholders](2-16.png)

<!-- ![Feb 6](2-6.png) -->

## Product

![Jan 24](1-24.png)

## Features

- [ ] Promotions (cycle)
- [ ] Discount Code
- [ ] Search
- [ ] Product Listing
- [ ] Reviews
  - [ ] Star Rating
  - [ ] Review text

## Images ( non-stock Production Ready )

  - [ ] banners
    - [ ] Holiday Sales
  - [ ] Categories (use search in Product_Category)
    - [ ] Pool Cues 
    - [ ] Cue Cases
    - [ ] Cue Accessories
    - [ ] Table Accessories
    - [ ] Training Aids
    - [ ] Gameroom
    - [ ] Darts
    - [ ] Clothing
 
---

```
products.findIndex(x => x.Parent_Sku === 'ZZSP'); // 3896

findProductByParentSku (product) {
    console.log(this);
    if(this.Parent_Sku === this[0]) {
    }
}

var task = tasks.find(findProductByParentSku, ZZSP);
console.log(JSON.stringify(product));
```

## Navigation

  - [ ] Home
    - [ ] Category
      - [ ] Pool Cues

```
cues = [
    5280,
    Action,
    Athena,
    Blade,
    Cuetec,
    Dufferin,
    Elite,
    Griffin,
    Harley Davidson,
    Joss,
    Lucasi,
    Mayhem,
    McDermott,
    McFarland,
    Meucci,
    Mezz,
    Outlaw,
    Peradon,
    Riley,
    Schon,
    Scorpion,
    Stealth,
    Tiger,
    Trouble Shooter Cues,
    Valley (one-piece cues),
    Viking,
    Voodoo,
  ]
```

- [ ] Brand
  - [ ] Product
    - [ ] similar
    - [ ] accessories
    - [ ] bundles
- [ ] Category

## Search Filters

- [ ] byPrice
- [ ] byBrand
- [ ] byDiscount
- [ ] byRewards

---

