var countProduct = 1
const buttonDecrement = document.querySelector('.buttonDecrement')
const priceElement = document.querySelector('.priceText')
var inputValue = document.querySelector('.inputNumberProduct')
const priceOldElement = document.querySelector('.priceOldText')

// defaultData
const dataProduct = {
    price: '799',
    priceOld: '1599',
    quantity: 1,
}

// data viewW
priceElement.textContent = `${dataProduct.price}, -`
priceOldElement.textContent = `${dataProduct.priceOld}, -`

// incrementing
const counterIncrement = () => {
    countProduct++
    const inputValue = document.querySelector('.inputNumberProduct')
    inputValue.value = countProduct
    dataProduct.quantity = countProduct
}

// decrementing
const counterDecrement = () => {
    const inputValue = document.querySelector('.inputNumberProduct')
    if (Number(inputValue.value) === 1) {
        inputValue.value = 1
    } else {
        countProduct--
        inputValue.value = countProduct
        dataProduct.quantity = countProduct
    }
}


// adding cart
const addToCard = () => {
    let valueTotal = dataProduct.quantity * dataProduct.price
    dataProduct.valueTotal = valueTotal
    console.log(dataProduct)

    // added to card message
}
