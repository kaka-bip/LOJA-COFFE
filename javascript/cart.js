
    function loadCart() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let subtotal = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>R$ ${item.price.toFixed(2)}</p>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
            subtotal += item.price;
        });

        document.getElementById('subtotal').innerText = `R$ ${subtotal.toFixed(2)}`;
        document.getElementById('cartCount').innerText = cart.length;
    }

    document.addEventListener('DOMContentLoaded', loadCart);
