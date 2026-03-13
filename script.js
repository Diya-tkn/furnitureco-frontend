const items = document.querySelectorAll('.item');
let currentIndex = 0;
let cartCount = 0;

function updateItems() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });

    // Move the latest-items container based on the current index
    const itemsContainer = document.querySelector('.latest-items');
    const itemWidth = items[0].offsetWidth + 22; // Adjust for margins
    itemsContainer.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Loop back to the start
    updateItems();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop back to the end
    updateItems();
});

// Initial setup
updateItems();

function addToCart() {
    cartCount++;

    // Show cart icon with bounce animation
    const cartIcon = document.getElementById('cartIcon');
    cartIcon.classList.add('show');

    // Update or create the cart badge
    let badge = document.getElementById('cartBadge');
    if (!badge) {
        badge = document.createElement('span');
        badge.id = 'cartBadge';
        badge.classList.add('cart-badge');
        cartIcon.parentElement.appendChild(badge);
    }
    badge.textContent = cartCount;

    // Animate badge: pop effect
    badge.classList.remove('pop');
    void badge.offsetWidth; // Trigger reflow to restart animation
    badge.classList.add('pop');

    // Remove icon show class after animation
    setTimeout(() => {
        cartIcon.classList.remove('show');
    }, 600);

    // Show notification
    const notification = document.getElementById('notification');
    notification.textContent = `Item added to cart! (${cartCount} item${cartCount > 1 ? 's' : ''})`;
    notification.classList.add('show');

    // Hide notification after 2 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}
