document.addEventListener('DOMContentLoaded', () => {
    const packagingButtons = document.querySelectorAll('.btn--packaging');
    const skuEl = document.querySelector('.product__sku');
    const newPriceEl = document.querySelector('.product__new-price');
    const oldPriceEl = document.querySelector('.product__old-price');

    const formatPrice = (price) => {
        return Number(price)
            .toFixed(2)            
            .replace('.', ',')     
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' '); 
    };

    const updateProduct = (button) => {
        const sku = button.dataset.sku;
        const newPrice = button.dataset.newPrice;
        const oldPrice = button.dataset.oldPrice;
        
        skuEl.innerHTML = `<span>арт.</span>${sku}`;
        newPriceEl.innerHTML = `${formatPrice(newPrice)} <span>₽</span>`;
        oldPriceEl.innerHTML = `${formatPrice(oldPrice)} <span>₽</span>`;
    };

    packagingButtons.forEach((button) => {
        button.addEventListener('click', () => {
            packagingButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');
            updateProduct(button);
        });
    });
});