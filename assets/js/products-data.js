// Dữ liệu sản phẩm
const productsData = {
    strawberry: {
        id: 'strawberry',
        name: 'Strawberry',
        price: 85,
        image: 'assets/img/products/product-img-1.jpg',
        description: 'Fresh and delicious strawberries picked at peak ripeness. Rich in vitamin C and antioxidants. Perfect for desserts, smoothies, or eating fresh.',
        category: 'Fruits, Organic'
    },
    berry: {
        id: 'berry',
        name: 'Berry',
        price: 70,
        image: 'assets/img/products/product-img-2.jpg',
        description: 'Premium quality berries with sweet and tangy flavor. Packed with nutrients and natural goodness. Great for health-conscious consumers.',
        category: 'Fruits, Organic'
    },
    lemon: {
        id: 'lemon',
        name: 'Lemon',
        price: 35,
        image: 'assets/img/products/product-img-3.jpg',
        description: 'Bright and zesty lemons perfect for cooking, beverages, and recipes. Rich in vitamin C and citric acid. Essential for any kitchen.',
        category: 'Fruits, Organic'
    }
};

// Hàm lấy sản phẩm từ ID
function getProductById(id) {
    return productsData[id] || null;
}

// Hàm lấy tất cả sản phẩm
function getAllProducts() {
    return Object.values(productsData);
}
