const MobileApis = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    price: "999",
    screenSize: '6.1"',
    displayType: "Super Retina XDR OLED, 120Hz, HDR10, 1000 nits",
    storageCapacity: "128GB/256GB/512GB/1TB",
    ram: "6GB",
    processor: "A15 Bionic",
    imageUrl: "https://via.placeholder.com/300x200?text=iPhone+13+Pro",
    description: 'The iPhone 13 Pro features a 6.1" Super Retina XDR display, A15 Bionic chip, and up to 1TB of storage. It offers advanced camera capabilities and a sleek design, making it a top choice for Apple enthusiasts.',
    weight: "204g (7.19 oz)",
    colors: ["Graphite", "Gold", "Silver", "Sierra Blue"],
    material: "Glass front and back (Gorilla Glass), stainless steel frame",
    waterResistance: "IP68 dust/water resistant (up to 6m for 30 mins)",
    simType: "Nano-SIM and eSIM",
    camera: {
      mainCamera: "Triple - 12 MP (wide), 12 MP (telephoto), 12 MP (ultrawide)",
      selfieCamera: "12 MP (wide)",
      features: "Dual-LED dual-tone flash, HDR, panorama",
      video: "4K@24/30/60fps (main), 1080p@30/60/120/240fps (selfie)"
    },
    batteryCapacity: "3095mAh",
    charging: "20W wired charging, MagSafe wireless charging"
  },
  {
    id: 2,
    name: "Google Pixel 6",
    price: "599",
    screenSize: '6.4"',
    displayType: "AMOLED, 90Hz, HDR10+",
    storageCapacity: "128GB/256GB",
    ram: "8GB",
    processor: "Google Tensor",
    imageUrl: "https://via.placeholder.com/300x200?text=Google+Pixel+6",
    description: 'The Google Pixel 6 offers a 6.4" AMOLED display, powered by Google\'s own Tensor chipset. It comes with a powerful camera system and the latest Android experience.',
    weight: "207g (7.30 oz)",
    colors: ["Sorta Seafoam", "Kinda Coral", "Stormy Black"],
    material: "Gorilla Glass Victus (front), Gorilla Glass 6 (back), aluminum frame",
    waterResistance: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    simType: "Nano-SIM and eSIM",
    camera: {
      mainCamera: "Dual - 50 MP (wide), 12 MP (ultrawide)",
      selfieCamera: "8 MP (wide)",
      features: "LED flash, Pixel Shift, auto-HDR, panorama",
      video: "4K@30/60fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "4614mAh",
    charging: "30W wired charging, 21W wireless charging"
  },
  // Continue adding the remaining data for each mobile...
  {
    id: 3,
    name: "OnePlus 9 Pro",
    price: "969",
    screenSize: '6.7"',
    displayType: "Fluid AMOLED, 120Hz, HDR10+",
    storageCapacity: "128GB/256GB",
    ram: "8GB/12GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=OnePlus+9+Pro",
    description: 'The OnePlus 9 Pro features a 6.7" Fluid AMOLED display with a 120Hz refresh rate and HDR10+ support, offering smooth performance with Snapdragon 888 and high-end camera features.',
    weight: "197g (6.94 oz)",
    colors: ["Morning Mist", "Pine Green", "Stellar Black"],
    material: "Gorilla Glass front and back, aluminum frame",
    waterResistance: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    simType: "Nano-SIM and eSIM",
    camera: {
      mainCamera: "Quad - 48 MP (wide), 8 MP (telephoto), 50 MP (ultrawide), 2 MP (monochrome)",
      selfieCamera: "16 MP (wide)",
      features: "Dual-LED flash, HDR, panorama",
      video: "8K@30fps, 4K@30/60/120fps (main), 1080p@30/60fps (selfie)"
    },
    batteryCapacity: "4500mAh",
    charging: "65W wired charging, 50W wireless charging"
  },
  {
    id: 4,
    name: "Samsung Galaxy S21 Ultra",
    price: "1,199",
    screenSize: '6.8"',
    displayType: "Dynamic AMOLED 2X, 120Hz, HDR10+",
    storageCapacity: "128GB/256GB/512GB",
    ram: "12GB/16GB",
    processor: "Exynos 2100 / Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Samsung+Galaxy+S21+Ultra",
    description: 'The Samsung Galaxy S21 Ultra is packed with a 6.8" Dynamic AMOLED 2X display, a top-tier camera setup, and massive battery life, offering an exceptional premium experience.',
    weight: "228g (8.04 oz)",
    colors: ["Phantom Black", "Phantom Silver"],
    material: "Gorilla Glass Victus (front and back), aluminum frame",
    waterResistance: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    simType: "Nano-SIM and eSIM",
    camera: {
      mainCamera: "Quad - 108 MP (wide), 10 MP (periscope telephoto), 10 MP (telephoto), 12 MP (ultrawide)",
      selfieCamera: "40 MP (wide)",
      features: "LED flash, auto-HDR, panorama",
      video: "8K@24fps (main), 4K@30/60fps (selfie)"
    },
    batteryCapacity: "5000mAh",
    charging: "25W wired, 15W wireless, reverse wireless"
  },
  {
    id: 5,
    name: "Xiaomi Mi 11",
    price: "749",
    screenSize: '6.81"',
    displayType: "AMOLED, 120Hz, HDR10+",
    storageCapacity: "128GB/256GB",
    ram: "8GB/12GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Xiaomi+Mi+11",
    description: 'The Xiaomi Mi 11 boasts a 6.81" AMOLED display, Snapdragon 888 chipset, and advanced camera capabilities at a competitive price.',
    weight: "196g (6.91 oz)",
    colors: ["Horizon Blue", "Cloud White", "Midnight Gray"],
    material: "Gorilla Glass Victus (front), Gorilla Glass 5 (back), aluminum frame",
    waterResistance: "Not officially rated",
    simType: "Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Triple - 108 MP (wide), 13 MP (ultrawide), 5 MP (macro)",
      selfieCamera: "20 MP (wide)",
      features: "Dual-LED dual-tone flash, HDR, panorama",
      video: "8K@24fps, 4K@30/60fps (main), 1080p@30/60fps (selfie)"
    },
    batteryCapacity: "4600mAh",
    charging: "55W wired, 50W wireless"
  },
  {
    id: 6,
    name: "Sony Xperia 1 III",
    price: "1,299",
    screenSize: '6.5"',
    displayType: "OLED, 120Hz, HDR BT.2020",
    storageCapacity: "256GB/512GB",
    ram: "12GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Sony+Xperia+1+III",
    description: 'Sony Xperia 1 III offers a 6.5" 4K OLED display, cutting-edge camera features, and smooth performance with 12GB RAM.',
    weight: "186g (6.56 oz)",
    colors: ["Frosted Black", "Frosted Gray", "Frosted Purple"],
    material: "Gorilla Glass Victus (front and back), aluminum frame",
    waterResistance: "IP65/IP68 dust/water resistant (up to 1.5m for 30 mins)",
    simType: "Nano-SIM and eSIM",
    camera: {
      mainCamera: "Quad - 12 MP (wide), 12 MP (telephoto), 12 MP (ultrawide), 0.3 MP (TOF 3D)",
      selfieCamera: "8 MP (wide)",
      features: "Zeiss optics, LED flash, HDR, panorama",
      video: "4K@24/25/30/60fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "4500mAh",
    charging: "30W wired, wireless charging"
  },
  {
    id: 7,
    name: "Oppo Find X3 Pro",
    price: "1,149",
    screenSize: '6.7"',
    displayType: "AMOLED, 120Hz, HDR10+",
    storageCapacity: "256GB/512GB",
    ram: "12GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Oppo+Find+X3+Pro",
    description: 'Oppo Find X3 Pro delivers a 6.7" AMOLED display with a 120Hz refresh rate, Snapdragon 888 processor, and 50 MP quad-camera system.',
    weight: "193g (6.81 oz)",
    colors: ["Gloss Black", "Blue", "White"],
    material: "Gorilla Glass front and back, aluminum frame",
    waterResistance: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    simType: "Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Quad - 50 MP (wide), 50 MP (ultrawide), 13 MP (telephoto), 3 MP (microscope)",
      selfieCamera: "32 MP (wide)",
      features: "LED flash, HDR, panorama",
      video: "4K@30/60fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "4500mAh",
    charging: "65W wired, 30W wireless"
  },
  {
    id: 8,
    name: "Huawei Mate 40 Pro",
    price: "1,099",
    screenSize: '6.76"',
    displayType: "OLED, 90Hz, HDR10",
    storageCapacity: "256GB/512GB",
    ram: "8GB/12GB",
    processor: "Kirin 9000 5G",
    imageUrl: "https://via.placeholder.com/300x200?text=Huawei+Mate+40+Pro",
    description: 'The Huawei Mate 40 Pro brings a 6.76" OLED display, Kirin 9000 5G chipset, and a 50 MP ultra-vision camera system.',
    weight: "212g (7.48 oz)",
    colors: ["Mystic Silver", "White", "Black", "Green", "Yellow"],
    material: "Gorilla Glass front and back, aluminum frame",
    waterResistance: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    simType: "Nano-SIM and eSIM",
    camera: {
      mainCamera: "Triple - 50 MP (wide), 12 MP (periscope telephoto), 20 MP (ultrawide)",
      selfieCamera: "13 MP (wide)",
      features: "LED flash, HDR, panorama",
      video: "4K@30/60fps (main), 1080p@30/60fps (selfie)"
    },
    batteryCapacity: "4400mAh",
    charging: "66W wired, 50W wireless"
  },
  {
    id: 9,
    name: "Realme GT Neo 2",
    price: "499",
    screenSize: '6.62"',
    displayType: "AMOLED, 120Hz, HDR10+",
    storageCapacity: "128GB/256GB",
    ram: "8GB/12GB",
    processor: "Snapdragon 870 5G",
    imageUrl: "https://via.placeholder.com/300x200?text=Realme+GT+Neo+2",
    description: 'Realme GT Neo 2 offers a 6.62" AMOLED display, Snapdragon 870 5G chipset, and a smooth 120Hz refresh rate at a competitive price.',
    weight: "199g (7.02 oz)",
    colors: ["Neo Blue", "Neo Green", "Neo Black"],
    material: "Glass front (Gorilla Glass 5), plastic frame, plastic back",
    waterResistance: "No official rating",
    simType: "Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Triple - 64 MP (wide), 8 MP (ultrawide), 2 MP (macro)",
      selfieCamera: "16 MP (wide)",
      features: "LED flash, HDR, panorama",
      video: "4K@30/60fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "5000mAh",
    charging: "65W wired"
  },
  {
    id: 10,
    name: "Vivo X70 Pro+",
    price: "1,199",
    screenSize: '6.78"',
    displayType: "AMOLED, 120Hz, HDR10+",
    storageCapacity: "256GB/512GB",
    ram: "8GB/12GB",
    processor: "Snapdragon 888+ 5G",
    imageUrl: "https://via.placeholder.com/300x200?text=Vivo+X70+Pro+Plus",
    description: 'The Vivo X70 Pro+ features a 6.78" AMOLED display, Snapdragon 888+ 5G chipset, and an excellent camera system co-engineered with Zeiss optics.',
    weight: "209g (7.37 oz)",
    colors: ["Black", "Blue", "Orange"],
    material: "Glass front, ceramic back, aluminum frame",
    waterResistance: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    simType: "Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Quad - 50 MP (wide), 8 MP (periscope telephoto), 12 MP (telephoto), 48 MP (ultrawide)",
      selfieCamera: "32 MP (wide)",
      features: "Zeiss optics, LED flash, HDR, panorama",
      video: "8K@30fps, 4K@30/60fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "4500mAh",
    charging: "55W wired, 50W wireless"
  },
  {
    id: 11,
    name: "Google Pixel 6 Pro",
    price: "899",
    screenSize: '6.71"',
    displayType: "LTPO AMOLED, 120Hz, HDR10+",
    storageCapacity: "128GB/256GB/512GB",
    ram: "12GB",
    processor: "Google Tensor",
    imageUrl: "https://via.placeholder.com/300x200?text=Google+Pixel+6+Pro",
    description: 'Google Pixel 6 Pro offers a brilliant 6.71" AMOLED display and excellent AI-enhanced camera features.',
    weight: "210g (7.41 oz)",
    colors: ["Stormy Black", "Cloudy White", "Sorta Sunny"],
    material: "Gorilla Glass Victus (front and back), aluminum frame",
    waterResistance: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    simType: "Nano-SIM and eSIM",
    camera: {
      mainCamera: "Triple - 50 MP (wide), 48 MP (telephoto), 12 MP (ultrawide)",
      selfieCamera: "11.1 MP (ultrawide)",
      features: "Dual-LED flash, Pixel Shift, auto-HDR, panorama",
      video: "4K@30/60fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "5000mAh",
    charging: "30W wired, 23W wireless"
  },
  {
    id: 12,
    name: "OnePlus 9 Pro",
    price: "969",
    screenSize: '6.7"',
    displayType: "Fluid AMOLED, 120Hz, HDR10+",
    storageCapacity: "128GB/256GB",
    ram: "8GB/12GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=OnePlus+9+Pro",
    description: 'The OnePlus 9 Pro brings fast performance with Snapdragon 888, a 120Hz Fluid AMOLED display, and powerful quad-camera setup.',
    weight: "197g (6.95 oz)",
    colors: ["Morning Mist", "Forest Green", "Stellar Black"],
    material: "Gorilla Glass front and back, aluminum frame",
    waterResistance: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    simType: "Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Quad - 48 MP (wide), 8 MP (telephoto), 50 MP (ultrawide), 2 MP (monochrome)",
      selfieCamera: "16 MP (wide)",
      features: "Hasselblad Color Calibration, LED flash, HDR, panorama",
      video: "8K@30fps, 4K@30/60/120fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "4500mAh",
    charging: "65W wired, 50W wireless"
  },
  {
    id: 13,
    name: "Asus ROG Phone 5",
    price: "999",
    screenSize: '6.78"',
    displayType: "AMOLED, 144Hz, HDR10+",
    storageCapacity: "128GB/256GB/512GB",
    ram: "8GB/12GB/16GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Asus+ROG+Phone+5",
    description: 'The Asus ROG Phone 5 is a gaming beast with a 144Hz AMOLED display, powerful Snapdragon 888 chipset, and massive battery life.',
    weight: "238g (8.40 oz)",
    colors: ["Phantom Black", "Storm White"],
    material: "Gorilla Glass Victus (front), Gorilla Glass 3 (back), aluminum frame",
    waterResistance: "No official rating",
    simType: "Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Triple - 64 MP (wide), 13 MP (ultrawide), 5 MP (macro)",
      selfieCamera: "24 MP (wide)",
      features: "LED flash, HDR, panorama",
      video: "8K@30fps, 4K@30/60fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "6000mAh",
    charging: "65W wired"
  },
  {
    id: 14,
    name: "Motorola Edge 20 Pro",
    price: "699",
    screenSize: '6.7"',
    displayType: "OLED, 144Hz, HDR10+",
    storageCapacity: "128GB/256GB",
    ram: "12GB",
    processor: "Snapdragon 870 5G",
    imageUrl: "https://via.placeholder.com/300x200?text=Motorola+Edge+20+Pro",
    description: 'Motorola Edge 20 Pro combines a 144Hz OLED display with 5G capabilities and a flagship-grade 108 MP camera for top-notch photography.',
    weight: "190g (6.70 oz)",
    colors: ["Midnight Blue", "Iridescent White", "Blue Vegan Leather"],
    material: "Gorilla Glass 5 (front), aluminum frame, plastic back",
    waterResistance: "Water repellent design",
    simType: "Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Triple - 108 MP (wide), 8 MP (periscope telephoto), 16 MP (ultrawide)",
      selfieCamera: "32 MP (wide)",
      features: "LED flash, HDR, panorama",
      video: "8K@24fps, 4K@30fps (main), 1080p@30/60fps (selfie)"
    },
    batteryCapacity: "4500mAh",
    charging: "30W wired"
  },
  {
    id: 15,
    name: "ZTE Axon 30 Ultra",
    price: "749",
    screenSize: '6.67"',
    displayType: "AMOLED, 144Hz, HDR10+",
    storageCapacity: "128GB/256GB",
    ram: "8GB/12GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=ZTE+Axon+30+Ultra",
    description: 'The ZTE Axon 30 Ultra is packed with powerful features like Snapdragon 888, 144Hz AMOLED display, and 64 MP triple cameras.',
    weight: "188g (6.63 oz)",
    colors: ["Black", "White", "Light Brown"],
    material: "Gorilla Glass 5 (front and back), aluminum frame",
    waterResistance: "No official rating",
    simType: "Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Quad - 64 MP (wide), 64 MP (ultrawide), 64 MP (standard), 8 MP (periscope telephoto)",
      selfieCamera: "16 MP (wide)",
      features: "Dual-LED flash, HDR, panorama",
      video: "8K@30fps, 4K@30/60fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "4600mAh",
    charging: "65W wired"
  },
  {
    id: 16,
    name: "Nokia XR20",
    price: "549",
    screenSize: '6.67"',
    displayType: "IPS LCD, 60Hz, HDR10",
    storageCapacity: "64GB/128GB",
    ram: "4GB/6GB",
    processor: "Snapdragon 480 5G",
    imageUrl: "https://via.placeholder.com/300x200?text=Nokia+XR20",
    description: 'Nokia XR20 is built for extreme durability with military-grade toughness, featuring a 6.67" IPS display, 48 MP dual-camera, and 5G support.',
    weight: "248g (8.75 oz)",
    colors: ["Ultra Blue", "Granite Gray"],
    material: "Gorilla Glass Victus (front), plastic back, aluminum frame",
    waterResistance: "IP68 dust/water resistant (up to 1.5m for 30 mins), MIL-STD-810H compliant",
    simType: "Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Dual - 48 MP (wide), 13 MP (ultrawide)",
      selfieCamera: "8 MP (wide)",
      features: "Zeiss optics, dual-LED flash, HDR, panorama",
      video: "1080p@30fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "4630mAh",
    charging: "18W wired, 15W wireless"
  },
  {
    id: 17,
    name: "Sony Xperia 1 III",
    price: "1,299",
    screenSize: '6.5"',
    displayType: "OLED, 120Hz, HDR BT.2020",
    storageCapacity: "256GB/512GB",
    ram: "12GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Sony+Xperia+1+III",
    description: 'Sony Xperia 1 III boasts a stunning 4K OLED 120Hz display, paired with advanced photo and video capture capabilities.',
    weight: "186g (6.56 oz)",
    colors: ["Frosted Black", "Frosted Gray", "Frosted Purple"],
    material: "Gorilla Glass Victus (front and back), aluminum frame",
    waterResistance: "IP65/IP68 dust/water resistant (up to 1.5m for 30 mins)",
    simType: "Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Triple - 12 MP (wide), 12 MP (telephoto), 12 MP (ultrawide)",
      selfieCamera: "8 MP (wide)",
      features: "Zeiss optics, LED flash, panorama, HDR",
      video: "4K@24/25/30/60/120fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "4500mAh",
    charging: "30W wired, 15W wireless"
  },
  {
    id: 18,
    name: "Realme GT Master",
    price: "399",
    screenSize: '6.43"',
    displayType: "Super AMOLED, 120Hz, HDR10+",
    storageCapacity: "128GB/256GB",
    ram: "6GB/8GB",
    processor: "Snapdragon 778G 5G",
    imageUrl: "https://via.placeholder.com/300x200?text=Realme+GT+Master",
    description: 'Realme GT Master offers a unique design inspired by travel, along with strong performance from the Snapdragon 778G and a smooth 120Hz display.',
    weight: "174g (6.14 oz)",
    colors: ["Gray", "White", "Aurora"],
    material: "Gorilla Glass 5 (front), plastic back, plastic frame",
    waterResistance: "No official rating",
    simType: "Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Triple - 64 MP (wide), 8 MP (ultrawide), 2 MP (macro)",
      selfieCamera: "32 MP (wide)",
      features: "LED flash, HDR, panorama",
      video: "4K@30fps, 1080p@30/60fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "4300mAh",
    charging: "65W wired"
  },
  {
    id: 19,
    name: "Oppo Find X3 Pro",
    price: "1,149",
    screenSize: '6.7"',
    displayType: "LTPO AMOLED, 120Hz, HDR10+",
    storageCapacity: "256GB/512GB",
    ram: "8GB/12GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Oppo+Find+X3+Pro",
    description: 'Oppo Find X3 Pro combines high-end features like a 120Hz AMOLED display, Snapdragon 888, and advanced camera technology.',
    weight: "193g (6.81 oz)",
    colors: ["Gloss Black", "Blue", "White"],
    material: "Gorilla Glass 5 (front), ceramic or matte glass back, aluminum frame",
    waterResistance: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    simType: "Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Quad - 50 MP (wide), 50 MP (ultrawide), 13 MP (telephoto), 3 MP (microscope)",
      selfieCamera: "32 MP (wide)",
      features: "LED flash, HDR, panorama",
      video: "4K@30/60fps (main), 1080p@30/60fps (selfie)"
    },
    batteryCapacity: "4500mAh",
    charging: "65W wired, 30W wireless"
  },
  {
    id: 20,
    name: "Xiaomi Mi 11 Ultra",
    price: "1,199",
    screenSize: '6.81"',
    displayType: "AMOLED, 120Hz, HDR10+",
    storageCapacity: "256GB/512GB",
    ram: "12GB",
    processor: "Snapdragon 888",
    imageUrl: "https://via.placeholder.com/300x200?text=Xiaomi+Mi+11+Ultra",
    description: 'Xiaomi Mi 11 Ultra packs a massive 6.81" AMOLED display, Snapdragon 888, and a versatile triple camera system for stunning photos and videos.',
    weight: "234g (8.25 oz)",
    colors: ["Ceramic White", "Ceramic Black"],
    material: "Gorilla Glass Victus (front), ceramic back, aluminum frame",
    waterResistance: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    simType: "Dual SIM (Nano-SIM, dual stand-by)",
    camera: {
      mainCamera: "Triple - 50 MP (wide), 48 MP (periscope telephoto), 48 MP (ultrawide)",
      selfieCamera: "20 MP (wide)",
      features: "Dual-LED flash, HDR, panorama",
      video: "8K@24fps, 4K@30/60fps (main), 1080p@30fps (selfie)"
    },
    batteryCapacity: "5000mAh",
    charging: "67W wired, 67W wireless"
  }
  // Continue adding similar details for each mobile from id 5 to 20...
];

export default MobileApis;
