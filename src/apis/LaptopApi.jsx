const LaptopApi = [
  {
    id: 1,
    name: "Dell XPS 13",
    priceRange: "$1,000",
    screenSize: '13.3"',
    storageCapacity: "512GB SSD",
    processor: "Intel Core i7",
    imageUrl: "https://via.placeholder.com/300x200?text=Dell+XPS+13",
    description:
      "The Dell XPS 13 is a sleek and powerful laptop featuring a 13.3\" FHD display, Intel Core i7 processor, and 512GB SSD. It's known for its compact design and high performance, making it ideal for professionals and students alike.",
    
  },
  {
    id: 2,
    name: "Lenovo IdeaPad Slim 7",
    priceRange: "$800",
    screenSize: '14"',
    storageCapacity: "512GB SSD",
    processor: "Intel Core i7",
    imageUrl: "https://via.placeholder.com/300x200?text=Lenovo+IdeaPad+Slim+7",
    description:
      'The Lenovo IdeaPad Slim 7 offers a 14" display with a slim and lightweight design. It is powered by an Intel Core i7 processor and comes with a 512GB SSD, providing a balance of performance and portability.',
  },
  {
    id: 3,
    name: "HP Pavilion Gaming",
    priceRange: "$1,000",
    screenSize: '15.6"',
    storageCapacity: "1TB SSD",
    processor: "AMD Ryzen 7",
    imageUrl: "https://via.placeholder.com/300x200?text=HP+Pavilion+Gaming",
    description:
      'The HP Pavilion Gaming laptop features a 15.6" display and an AMD Ryzen 7 processor. With a 1TB SSD, it delivers excellent gaming performance and ample storage for all your games and media.',
  },
  {
    id: 4,
    name: "MacBook Air M2",
    priceRange: "$999",
    screenSize: '13.6"',
    storageCapacity: "256GB/512GB SSD",
    processor: "Apple M2",
    imageUrl: "https://via.placeholder.com/300x200?text=MacBook+Air+M2",
    description:
      'The MacBook Air M2 offers a 13.6" Retina display and is powered by the Apple M2 chip. It comes with options for 256GB or 512GB SSD storage, providing a blend of power and efficiency in a thin, lightweight design.',
  },
  {
    id: 5,
    name: "Asus ZenBook 14",
    priceRange: "$900",
    screenSize: '14"',
    storageCapacity: "512GB SSD",
    processor: "Intel Core i7",
    imageUrl: "https://via.placeholder.com/300x200?text=Asus+ZenBook+14",
    description:
      'The Asus ZenBook 14 features a 14" display and an Intel Core i7 processor. With 512GB of SSD storage, it combines high performance with a compact, elegant design.',
  },
  {
    id: 6,
    name: "Microsoft Surface Laptop 5",
    priceRange: "$1,100",
    screenSize: '13.5"',
    storageCapacity: "512GB SSD",
    processor: "Intel Core i5/i7",
    imageUrl: "https://via.placeholder.com/300x200?text=Surface+Laptop+5",
    description:
      'The Microsoft Surface Laptop 5 boasts a 13.5" PixelSense touchscreen display and is powered by Intel Core i5 or i7 processors. It comes with 512GB SSD storage, offering a premium build and high performance.',
  },
  {
    id: 7,
    name: "Acer Swift 3",
    priceRange: "$799",
    screenSize: '14"',
    storageCapacity: "512GB SSD",
    processor: "AMD Ryzen 7",
    imageUrl: "https://via.placeholder.com/300x200?text=Acer+Swift+3",
    description:
      'The Acer Swift 3 is a budget-friendly laptop with a 14" display and an AMD Ryzen 7 processor. It offers 512GB SSD storage, providing a solid performance at a competitive price.',
  },
  {
    id: 8,
    name: "HP Spectre x360",
    priceRange: "$1,200",
    screenSize: '13.3"',
    storageCapacity: "512GB SSD",
    processor: "Intel Core i7",
    imageUrl: "https://via.placeholder.com/300x200?text=HP+Spectre+x360",
    description:
      'The HP Spectre x360 features a 13.3" touchscreen display with a flexible 2-in-1 design. It is powered by an Intel Core i7 processor and comes with 512GB SSD storage, offering versatility and high performance.',
  },
  {
    id: 9,
    name: "Lenovo ThinkPad X1 Carbon Gen 9",
    priceRange: "$1,400",
    screenSize: '14"',
    storageCapacity: "512GB/1TB SSD",
    processor: "Intel Core i7",
    imageUrl:
      "https://via.placeholder.com/300x200?text=Lenovo+ThinkPad+X1+Carbon+Gen+9",
    description:
      'The Lenovo ThinkPad X1 Carbon Gen 9 is a durable business laptop featuring a 14" display, Intel Core i7 processor, and up to 1TB SSD storage. It is known for its robust build quality and high-end performance.',
  },
  {
    id: 10,
    name: "Dell Inspiron 15 5000",
    priceRange: "$900",
    screenSize: '15.6"',
    storageCapacity: "256GB SSD",
    processor: "Intel Core i5",
    imageUrl: "https://via.placeholder.com/300x200?text=Dell+Inspiron+15+5000",
    description:
      'The Dell Inspiron 15 5000 is a versatile laptop with a 15.6" display, Intel Core i5 processor, and 256GB SSD storage. It provides a good balance of performance and affordability for everyday tasks.',
  },
  {
    id: 11,
    name: "Razer Blade 15",
    priceRange: "$1,800",
    screenSize: '15.6"',
    storageCapacity: "512GB/1TB SSD",
    processor: "Intel Core i7",
    imageUrl: "https://via.placeholder.com/300x200?text=Razer+Blade+15",
    description:
      'The Razer Blade 15 is a high-performance gaming laptop featuring a 15.6" display and Intel Core i7 processor. It comes with up to 1TB SSD storage and is known for its sleek design and powerful gaming capabilities.',
  },
  {
    id: 12,
    name: "Asus ROG Zephyrus G14",
    priceRange: "$1,100",
    screenSize: '14"',
    storageCapacity: "1TB SSD",
    processor: "AMD Ryzen 9",
    imageUrl: "https://via.placeholder.com/300x200?text=Asus+ROG+Zephyrus+G14",
    description:
      'The Asus ROG Zephyrus G14 is a compact gaming laptop with a 14" display and AMD Ryzen 9 processor. It features 1TB SSD storage, delivering exceptional gaming performance in a portable form factor.',
  },
  {
    id: 13,
    name: 'Apple MacBook Pro 14" M2 Pro',
    priceRange: "$1,999",
    screenSize: '14"',
    storageCapacity: "512GB/1TB SSD",
    processor: "Apple M2 Pro",
    imageUrl: "https://via.placeholder.com/300x200?text=MacBook+Pro+14+M2+Pro",
    description:
      'The Apple MacBook Pro 14" M2 Pro is a powerful laptop with a 14" display and Apple M2 Pro chip. It offers up to 1TB SSD storage, making it suitable for demanding professional tasks and creative work.',
  },
  {
    id: 14,
    name: "Samsung Galaxy Book Pro 360",
    priceRange: "$1,200",
    screenSize: '13.3"',
    storageCapacity: "512GB SSD",
    processor: "Intel Core i7",
    imageUrl:
      "https://via.placeholder.com/300x200?text=Samsung+Galaxy+Book+Pro+360",
    description:
      'The Samsung Galaxy Book Pro 360 features a 13.3" AMOLED touchscreen display with a 2-in-1 design. It is powered by an Intel Core i7 processor and comes with 512GB SSD storage, offering a premium and versatile user experience.',
  },
  {
    id: 15,
    name: "LG Gram 17",
    priceRange: "$1,600",
    screenSize: '17"',
    storageCapacity: "1TB SSD",
    processor: "Intel Core i7",
    imageUrl: "https://via.placeholder.com/300x200?text=LG+Gram+17",
    description:
      'The LG Gram 17 is a lightweight 17" laptop with an Intel Core i7 processor and 1TB SSD storage. Despite its large screen, it remains highly portable, making it an excellent choice for users who need a big display on the go.',
  },
  ,
  {
    id: 16,
    name: "Dell G15",
    priceRange: "$900",
    screenSize: '15.6"',
    storageCapacity: "512GB SSD",
    processor: "AMD Ryzen 7",
    imageUrl: "https://via.placeholder.com/300x200?text=Dell G15",
    description:
      'The Dell G15 is a gaming laptop with a 15.6" display and AMD Ryzen 7 processor. It features 512GB SSD storage and is designed to handle demanding games and applications, offering a robust gaming experience.',
  },
  {
    id: 17,
    name: "Acer Predator Helios 300",
    priceRange: "$1,200",
    screenSize: '15.6"',
    storageCapacity: "1TB SSD",
    processor: "Intel Core i7",
    imageUrl:
      "https://via.placeholder.com/300x200?text=Acer Predator Helios 300",
    description:
      'The Acer Predator Helios 300 is a high-performance gaming laptop with a 15.6" display and Intel Core i7 processor. It offers 1TB SSD storage and features a high-refresh-rate screen for smooth gaming and immersive visuals.',
  },
  {
    id: 18,
    name: "HP Elite Dragonfly G2",
    priceRange: "$1,700",
    screenSize: '13.3"',
    storageCapacity: "512GB SSD",
    processor: "Intel Core i7",
    imageUrl: "https://via.placeholder.com/300x200?text=HP Elite Dragonfly G2",
    description:
      'The HP Elite Dragonfly G2 is a premium business laptop with a 13.3" display and Intel Core i7 processor. It features 512GB SSD storage and is designed for professionals who need a lightweight, high-performance laptop with advanced security features.',
  },
  {
    id: 19,
    name: "Lenovo Legion 5 Pro",
    priceRange: "$1,300",
    screenSize: '16"',
    storageCapacity: "1TB SSD",
    processor: "AMD Ryzen 7",
    imageUrl: "https://via.placeholder.com/300x200?text=Lenovo Legion 5 Pro",
    description:
      'The Lenovo Legion 5 Pro is a powerful gaming laptop with a 16" display and AMD Ryzen 7 processor. It comes with 1TB SSD storage and offers excellent performance for gaming and high-end tasks, featuring a large, high-resolution screen.',
  },
  {
    id: 20,
    name: "Microsoft Surface Pro 8",
    priceRange: "$1,000",
    screenSize: '13"',
    storageCapacity: "512GB SSD",
    processor: "Intel Core i7",
    imageUrl:
      "https://via.placeholder.com/300x200?text=Microsoft Surface Pro 8  ",
    description:
      'The Microsoft Surface Pro 8 is a versatile 2-in-1 device with a 13" touchscreen display and Intel Core i7 processor. It features 512GB SSD storage and offers the flexibility of a tablet with the power of a laptop, making it ideal for productivity on the go.',
  },
];

export default LaptopApi;
