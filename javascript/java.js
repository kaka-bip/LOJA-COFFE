     function toggleMenu() {
        const menuItems = document.getElementById('menuItems');
        if (menuItems.style.display === 'flex') {
            menuItems.style.display = 'none';
        } else {
            menuItems.style.display = 'flex';
        }
    }

    function addToCart(name, price, img) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name, price, img });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        document.getElementById('cartCount').innerText = cart.length;
    }

    document.addEventListener('DOMContentLoaded', updateCartCount);
