let shopProducts = [
    {
        name: "Banana",
        quantity: 2,
        inCart: false,
        price: 20
    },
    {
        name: "Orange",
        quantity: 2,
        inCart: true,
        price: 30
    },
    {
        name: "Joghurt",
        quantity: 2,
        inCart: false,
        price: 40
    },
    {
        name: "Bread",
        quantity: 1,
        inCart: true,
        price: 20
    },
    {
        name: "Tomato",
        quantity: 2,
        inCart: false,
        price: 30
    }
]

for (let i = 0; i < shopProducts.length; i++) {
    // створення поля sum, яке містить загальну суму товару
    shopProducts[i].sum = shopProducts[i].price * shopProducts[i].quantity;
}
console.log(shopProducts)

let getSort = function () {
    return shopProducts.sort((a, b) => (b.inCart - a.inCart));
}

getSort()

console.log("Sorted array:");
console.log(shopProducts);

let buyProduct = prompt("Ввеіть назву продукту,який потрібно відзначити,як придбаний")
if (buyProduct) {
    buyFunction(buyProduct) 
}

function buyFunction(buyProduct) {
    let neededProduct = shopProducts.find(el => el.name === buyProduct);
    if (neededProduct) {
        neededProduct.inCart = true;
        console.log(shopProducts);        
    }
    }

let newProductName = prompt("Enter the name of the product to add"),
    newProductQuantity = +prompt("Enter the amount of the product to add");


// перевіряємо чи ввели, якщо - так, викликаємо функцію
if(newProductName && newProductQuantity) {
    addNewroduct(newProductName)
}

function addNewroduct(product) {
    let neededProduct = shopProducts.find(el => el.name === product);

    if(neededProduct) {
        // якщо введена назва вже є - змінюємо кількість
        neededProduct.quantity += newProductQuantity
        //neededProduct.quantity = neededProduct.quantity + newProductQuantity
        // перераховуємо поле sum
        let sum = neededProduct.price * neededProduct.quantity;
        neededProduct.sum = sum
    } else {
        // якщо введеної назви немає - питаємо ціну, рахуємо значення поля sum і додаємо
        let newProductPrice = +prompt("Enter the price of the product to add");

        if(newProductPrice) {
            let sum = newProductPrice * newProductQuantity;

            shopProducts.push({
                name: newProductName,
                quantity: newProductQuantity,
                inCart: true,
                //Бо це ф-ція додавання
                price: newProductPrice,
                sum: sum
            })
        }
    }


    console.log('Array afer adding product:')
    console.log(shopProducts)
}

let productName = prompt("Enter the name of the product to remove")
if(productName) {
    // якщо користувач щось ввів - викликаємо функцію для видалення
    deleteProduct(productName)
}

function deleteProduct(productName) {
    // шукаємо продукт в масиві, якщо є - видаляємо, якщо немає - виводимо повідомлення, що такого товару немає
    // у завданні пише, що потрібно сформувати новий масив, де не буде нашого товару, тому використовуємо метод filter
    // за новий масив відповідає змінна newShopProducts, за замовчуванням присвоюємо їй значення shopProducts, щоб коли не буде знайдено 
    // продукту від користувача - було виведено всі покупки

    let neededProduct = shopProducts.find(el => el.name === productName),
        newShopProducts = shopProducts;
    if(neededProduct) {
        newShopProducts = shopProducts.filter(el => el.name !== productName)
    } else {
        console.log("No such product!")
    }

    console.log("New array:")
    console.log(newShopProducts)
}

totalPrice(shopProducts)

function totalPrice(shopProducts) {
    let sum = 0;

    for (let i = 0; i < shopProducts.length; i++) {
        // додаємо поле де зберігається загальна сума кожного продукта
        sum += shopProducts[i].sum;
    }
    console.log("Total sum:")
    console.log(sum);
}

unBought(shopProducts)
function unBought(shopProducts) {
    let sum = 0;

    for (let i = 0; i < shopProducts.length; i++) {
        if (!shopProducts[i].inCart) {
           sum += shopProducts[i].sum; 
        }
    }
    console.log("Total unbought sum:")
    console.log(sum);
}

let bigger = confirm("Натисніть ок,якщо від більшого до меншого")

let sortSum = function () {
    if (bigger) {
      console.log(shopProducts.sort((a, b) => (b.sum - a.sum)));  
    }
    else {
      console.log(shopProducts.sort((a, b) => (a.sum - b.sum)));
    }    
}

sortSum()

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






