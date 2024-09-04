const mobiles = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    priceRange: "$999",
    screenSize: '6.1"',
    storageCapacity: "128GB/256GB/512GB/1TB",
    processor: "A15 Bionic",
    imageUrl: "https://via.placeholder.com/300x200?text=iPhone+13+Pro",
    description:
      'The iPhone 13 Pro features a 6.1" Super Retina XDR display, A15 Bionic chip, and up to 1TB of storage. It offers advanced camera capabilities and a sleek design, making it a top choice for Apple enthusiasts.',
  },
  {
    id: 2,
    name: "Samsung Galaxy S21 Ultra",
    priceRange: "$1,199",
    screenSize: '6.8"',
    storageCapacity: "128GB/256GB/512GB",
    processor: "Exynos 2100/Snapdragon 888",
    imageUrl:
      "https://via.placeholder.com/300x200?text=Samsung+Galaxy+S21+Ultra",
    description:
      'The Samsung Galaxy S21 Ultra boasts a 6.8" Dynamic AMOLED display, Exynos 2100 or Snapdragon 888 processor, and up to 512GB of storage. It is known for its powerful performance and exceptional camera system.',
  },
  {
    id: 3,
    name: "Google Pixel 6 Pro",
    priceRange: "$899",
    screenSize: '6.7"',
    storageCapacity: "128GB/256GB/512GB",
    processor: "Google Tensor",
    imageUrl: "https://via.placeholder.com/300x200?text=Google+Pixel+6+Pro",
    description:
      'The Google Pixel 6 Pro features a 6.7" LTPO OLED display, Google Tensor processor, and up to 512GB of storage. It offers a pure Android experience with excellent camera performance.',
  },
  {
    id: 4,
    name: "OnePlus 9 Pro",
    priceRange: "$969",
    screenSize: '6.7"',
    storageCapacity: "128GB/256GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=OnePlus+9+Pro",
    description:
      'The OnePlus 9 Pro comes with a 6.7" Fluid AMOLED display, Snapdragon 888 processor, and up to 256GB of storage. It is known for its fast performance and smooth user experience.',
  },
  {
    id: 5,
    name: "Xiaomi Mi 11 Ultra",
    priceRange: "$1,199",
    screenSize: '6.81"',
    storageCapacity: "256GB/512GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Xiaomi+Mi+11+Ultra",
    description:
      'The Xiaomi Mi 11 Ultra features a 6.81" AMOLED display, Snapdragon 888 processor, and up to 512GB of storage. It offers a premium build and top-tier camera performance.',
  },
  {
    id: 6,
    name: "Sony Xperia 1 III",
    priceRange: "$1,299",
    screenSize: '6.5"',
    storageCapacity: "256GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Sony+Xperia+1+III",
    description:
      'The Sony Xperia 1 III boasts a 6.5" 4K HDR OLED display, Snapdragon 888 processor, and 256GB of storage. It is designed for multimedia enthusiasts with its advanced display and camera technologies.',
  },
  {
    id: 7,
    name: "Oppo Find X3 Pro",
    priceRange: "$1,149",
    screenSize: '6.7"',
    storageCapacity: "256GB/512GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Oppo+Find+X3+Pro",
    description:
      'The Oppo Find X3 Pro features a 6.7" AMOLED display, Snapdragon 888 processor, and up to 512GB of storage. It is known for its innovative design and powerful camera system.',
  },
  {
    id: 8,
    name: "Huawei P50 Pro",
    priceRange: "$1,199",
    screenSize: '6.6"',
    storageCapacity: "256GB/512GB",
    processor: "Kirin 9000",
    imageUrl: "https://via.placeholder.com/300x200?text=Huawei+P50+Pro",
    description:
      'The Huawei P50 Pro offers a 6.6" OLED display, Kirin 9000 processor, and up to 512GB of storage. It is recognized for its excellent camera capabilities and sleek design.',
  },
  {
    id: 9,
    name: "Samsung Galaxy Z Fold 3",
    priceRange: "$1,799",
    screenSize: '7.6"',
    storageCapacity: "256GB/512GB",
    processor: "Snapdragon 888",
    imageUrl:
      "https://via.placeholder.com/300x200?text=Samsung+Galaxy+Z+Fold+3",
    description:
      'The Samsung Galaxy Z Fold 3 features a 7.6" foldable Dynamic AMOLED display, Snapdragon 888 processor, and up to 512GB of storage. It offers a unique foldable design with high-end performance.',
  },
  {
    id: 10,
    name: "OnePlus Nord 2",
    priceRange: "$399",
    screenSize: '6.43"',
    storageCapacity: "128GB/256GB",
    processor: "Dimensity 1200-AI",
    imageUrl: "https://via.placeholder.com/300x200?text=OnePlus+Nord+2",
    description:
      'The OnePlus Nord 2 comes with a 6.43" Fluid AMOLED display, Dimensity 1200-AI processor, and up to 256GB of storage. It offers a balance of performance and affordability.',
  },
  {
    id: 11,
    name: "Xiaomi Redmi Note 10 Pro",
    priceRange: "$279",
    screenSize: '6.67"',
    storageCapacity: "64GB/128GB",
    processor: "Snapdragon 732G",
    imageUrl:
      "https://via.placeholder.com/300x200?text=Xiaomi+Redmi+Note+10+Pro",
    description:
      'The Xiaomi Redmi Note 10 Pro features a 6.67" AMOLED display, Snapdragon 732G processor, and up to 128GB of storage. It is known for its excellent value and impressive camera setup.',
  },
  {
    id: 12,
    name: "Realme GT",
    priceRange: "$499",
    screenSize: '6.43"',
    storageCapacity: "128GB/256GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Realme+GT",
    description:
      'The Realme GT offers a 6.43" Super AMOLED display, Snapdragon 888 processor, and up to 256GB of storage. It is designed for high performance and gaming.',
  },
  {
    id: 13,
    name: "Vivo X60 Pro",
    priceRange: "$799",
    screenSize: '6.56"',
    storageCapacity: "256GB",
    processor: "Snapdragon 870",
    imageUrl: "https://via.placeholder.com/300x200?text=Vivo+X60+Pro",
    description:
      'The Vivo X60 Pro features a 6.56" AMOLED display, Snapdragon 870 processor, and 256GB of storage. It is known for its sleek design and advanced camera capabilities.',
  },
  {
    id: 14,
    name: "Asus ROG Phone 5",
    priceRange: "$999",
    screenSize: '6.78"',
    storageCapacity: "128GB/256GB/512GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Asus+ROG+Phone+5",
    description:
      'The Asus ROG Phone 5 boasts a 6.78" AMOLED display, Snapdragon 888 processor, and up to 512GB of storage. It is designed for gamers with its high refresh rate and gaming-centric features.',
  },
  {
    id: 15,
    name: "Nokia 8.3 5G",
    priceRange: "$699",
    screenSize: '6.81"',
    storageCapacity: "64GB/128GB",
    processor: "Snapdragon 765G",
    imageUrl: "https://via.placeholder.com/300x200?text=Nokia+8.3+5G",
    description:
      'The Nokia 8.3 5G features a 6.81" PureDisplay, Snapdragon 765G processor, and up to 128GB of storage. It offers 5G connectivity and a solid build quality.',
  },
  {
    id: 16,
    name: "Motorola Edge 20 Pro",
    priceRange: "$699",
    screenSize: '6.7"',
    storageCapacity: "128GB/256GB",
    processor: "Snapdragon 870",
    imageUrl: "https://via.placeholder.com/300x200?text=Motorola+Edge+20+Pro",
    description:
      'The Motorola Edge 20 Pro comes with a 6.7" OLED display, Snapdragon 870 processor, and up to 256GB of storage. It is known for its high refresh rate display and versatile camera system.',
  },
  {
    id: 17,
    name: "Google Pixel 5a",
    priceRange: "$449",
    screenSize: '6.34"',
    storageCapacity: "128GB",
    processor: "Snapdragon 765G",
    imageUrl: "https://via.placeholder.com/300x200?text=Google+Pixel+5a",
    description:
      'The Google Pixel 5a features a 6.34" OLED display, Snapdragon 765G processor, and 128GB of storage. It offers a great camera experience and clean Android interface at an affordable price.',
  },
  {
    id: 18,
    name: "Samsung Galaxy A52",
    priceRange: "$499",
    screenSize: '6.5"',
    storageCapacity: "128GB/256GB",
    processor: "Snapdragon 720G",
    imageUrl: "https://via.placeholder.com/300x200?text=Samsung+Galaxy+A52",
    description:
      'The Samsung Galaxy A52 comes with a 6.5" Super AMOLED display, Snapdragon 720G processor, and up to 256GB of storage. It is known for its vibrant display and solid performance in the mid-range segment.',
  },
  {
    id: 19,
    name: "Sony Xperia 5 II",
    priceRange: "$949",
    screenSize: '6.1"',
    storageCapacity: "128GB/256GB",
    processor: "Snapdragon 865",
    imageUrl: "https://via.placeholder.com/300x200?text=Sony+Xperia+5+II",
    description:
      'The Sony Xperia 5 II features a 6.1" OLED display, Snapdragon 865 processor, and up to 256GB of storage. It offers a compact design with high-end performance and excellent camera capabilities.',
  },
  {
    id: 20,
    name: "LG Velvet",
    priceRange: "$599",
    screenSize: '6.8"',
    storageCapacity: "128GB",
    processor: "Snapdragon 765G",
    imageUrl: "https://via.placeholder.com/300x200?text=LG+Velvet",
    description:
      'The LG Velvet boasts a 6.8" P-OLED display, Snapdragon 765G processor, and 128GB of storage. It is known for its stylish design and balanced performance.',
  }
];

export default mobiles;
