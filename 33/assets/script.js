let shopList = [
  new Item('Banana', 2, 'No', 20),
  new Item('Orange', 4, 'Yes', 30),
  new Item('Bread', 1, 'Yes', 40),
  new Item('Joghurt', 2, 'Yes', 50),
]

function shopItem(name, amount, inCart, price) {
  {
    this.name = name;
    this.amount = amount;
    this.inCart = inCart;
    this.price = price;
  }
}

let sortItem(a) => {
    if (a.inCart == 'Not') return -1; 
    if (a.inCart == 'Yes') return 1; 
  }

  let showItem(a) => {
    return a.name;
}
  
shopList.sort(shopItem.sortItem);
console.log(shopList.map(shopItem.showItem));
let newItem = new Item('Dessert', 2, 'Not');

shopList.push(newItem);
shopList.sort(shopItem.sortItem);
console.log(shopList.map(shopItem.showItem));


function totalPrice(shopList){
let sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
}
arraySum(arr);






