document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productSections = document.querySelectorAll('.product-section');
    let inventory = {};

    // 讀取庫存檔案
    fetch('inventory.txt')
        .then(response => response.text())
        .then(data => {
            try {
                inventory = JSON.parse(data);
                updateProductDisplay();
            } catch (error) {
                console.error('解析庫存檔案時發生錯誤:', error);
            }
        })
        .catch(error => {
            console.error('讀取庫存檔案時發生錯誤:', error);
        });

    // 更新商品顯示
    function updateProductDisplay() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent;
            const category = card.closest('.product-section').id;
            const points = card.querySelector('.points');
            
            if (inventory[category] && inventory[category][productName] !== undefined) {
                const stock = inventory[category][productName];
                if (stock <= 0) {
                    points.textContent = '暫無庫存';
                    points.classList.add('out-of-stock');
                } else {
                    points.textContent = `所需點數：${points.textContent.split('：')[1]}`;
                    points.classList.remove('out-of-stock');
                }
            }
        });
    }

    // 處理分類切換
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            productSections.forEach(section => section.classList.remove('active'));
            
            const category = button.getAttribute('data-category');
            document.getElementById(category).classList.add('active');
        });
    });
}); 