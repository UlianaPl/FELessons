let shopProducts = [
  {
    name: "Banana",
    quantity: 2,
    inCart: 'No',
    price: 20
  },
  {
    name: "Orange",
    quantity: 2,
    inCart: 'Yes',
    price: 30
  },
  {
    name: "Joghurt",
    quantity: 2,
    inCart: 'No',
    price: 40
  },
  {
    name: "Bread",
    quantity: 1,
    inCart: 'Yes',
    price: 20
  },
  {
    name: "Tomato",
    quantity: 2,
    inCart: 'No',
    price: 30
  },
]

shopProducts.sort(function (x, y) {
  return x.inCart, y.inCart
  
}
)
console.log(shopProducts)

/*shopProducts.forEach(myFunction)

function myFunction() {
  alert("Bought")
}*/

shopProducts.splice(0, 1) 

shopProducts.push("Kiwi")

function totalPrice(shopProducts) {
let sum = 0;
for(var i = 0; i < shopProducts.length; i++){
    sum += shopProducts[i];
    }
console.log(sum);
}


/*function shopItem(name, amount, inCart, price) {
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
arraySum(arr);*/






