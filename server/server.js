const express = require('express');
const app = express();
const PORT = 3000; // Порт, на котором будет запущен сервер

// Middleware для разрешения CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Роут для получения информации о товарах
app.get('/api/products', (req, res) => {
  // Здесь вы можете подключиться к базе данных или файлу, где хранится информация о товарах
  // Загрузите данные о товарах из источника и отправьте их в ответе
  const products = [
    {
      name: 'Product 1',
      price: 10,
      description: 'This is product 1',
    },
    {
      name: 'Product 2',
      price: 20,
      description: 'This is product 2',
    },
  ];
  res.json(products);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
