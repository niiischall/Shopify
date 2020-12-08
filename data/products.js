import {Product} from './models';

const PRODUCTS = [
  new Product(
    'p1',
    ['c1'],
    'Red Shirt',
    'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
    'A red t-shirt, perfect for days with non-red weather.',
    29.99
  ),
  new Product(
    'p2',
    ['c7'],
    'Blue Carpet',
    'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'Fits your home asthetics completely.',
    99.99
  ),
  new Product(
    'p3',
    ['c8'],
    'Coffee Mug',
    'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
    'Can also be used for tea!',
    8.99
  ),
  new Product(
    'p4',
    ['c6'],
    'The Book - Limited Edition',
    'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg',
    "What the content is? Why would that matter? It's a limited edition!",
    15.99
  ),
  new Product(
    'p5',
    ['c3'],
    'PowerBook',
    'https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg',
    'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
    2299.99
  ),
  new Product(
    'p6',
    ['c5'],
    'Pen & Paper',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
    5.49
  ),
  new Product(
    'p7',
    ['c4'],
    'Backpack',
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    109.95,
  ),
  new Product(
    'p8',
    ['c1'],
    'Henly Mens t-shirt',
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.',
    22.3,
  ),
  new Product(
    'p9',
    ['c1'],
    'Mens Cotton Jacket',
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling.",
    55.99
  ),
  new Product(
    'p10',
    ['c9'],
    "Mens Casual Slim Fit",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "The color could be slightly different between on the screen and in practice.",
    15.99
  ),
  new Product(
    'p11',
    ['c10'],
    "Women Bracelet",
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    695
  ),
  new Product(
    'p12',
    ['c2'],
    "Solid Gold Bracelet ",
    "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    168,
  ),
  new Product(
    'p13',
    ['c10'],
    'White Gold Princess Ring',
    'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine\'s Day...',
    9.99
  ),
  new Product(
    'p14',
    ['c10'],
    'Gold Earrings',
    'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    10.99
  ),
  new Product(
    'p15',
    ['c3'],
    'External Hard Drive',
    "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    64
  ),
  new Product(
    'p16',
    ['c8'],
    "SanDisk 1TB Internal SSD",
    "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive.",
    109
  ),
  new Product(
    'p17',
    ['c8'],
    'Silicon Power 256GB SSD',
    "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance.",
    109
  ),
  new Product(
    'p18',
    ['c3'],
    'Playstation 4',
    'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
    "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer\'s limited warranty",
    114
  ),
  new Product(
    'p19',
    ['c7'],
    'Acer Full HD Monitor',
    'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors.',
    599
  ),
  new Product(
    'p20',
    ['c8'],
    'Samsung Gaming Monitor.',
    "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support.",
    999.99
  ),
  new Product(
    'p21',
    ['c4'],
    "Winter Coats",
    "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    56.99
  ),
  new Product(
    'p22',
    ['c8'],
    "Biker Jacket",
    "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket.",
    29.95
  ),
  new Product(
    'p23',
    ['c2'],
    "Rain Jacket",
    "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size.",
    39.99
  ),
  new Product(
    'p24',
    ['c9'],
    "Solid Short Sleeve",
    "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    9.85
  ),
  new Product(
    'p25',
    ['c2'],
    "Women's Short Sleeve",
    "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric.",
    7.95
  ),
  new Product(
    'p26',
    ['c2'],
    "Womens T Shirt",
    "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street.",
    12.99
  )
]

export default PRODUCTS;