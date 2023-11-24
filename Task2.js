const chocolates = document.querySelectorAll('.chocolate-item');
const selectedList = document.getElementById('selectedList');
const totalPriceElement = document.getElementById('totalPrice');

let selectedChocolates = [];

function updateTotalPrice() {
    let totalPrice = 0;
    selectedChocolates.forEach(chocolate => {
        totalPrice += chocolate.quantity * chocolate.price;
    });
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function addToSelectedList(chocolate) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${chocolate.name} x <span>${chocolate.quantity}</span> - $${(chocolate.quantity * chocolate.price).toFixed(2)}`;
    selectedList.appendChild(listItem);
}

function updateSelectedChocolates(chocolateName, quantity) {
    const existingChocolate = selectedChocolates.find(chocolate => chocolate.name === chocolateName);

    if (existingChocolate) {
        existingChocolate.quantity = quantity;
    } else {
        const selectedChocolate = {
            name: chocolateName,
            quantity: quantity,
            price: parseFloat(chocolates.find(item => item.dataset.name === chocolateName).dataset.price)
        };
        selectedChocolates.push(selectedChocolate);
    }

    // Clear the list and re-add updated chocolates
    selectedList.innerHTML = '';
    selectedChocolates.forEach(chocolate => {
        addToSelectedList(chocolate);
    });

    updateTotalPrice();
}

chocolates.forEach(chocolate => {
    chocolate.addEventListener('click', () => {
        const chocolateName = chocolate.dataset.name;
        const quantity = parseInt(prompt(`Enter the quantity for ${chocolateName}:`), 10) || 0;

        if (quantity > 8) {
            alert('The quantity cannot exceed 8.');
            return;
        }

        updateSelectedChocolates(chocolateName, quantity);
    });
});
