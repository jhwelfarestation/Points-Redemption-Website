document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productSections = document.querySelectorAll('.product-section');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按鈕的 active 類
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 為當前點擊的按鈕添加 active 類
            button.classList.add('active');

            // 隱藏所有商品區塊
            productSections.forEach(section => section.classList.remove('active'));
            
            // 顯示對應的商品區塊
            const category = button.getAttribute('data-category');
            document.getElementById(category).classList.add('active');
        });
    });
}); 