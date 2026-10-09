const mongoose = require('mongoose');
const Product = require('./models/product');

const sampleProducts = [
  {
    name: 'iPhone 15 Pro Max',
    price: 1199,
    quantity: 15,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop'
  },
  {
    name: 'MacBook Pro 16 M3',
    price: 2499,
    quantity: 8,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop'
  },
  {
    name: 'Sony WH-1000XM5',
    price: 399,
    quantity: 25,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop'
  },
  {
    name: 'Apple Watch Ultra 2',
    price: 799,
    quantity: 12,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&auto=format&fit=crop'
  },
  {
    name: 'Bàn phím Cơ Keychron K2',
    price: 99,
    quantity: 30,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop'
  },
  {
    name: 'Chuột Logitech MX Master 3S',
    price: 119,
    quantity: 20,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop'
  }
];

async function seedData() {
  try {
    await mongoose.connect('mongodb://localhost:27017/productdb');
    console.log('Đã kết nối MongoDB...');
    
    // Xóa dữ liệu cũ nếu muốn làm mới (hoặc chèn thêm)
    await Product.deleteMany({});
    console.log('Đã dọn dẹp dữ liệu cũ.');

    // Chèn dữ liệu mẫu
    const inserted = await Product.insertMany(sampleProducts);
    console.log(`Đã thêm thành công ${inserted.length} sản phẩm mẫu!`);
  } catch (error) {
    console.error('Lỗi khi thêm dữ liệu mẫu:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Đã ngắt kết nối MongoDB.');
  }
}

seedData();
