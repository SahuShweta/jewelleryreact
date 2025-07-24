import React from 'react'
import { Link } from 'react-router'
import { Alert } from 'react-bootstrap';
import { Row, Container, Col, Table, } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Placeholder from 'react-bootstrap/Placeholder';
import ListGroup from 'react-bootstrap/ListGroup';


const Jsr = () => {
  let a = 10;
  let name = "jamshedpur";
  let rollNo = 1;
  console.log(name);
  let isLogin = true;
  console.log(isLogin);
  let friends = ["Ram", "Shyam", "sita", "sushma"];
  let fruits = ["apple", "mango", "grape", "litchi", "apple", "mango"];
  let check = friends.length;
  let friend = friends.at(0)
  let mix = friends.concat(fruits)
  let array = fruits.constructor;
  // let array1=fruits.pop();
  let array2 = fruits.push("lemon");
  let array3 = fruits.entries();
  let array4 = fruits.fill("kiwi");
  let array5 = Array.isArray(fruits);
  let array6 = fruits.join("and")
  let array7 = fruits.keys();
  let array8 = fruits.lastIndexOf("mango");
  let group = [4, 9, 16, 25]
  let array9 = group.map(Math.sqrt);
  //let fruit=["apple","mango","grape","litchi","apple","mango"];

  let reverseArray = friends.reverse();
  let shiftArray = friends.shift();
  let book = ["math", "science", "english", "eco", "computer", "sst"]
  let sliceArray = book.slice(1, 4);
  let sorted = book.sort();
  let book2 = book.splice(2, 4);
  let letter = friends.toString();
  let drink = ["maaza", "pepsi", "cocacola", "limca", "sevenup"];
  let water = drink.values();
  let month = ["jan", "feb", "marc"];
  let right = month.with(1, "february");

  // const student={
  //       "name" : "xyz",
  //       "roll" : 1,
  //       "branch" : "cse"
  // };

  var students = [
    {
      "name": "abc",
      "roll": 1,
      "branch": "cse"
    },
    {
      "name": "xyz",
      "roll": 2,
      "branch": "cse"
    },
    {
      "name": "xyz2",
      "roll": 3,
      "branch": "cse"
    }
  ];
  const notices = [
    {
      "title": "सूचना : निविदा खोलने की तिथि में परिवर्तन",
      "notice": "notice_8823220659.pdf",
      "home": "1",
      "new": "1",
      "date": "2025-05-13 12:04:49"
    },
    {
      "title": "अति अल्पकालीन निविदा सूचना",
      "notice": "notice_6710366038.pdf",
      "home": "1",
      "new": "1",
      "date": "2025-05-10 06:39:49"
    },
    {
      "title": "पुस्तक क्रय हेतु निविदा आमंत्रण सूचना",
      "notice": "notice_2705483846.pdf",
      "home": "1",
      "new": "1",
      "date": "2025-01-18 04:06:08"
    },
    {
      "title": "सड़क सुरक्षा संकेतावली",
      "notice": "notice_6148551916.pdf",
      "home": "1",
      "new": "1",
      "date": "2025-01-18 04:03:12"
    },
    {
      "title": "Class Routine of 1st, 3rd and 5th Semester",
      "notice": "notice_4595841504.pdf",
      "home": "1",
      "new": "1",
      "date": "2024-11-07 10:56:11"
    },
    {
      "title": "Orientation Programme for Session : 2024-27 Students",
      "notice": "notice_5456916475.pdf",
      "home": "1",
      "new": "1",
      "date": "2024-09-10 10:57:14"
    },
    {
      "title": "Regarding Registration of Lateral Diploma Students",
      "notice": "notice_4465946876.pdf",
      "home": "1",
      "new": "1",
      "date": "2023-11-23 10:42:01"
    },
    {
      "title": "Regarding Registration of Regular Diploma Students",
      "notice": "notice_1394565575.pdf",
      "home": "1",
      "new": "1",
      "date": "2023-11-23 10:40:55"
    },
    {
      "title": "Mentors alloted to 1st Semester (2023-24) students.",
      "notice": "notice_9973190007.pdf",
      "home": "1",
      "new": "2",
      "date": "2023-08-26 01:53:52"
    },
    {
      "title": "Notice regarding beginning of 1st Year Classes of New Session 2023-24.",
      "notice": "notice_8496842505.pdf",
      "home": "1",
      "new": "2",
      "date": "2023-08-19 01:18:57"
    },
    {
      "title": "Notice regarding allotment of seats in the Hostel.",
      "notice": "notice_9781626360.pdf",
      "home": "1",
      "new": "2",
      "date": "2023-07-10 05:09:19"
    },
    {
      "title": "Routine of 2nd, 4th and 6th Semester (All Branch)",
      "notice": "notice_6632757592.pdf",
      "home": "1",
      "new": "2",
      "date": "2023-04-17 10:42:27"
    },
    {
      "title": "Notice regarding Class of 2nd and 4th Semester Student (All Branch)",
      "notice": "notice_3357944437.pdf",
      "home": "1",
      "new": "2",
      "date": "2023-04-12 04:32:40"
    },
    {
      "title": "Notice regarding Form fill up of 1st and 3rd Semester Students",
      "notice": "notice_9498266666.pdf",
      "home": "1",
      "new": "2",
      "date": "2023-03-01 12:10:48"
    },
    {
      "title": "Notice regarding admission in 3rd semester (2021-24) Batch.",
      "notice": "notice_9362459303.pdf",
      "home": "1",
      "new": "2",
      "date": "2023-02-17 04:16:20"
    },
    {
      "title": "AA LEVEL E-KALYAN NOTICE",
      "notice": "notice_4611365408.pdf",
      "home": "1",
      "new": "2",
      "date": "2023-02-16 11:45:14"
    },
    {
      "title": "NPCI not active account student list (E-Kalyan)",
      "notice": "notice_1755782808.pdf",
      "home": "1",
      "new": "2",
      "date": "2023-02-16 11:38:22"
    },
    {
      "title": "JUT Challan",
      "notice": "notice_2568261926.pdf",
      "home": "1",
      "new": "1",
      "date": "2023-01-07 04:07:26"
    },
    {
      "title": "JUT Registration Notice (2022-23) for Regular Students",
      "notice": "notice_6563323312.pdf",
      "home": "1",
      "new": "2",
      "date": "2023-01-07 04:06:42"
    },
    {
      "title": "JUT Registration Notice (2022-23) for Lateral Students",
      "notice": "notice_9939524065.pdf",
      "home": "1",
      "new": "2",
      "date": "2023-01-07 04:06:14"
    }
  ]

  const products = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      "id": 6,
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    },
    {
      "id": 7,
      "title": "White Gold Plated Princess",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3,
        "count": 400
      }
    },
    {
      "id": 8,
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "price": 10.99,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 1.9,
        "count": 100
      }
    },
    {
      "id": 9,
      "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "price": 64,
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "rating": {
        "rate": 3.3,
        "count": 203
      }
    },
    {
      "id": 10,
      "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "price": 109,
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 470
      }
    },
    {
      "id": 11,
      "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "price": 109,
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "rating": {
        "rate": 4.8,
        "count": 319
      }
    },
    {
      "id": 12,
      "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "price": 114,
      "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "rating": {
        "rate": 4.8,
        "count": 400
      }
    },
    {
      "id": 13,
      "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "price": 599,
      "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 250
      }
    },
    {
      "id": 14,
      "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      "price": 999.99,
      "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.2,
        "count": 140
      }
    },
    {
      "id": 15,
      "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "price": 56.99,
      "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      "rating": {
        "rate": 2.6,
        "count": 235
      }
    },
    {
      "id": 16,
      "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      "price": 29.95,
      "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 340
      }
    },
    {
      "id": 17,
      "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      "price": 39.99,
      "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      "rating": {
        "rate": 3.8,
        "count": 679
      }
    },
    {
      "id": 18,
      "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
      "price": 9.85,
      "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 130
      }
    },
    {
      "id": 19,
      "title": "Opna Women's Short Sleeve Moisture",
      "price": 7.95,
      "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.5,
        "count": 146
      }
    },
    {
      "id": 20,
      "title": "DANVOUY Womens T Shirt Casual Cotton Short",
      "price": 12.99,
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "rating": {
        "rate": 3.6,
        "count": 145
      }
    }
  ]


  const identity = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "completed": true
    },
    {
      "userId": 2,
      "id": 21,
      "title": "suscipit repellat esse quibusdam voluptatem incidunt",
      "completed": false
    },
    {
      "userId": 2,
      "id": 22,
      "title": "distinctio vitae autem nihil ut molestias quo",
      "completed": true
    },
    {
      "userId": 2,
      "id": 23,
      "title": "et itaque necessitatibus maxime molestiae qui quas velit",
      "completed": false
    },
    {
      "userId": 2,
      "id": 24,
      "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
      "completed": false
    },
    {
      "userId": 2,
      "id": 25,
      "title": "voluptas quo tenetur perspiciatis explicabo natus",
      "completed": true
    },
    {
      "userId": 2,
      "id": 26,
      "title": "aliquam aut quasi",
      "completed": true
    },
    {
      "userId": 2,
      "id": 27,
      "title": "veritatis pariatur delectus",
      "completed": true
    },
    {
      "userId": 2,
      "id": 28,
      "title": "nesciunt totam sit blanditiis sit",
      "completed": false
    },
    {
      "userId": 2,
      "id": 29,
      "title": "laborum aut in quam",
      "completed": false
    },
    {
      "userId": 2,
      "id": 30,
      "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
      "completed": true
    },
    {
      "userId": 2,
      "id": 31,
      "title": "repudiandae totam in est sint facere fuga",
      "completed": false
    },
    {
      "userId": 2,
      "id": 32,
      "title": "earum doloribus ea doloremque quis",
      "completed": false
    },
    {
      "userId": 2,
      "id": 33,
      "title": "sint sit aut vero",
      "completed": false
    },
    {
      "userId": 2,
      "id": 34,
      "title": "porro aut necessitatibus eaque distinctio",
      "completed": false
    },
    {
      "userId": 2,
      "id": 35,
      "title": "repellendus veritatis molestias dicta incidunt",
      "completed": true
    },
    {
      "userId": 2,
      "id": 36,
      "title": "excepturi deleniti adipisci voluptatem et neque optio illum ad",
      "completed": true
    },
    {
      "userId": 2,
      "id": 37,
      "title": "sunt cum tempora",
      "completed": false
    },
    {
      "userId": 2,
      "id": 38,
      "title": "totam quia non",
      "completed": false
    },
    {
      "userId": 2,
      "id": 39,
      "title": "doloremque quibusdam asperiores libero corrupti illum qui omnis",
      "completed": false
    },
    {
      "userId": 2,
      "id": 40,
      "title": "totam atque quo nesciunt",
      "completed": true
    },
    {
      "userId": 3,
      "id": 41,
      "title": "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
      "completed": false
    },
    {
      "userId": 3,
      "id": 42,
      "title": "rerum perferendis error quia ut eveniet",
      "completed": false
    },
    {
      "userId": 3,
      "id": 43,
      "title": "tempore ut sint quis recusandae",
      "completed": true
    },
    {
      "userId": 3,
      "id": 44,
      "title": "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
      "completed": true
    },
    {
      "userId": 3,
      "id": 45,
      "title": "velit soluta adipisci molestias reiciendis harum",
      "completed": false
    },
    {
      "userId": 3,
      "id": 46,
      "title": "vel voluptatem repellat nihil placeat corporis",
      "completed": false
    },
    {
      "userId": 3,
      "id": 47,
      "title": "nam qui rerum fugiat accusamus",
      "completed": false
    },
    {
      "userId": 3,
      "id": 48,
      "title": "sit reprehenderit omnis quia",
      "completed": false
    },
    {
      "userId": 3,
      "id": 49,
      "title": "ut necessitatibus aut maiores debitis officia blanditiis velit et",
      "completed": false
    },
    {
      "userId": 3,
      "id": 50,
      "title": "cupiditate necessitatibus ullam aut quis dolor voluptate",
      "completed": true
    },
    {
      "userId": 3,
      "id": 51,
      "title": "distinctio exercitationem ab doloribus",
      "completed": false
    },
    {
      "userId": 3,
      "id": 52,
      "title": "nesciunt dolorum quis recusandae ad pariatur ratione",
      "completed": false
    },
    {
      "userId": 3,
      "id": 53,
      "title": "qui labore est occaecati recusandae aliquid quam",
      "completed": false
    },
    {
      "userId": 3,
      "id": 54,
      "title": "quis et est ut voluptate quam dolor",
      "completed": true
    },
    {
      "userId": 3,
      "id": 55,
      "title": "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
      "completed": true
    },
    {
      "userId": 3,
      "id": 56,
      "title": "deleniti ea temporibus enim",
      "completed": true
    },
    {
      "userId": 3,
      "id": 57,
      "title": "pariatur et magnam ea doloribus similique voluptatem rerum quia",
      "completed": false
    },
    {
      "userId": 3,
      "id": 58,
      "title": "est dicta totam qui explicabo doloribus qui dignissimos",
      "completed": false
    },
    {
      "userId": 3,
      "id": 59,
      "title": "perspiciatis velit id laborum placeat iusto et aliquam odio",
      "completed": false
    },
    {
      "userId": 3,
      "id": 60,
      "title": "et sequi qui architecto ut adipisci",
      "completed": true
    },
    {
      "userId": 4,
      "id": 61,
      "title": "odit optio omnis qui sunt",
      "completed": true
    },
    {
      "userId": 4,
      "id": 62,
      "title": "et placeat et tempore aspernatur sint numquam",
      "completed": false
    },
    {
      "userId": 4,
      "id": 63,
      "title": "doloremque aut dolores quidem fuga qui nulla",
      "completed": true
    },
    {
      "userId": 4,
      "id": 64,
      "title": "voluptas consequatur qui ut quia magnam nemo esse",
      "completed": false
    },
    {
      "userId": 4,
      "id": 65,
      "title": "fugiat pariatur ratione ut asperiores necessitatibus magni",
      "completed": false
    },
    {
      "userId": 4,
      "id": 66,
      "title": "rerum eum molestias autem voluptatum sit optio",
      "completed": false
    },
    {
      "userId": 4,
      "id": 67,
      "title": "quia voluptatibus voluptatem quos similique maiores repellat",
      "completed": false
    },
    {
      "userId": 4,
      "id": 68,
      "title": "aut id perspiciatis voluptatem iusto",
      "completed": false
    },
    {
      "userId": 4,
      "id": 69,
      "title": "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
      "completed": false
    },
    {
      "userId": 4,
      "id": 70,
      "title": "ut sequi accusantium et mollitia delectus sunt",
      "completed": false
    },
    {
      "userId": 4,
      "id": 71,
      "title": "aut velit saepe ullam",
      "completed": false
    },
    {
      "userId": 4,
      "id": 72,
      "title": "praesentium facilis facere quis harum voluptatibus voluptatem eum",
      "completed": false
    },
    {
      "userId": 4,
      "id": 73,
      "title": "sint amet quia totam corporis qui exercitationem commodi",
      "completed": true
    },
    {
      "userId": 4,
      "id": 74,
      "title": "expedita tempore nobis eveniet laborum maiores",
      "completed": false
    },
    {
      "userId": 4,
      "id": 75,
      "title": "occaecati adipisci est possimus totam",
      "completed": false
    },
    {
      "userId": 4,
      "id": 76,
      "title": "sequi dolorem sed",
      "completed": true
    },
    {
      "userId": 4,
      "id": 77,
      "title": "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
      "completed": false
    },
    {
      "userId": 4,
      "id": 78,
      "title": "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
      "completed": false
    },
    {
      "userId": 4,
      "id": 79,
      "title": "eum ipsa maxime ut",
      "completed": true
    },
    {
      "userId": 4,
      "id": 80,
      "title": "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
      "completed": true
    },
    {
      "userId": 5,
      "id": 81,
      "title": "suscipit qui totam",
      "completed": true
    },
    {
      "userId": 5,
      "id": 82,
      "title": "voluptates eum voluptas et dicta",
      "completed": false
    },
    {
      "userId": 5,
      "id": 83,
      "title": "quidem at rerum quis ex aut sit quam",
      "completed": true
    },
    {
      "userId": 5,
      "id": 84,
      "title": "sunt veritatis ut voluptate",
      "completed": false
    },
    {
      "userId": 5,
      "id": 85,
      "title": "et quia ad iste a",
      "completed": true
    },
    {
      "userId": 5,
      "id": 86,
      "title": "incidunt ut saepe autem",
      "completed": true
    },
    {
      "userId": 5,
      "id": 87,
      "title": "laudantium quae eligendi consequatur quia et vero autem",
      "completed": true
    },
    {
      "userId": 5,
      "id": 88,
      "title": "vitae aut excepturi laboriosam sint aliquam et et accusantium",
      "completed": false
    },
    {
      "userId": 5,
      "id": 89,
      "title": "sequi ut omnis et",
      "completed": true
    },
    {
      "userId": 5,
      "id": 90,
      "title": "molestiae nisi accusantium tenetur dolorem et",
      "completed": true
    },
    {
      "userId": 5,
      "id": 91,
      "title": "nulla quis consequatur saepe qui id expedita",
      "completed": true
    },
    {
      "userId": 5,
      "id": 92,
      "title": "in omnis laboriosam",
      "completed": true
    },
    {
      "userId": 5,
      "id": 93,
      "title": "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
      "completed": true
    },
    {
      "userId": 5,
      "id": 94,
      "title": "facilis modi saepe mollitia",
      "completed": false
    },
    {
      "userId": 5,
      "id": 95,
      "title": "vel nihil et molestiae iusto assumenda nemo quo ut",
      "completed": true
    },
    {
      "userId": 5,
      "id": 96,
      "title": "nobis suscipit ducimus enim asperiores voluptas",
      "completed": false
    },
    {
      "userId": 5,
      "id": 97,
      "title": "dolorum laboriosam eos qui iure aliquam",
      "completed": false
    },
    {
      "userId": 5,
      "id": 98,
      "title": "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
      "completed": true
    },
    {
      "userId": 5,
      "id": 99,
      "title": "neque voluptates ratione",
      "completed": false
    },
    {
      "userId": 5,
      "id": 100,
      "title": "excepturi a et neque qui expedita vel voluptate",
      "completed": false
    },
    {
      "userId": 6,
      "id": 101,
      "title": "explicabo enim cumque porro aperiam occaecati minima",
      "completed": false
    },
    {
      "userId": 6,
      "id": 102,
      "title": "sed ab consequatur",
      "completed": false
    },
    {
      "userId": 6,
      "id": 103,
      "title": "non sunt delectus illo nulla tenetur enim omnis",
      "completed": false
    },
    {
      "userId": 6,
      "id": 104,
      "title": "excepturi non laudantium quo",
      "completed": false
    },
    {
      "userId": 6,
      "id": 105,
      "title": "totam quia dolorem et illum repellat voluptas optio",
      "completed": true
    },
    {
      "userId": 6,
      "id": 106,
      "title": "ad illo quis voluptatem temporibus",
      "completed": true
    },
    {
      "userId": 6,
      "id": 107,
      "title": "praesentium facilis omnis laudantium fugit ad iusto nihil nesciunt",
      "completed": false
    },
    {
      "userId": 6,
      "id": 108,
      "title": "a eos eaque nihil et exercitationem incidunt delectus",
      "completed": true
    },
    {
      "userId": 6,
      "id": 109,
      "title": "autem temporibus harum quisquam in culpa",
      "completed": true
    },
    {
      "userId": 6,
      "id": 110,
      "title": "aut aut ea corporis",
      "completed": true
    },
    {
      "userId": 6,
      "id": 111,
      "title": "magni accusantium labore et id quis provident",
      "completed": false
    },
    {
      "userId": 6,
      "id": 112,
      "title": "consectetur impedit quisquam qui deserunt non rerum consequuntur eius",
      "completed": false
    },
    {
      "userId": 6,
      "id": 113,
      "title": "quia atque aliquam sunt impedit voluptatum rerum assumenda nisi",
      "completed": false
    },
    {
      "userId": 6,
      "id": 114,
      "title": "cupiditate quos possimus corporis quisquam exercitationem beatae",
      "completed": false
    },
    {
      "userId": 6,
      "id": 115,
      "title": "sed et ea eum",
      "completed": false
    },
    {
      "userId": 6,
      "id": 116,
      "title": "ipsa dolores vel facilis ut",
      "completed": true
    },
    {
      "userId": 6,
      "id": 117,
      "title": "sequi quae est et qui qui eveniet asperiores",
      "completed": false
    },
    {
      "userId": 6,
      "id": 118,
      "title": "quia modi consequatur vero fugiat",
      "completed": false
    },
    {
      "userId": 6,
      "id": 119,
      "title": "corporis ducimus ea perspiciatis iste",
      "completed": false
    },
    {
      "userId": 6,
      "id": 120,
      "title": "dolorem laboriosam vel voluptas et aliquam quasi",
      "completed": false
    },
    {
      "userId": 7,
      "id": 121,
      "title": "inventore aut nihil minima laudantium hic qui omnis",
      "completed": true
    },
    {
      "userId": 7,
      "id": 122,
      "title": "provident aut nobis culpa",
      "completed": true
    },
    {
      "userId": 7,
      "id": 123,
      "title": "esse et quis iste est earum aut impedit",
      "completed": false
    },
    {
      "userId": 7,
      "id": 124,
      "title": "qui consectetur id",
      "completed": false
    },
    {
      "userId": 7,
      "id": 125,
      "title": "aut quasi autem iste tempore illum possimus",
      "completed": false
    },
    {
      "userId": 7,
      "id": 126,
      "title": "ut asperiores perspiciatis veniam ipsum rerum saepe",
      "completed": true
    },
    {
      "userId": 7,
      "id": 127,
      "title": "voluptatem libero consectetur rerum ut",
      "completed": true
    },
    {
      "userId": 7,
      "id": 128,
      "title": "eius omnis est qui voluptatem autem",
      "completed": false
    },
    {
      "userId": 7,
      "id": 129,
      "title": "rerum culpa quis harum",
      "completed": false
    },
    {
      "userId": 7,
      "id": 130,
      "title": "nulla aliquid eveniet harum laborum libero alias ut unde",
      "completed": true
    },
    {
      "userId": 7,
      "id": 131,
      "title": "qui ea incidunt quis",
      "completed": false
    },
    {
      "userId": 7,
      "id": 132,
      "title": "qui molestiae voluptatibus velit iure harum quisquam",
      "completed": true
    },
    {
      "userId": 7,
      "id": 133,
      "title": "et labore eos enim rerum consequatur sunt",
      "completed": true
    },
    {
      "userId": 7,
      "id": 134,
      "title": "molestiae doloribus et laborum quod ea",
      "completed": false
    },
    {
      "userId": 7,
      "id": 135,
      "title": "facere ipsa nam eum voluptates reiciendis vero qui",
      "completed": false
    },
    {
      "userId": 7,
      "id": 136,
      "title": "asperiores illo tempora fuga sed ut quasi adipisci",
      "completed": false
    },
    {
      "userId": 7,
      "id": 137,
      "title": "qui sit non",
      "completed": false
    },
    {
      "userId": 7,
      "id": 138,
      "title": "placeat minima consequatur rem qui ut",
      "completed": true
    },
    {
      "userId": 7,
      "id": 139,
      "title": "consequatur doloribus id possimus voluptas a voluptatem",
      "completed": false
    },
    {
      "userId": 7,
      "id": 140,
      "title": "aut consectetur in blanditiis deserunt quia sed laboriosam",
      "completed": true
    },
    {
      "userId": 8,
      "id": 141,
      "title": "explicabo consectetur debitis voluptates quas quae culpa rerum non",
      "completed": true
    },
    {
      "userId": 8,
      "id": 142,
      "title": "maiores accusantium architecto necessitatibus reiciendis ea aut",
      "completed": true
    },
    {
      "userId": 8,
      "id": 143,
      "title": "eum non recusandae cupiditate animi",
      "completed": false
    },
    {
      "userId": 8,
      "id": 144,
      "title": "ut eum exercitationem sint",
      "completed": false
    },
    {
      "userId": 8,
      "id": 145,
      "title": "beatae qui ullam incidunt voluptatem non nisi aliquam",
      "completed": false
    },
    {
      "userId": 8,
      "id": 146,
      "title": "molestiae suscipit ratione nihil odio libero impedit vero totam",
      "completed": true
    },
    {
      "userId": 8,
      "id": 147,
      "title": "eum itaque quod reprehenderit et facilis dolor autem ut",
      "completed": true
    },
    {
      "userId": 8,
      "id": 148,
      "title": "esse quas et quo quasi exercitationem",
      "completed": false
    },
    {
      "userId": 8,
      "id": 149,
      "title": "animi voluptas quod perferendis est",
      "completed": false
    },
    {
      "userId": 8,
      "id": 150,
      "title": "eos amet tempore laudantium fugit a",
      "completed": false
    },
    {
      "userId": 8,
      "id": 151,
      "title": "accusamus adipisci dicta qui quo ea explicabo sed vero",
      "completed": true
    },
    {
      "userId": 8,
      "id": 152,
      "title": "odit eligendi recusandae doloremque cumque non",
      "completed": false
    },
    {
      "userId": 8,
      "id": 153,
      "title": "ea aperiam consequatur qui repellat eos",
      "completed": false
    },
    {
      "userId": 8,
      "id": 154,
      "title": "rerum non ex sapiente",
      "completed": true
    },
    {
      "userId": 8,
      "id": 155,
      "title": "voluptatem nobis consequatur et assumenda magnam",
      "completed": true
    },
    {
      "userId": 8,
      "id": 156,
      "title": "nam quia quia nulla repellat assumenda quibusdam sit nobis",
      "completed": true
    },
    {
      "userId": 8,
      "id": 157,
      "title": "dolorem veniam quisquam deserunt repellendus",
      "completed": true
    },
    {
      "userId": 8,
      "id": 158,
      "title": "debitis vitae delectus et harum accusamus aut deleniti a",
      "completed": true
    },
    {
      "userId": 8,
      "id": 159,
      "title": "debitis adipisci quibusdam aliquam sed dolore ea praesentium nobis",
      "completed": true
    },
    {
      "userId": 8,
      "id": 160,
      "title": "et praesentium aliquam est",
      "completed": false
    },
    {
      "userId": 9,
      "id": 161,
      "title": "ex hic consequuntur earum omnis alias ut occaecati culpa",
      "completed": true
    },
    {
      "userId": 9,
      "id": 162,
      "title": "omnis laboriosam molestias animi sunt dolore",
      "completed": true
    },
    {
      "userId": 9,
      "id": 163,
      "title": "natus corrupti maxime laudantium et voluptatem laboriosam odit",
      "completed": false
    },
    {
      "userId": 9,
      "id": 164,
      "title": "reprehenderit quos aut aut consequatur est sed",
      "completed": false
    },
    {
      "userId": 9,
      "id": 165,
      "title": "fugiat perferendis sed aut quidem",
      "completed": false
    },
    {
      "userId": 9,
      "id": 166,
      "title": "quos quo possimus suscipit minima ut",
      "completed": false
    },
    {
      "userId": 9,
      "id": 167,
      "title": "et quis minus quo a asperiores molestiae",
      "completed": false
    },
    {
      "userId": 9,
      "id": 168,
      "title": "recusandae quia qui sunt libero",
      "completed": false
    },
    {
      "userId": 9,
      "id": 169,
      "title": "ea odio perferendis officiis",
      "completed": true
    },
    {
      "userId": 9,
      "id": 170,
      "title": "quisquam aliquam quia doloribus aut",
      "completed": false
    },
    {
      "userId": 9,
      "id": 171,
      "title": "fugiat aut voluptatibus corrupti deleniti velit iste odio",
      "completed": true
    },
    {
      "userId": 9,
      "id": 172,
      "title": "et provident amet rerum consectetur et voluptatum",
      "completed": false
    },
    {
      "userId": 9,
      "id": 173,
      "title": "harum ad aperiam quis",
      "completed": false
    },
    {
      "userId": 9,
      "id": 174,
      "title": "similique aut quo",
      "completed": false
    },
    {
      "userId": 9,
      "id": 175,
      "title": "laudantium eius officia perferendis provident perspiciatis asperiores",
      "completed": true
    },
    {
      "userId": 9,
      "id": 176,
      "title": "magni soluta corrupti ut maiores rem quidem",
      "completed": false
    },
    {
      "userId": 9,
      "id": 177,
      "title": "et placeat temporibus voluptas est tempora quos quibusdam",
      "completed": false
    },
    {
      "userId": 9,
      "id": 178,
      "title": "nesciunt itaque commodi tempore",
      "completed": true
    },
    {
      "userId": 9,
      "id": 179,
      "title": "omnis consequuntur cupiditate impedit itaque ipsam quo",
      "completed": true
    },
    {
      "userId": 9,
      "id": 180,
      "title": "debitis nisi et dolorem repellat et",
      "completed": true
    },
    {
      "userId": 10,
      "id": 181,
      "title": "ut cupiditate sequi aliquam fuga maiores",
      "completed": false
    },
    {
      "userId": 10,
      "id": 182,
      "title": "inventore saepe cumque et aut illum enim",
      "completed": true
    },
    {
      "userId": 10,
      "id": 183,
      "title": "omnis nulla eum aliquam distinctio",
      "completed": true
    },
    {
      "userId": 10,
      "id": 184,
      "title": "molestias modi perferendis perspiciatis",
      "completed": false
    },
    {
      "userId": 10,
      "id": 185,
      "title": "voluptates dignissimos sed doloribus animi quaerat aut",
      "completed": false
    },
    {
      "userId": 10,
      "id": 186,
      "title": "explicabo odio est et",
      "completed": false
    },
    {
      "userId": 10,
      "id": 187,
      "title": "consequuntur animi possimus",
      "completed": false
    },
    {
      "userId": 10,
      "id": 188,
      "title": "vel non beatae est",
      "completed": true
    },
    {
      "userId": 10,
      "id": 189,
      "title": "culpa eius et voluptatem et",
      "completed": true
    },
    {
      "userId": 10,
      "id": 190,
      "title": "accusamus sint iusto et voluptatem exercitationem",
      "completed": true
    },
    {
      "userId": 10,
      "id": 191,
      "title": "temporibus atque distinctio omnis eius impedit tempore molestias pariatur",
      "completed": true
    },
    {
      "userId": 10,
      "id": 192,
      "title": "ut quas possimus exercitationem sint voluptates",
      "completed": false
    },
    {
      "userId": 10,
      "id": 193,
      "title": "rerum debitis voluptatem qui eveniet tempora distinctio a",
      "completed": true
    },
    {
      "userId": 10,
      "id": 194,
      "title": "sed ut vero sit molestiae",
      "completed": false
    },
    {
      "userId": 10,
      "id": 195,
      "title": "rerum ex veniam mollitia voluptatibus pariatur",
      "completed": true
    },
    {
      "userId": 10,
      "id": 196,
      "title": "consequuntur aut ut fugit similique",
      "completed": true
    },
    {
      "userId": 10,
      "id": 197,
      "title": "dignissimos quo nobis earum saepe",
      "completed": true
    },
    {
      "userId": 10,
      "id": 198,
      "title": "quis eius est sint explicabo",
      "completed": true
    },
    {
      "userId": 10,
      "id": 199,
      "title": "numquam repellendus a magnam",
      "completed": true
    },
    {
      "userId": 10,
      "id": 200,
      "title": "ipsam aperiam voluptates qui",
      "completed": false
    }
  ]

  const dummy = {
    "products": [
      {
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "category": "beauty",
        "price": 9.99,
        "discountPercentage": 10.48,
        "rating": 2.56,
        "stock": 99,
        "tags": [
          "beauty",
          "mascara"
        ],
        "brand": "Essence",
        "sku": "BEA-ESS-ESS-001",
        "weight": 4,
        "dimensions": {
          "width": 15.14,
          "height": 13.08,
          "depth": 22.99
        },
        "warrantyInformation": "1 week warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 3,
            "comment": "Would not recommend!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Collins",
            "reviewerEmail": "eleanor.collins@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Very satisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Lucas Gordon",
            "reviewerEmail": "lucas.gordon@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Collins",
            "reviewerEmail": "eleanor.collins@x.dummyjson.com"
          }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "5784719087687",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
      },
      {
        "id": 2,
        "title": "Eyeshadow Palette with Mirror",
        "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        "category": "beauty",
        "price": 19.99,
        "discountPercentage": 18.19,
        "rating": 2.86,
        "stock": 34,
        "tags": [
          "beauty",
          "eyeshadow"
        ],
        "brand": "Glamour Beauty",
        "sku": "BEA-GLA-EYE-002",
        "weight": 9,
        "dimensions": {
          "width": 9.26,
          "height": 22.47,
          "depth": 27.67
        },
        "warrantyInformation": "1 year warranty",
        "shippingInformation": "Ships in 2 weeks",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Great product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Savannah Gomez",
            "reviewerEmail": "savannah.gomez@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Awesome product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Christian Perez",
            "reviewerEmail": "christian.perez@x.dummyjson.com"
          },
          {
            "rating": 1,
            "comment": "Poor quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Nicholas Bailey",
            "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
          }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 20,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "9170275171413",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
      },
      {
        "id": 3,
        "title": "Powder Canister",
        "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        "category": "beauty",
        "price": 14.99,
        "discountPercentage": 9.84,
        "rating": 4.64,
        "stock": 89,
        "tags": [
          "beauty",
          "face powder"
        ],
        "brand": "Velvet Touch",
        "sku": "BEA-VEL-POW-003",
        "weight": 8,
        "dimensions": {
          "width": 29.27,
          "height": 27.93,
          "depth": 20.59
        },
        "warrantyInformation": "3 months warranty",
        "shippingInformation": "Ships in 1-2 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 4,
            "comment": "Would buy again!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Alexander Jones",
            "reviewerEmail": "alexander.jones@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Elijah Cruz",
            "reviewerEmail": "elijah.cruz@x.dummyjson.com"
          },
          {
            "rating": 1,
            "comment": "Very dissatisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Avery Perez",
            "reviewerEmail": "avery.perez@x.dummyjson.com"
          }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 22,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "8418883906837",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
      },
      {
        "id": 4,
        "title": "Red Lipstick",
        "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        "category": "beauty",
        "price": 12.99,
        "discountPercentage": 12.16,
        "rating": 4.36,
        "stock": 91,
        "tags": [
          "beauty",
          "lipstick"
        ],
        "brand": "Chic Cosmetics",
        "sku": "BEA-CHI-LIP-004",
        "weight": 1,
        "dimensions": {
          "width": 18.11,
          "height": 28.38,
          "depth": 22.17
        },
        "warrantyInformation": "3 year warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 4,
            "comment": "Great product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Liam Garcia",
            "reviewerEmail": "liam.garcia@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Great product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Ruby Andrews",
            "reviewerEmail": "ruby.andrews@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Would buy again!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Clara Berry",
            "reviewerEmail": "clara.berry@x.dummyjson.com"
          }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 40,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "9467746727219",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
      },
      {
        "id": 5,
        "title": "Red Nail Polish",
        "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
        "category": "beauty",
        "price": 8.99,
        "discountPercentage": 11.44,
        "rating": 4.32,
        "stock": 79,
        "tags": [
          "beauty",
          "nail polish"
        ],
        "brand": "Nail Couture",
        "sku": "BEA-NAI-NAI-005",
        "weight": 8,
        "dimensions": {
          "width": 21.63,
          "height": 16.48,
          "depth": 29.84
        },
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 2,
            "comment": "Poor quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Benjamin Wilson",
            "reviewerEmail": "benjamin.wilson@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Great product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Liam Smith",
            "reviewerEmail": "liam.smith@x.dummyjson.com"
          },
          {
            "rating": 1,
            "comment": "Very unhappy with my purchase!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Clara Berry",
            "reviewerEmail": "clara.berry@x.dummyjson.com"
          }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 22,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "4063010628104",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
      },
      {
        "id": 6,
        "title": "Calvin Klein CK One",
        "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        "category": "fragrances",
        "price": 49.99,
        "discountPercentage": 1.89,
        "rating": 4.37,
        "stock": 29,
        "tags": [
          "fragrances",
          "perfumes"
        ],
        "brand": "Calvin Klein",
        "sku": "FRA-CAL-CAL-006",
        "weight": 7,
        "dimensions": {
          "width": 29.36,
          "height": 27.76,
          "depth": 20.72
        },
        "warrantyInformation": "1 week warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 2,
            "comment": "Very disappointed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Layla Young",
            "reviewerEmail": "layla.young@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Fast shipping!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Daniel Cook",
            "reviewerEmail": "daniel.cook@x.dummyjson.com"
          },
          {
            "rating": 3,
            "comment": "Not as described!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Jacob Cooper",
            "reviewerEmail": "jacob.cooper@x.dummyjson.com"
          }
        ],
        "returnPolicy": "90 days return policy",
        "minimumOrderQuantity": 9,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "2451534060749",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
      },
      {
        "id": 7,
        "title": "Chanel Coco Noir Eau De",
        "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
        "category": "fragrances",
        "price": 129.99,
        "discountPercentage": 16.51,
        "rating": 4.26,
        "stock": 58,
        "tags": [
          "fragrances",
          "perfumes"
        ],
        "brand": "Chanel",
        "sku": "FRA-CHA-CHA-007",
        "weight": 7,
        "dimensions": {
          "width": 24.5,
          "height": 25.7,
          "depth": 25.98
        },
        "warrantyInformation": "3 year warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 4,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Ruby Andrews",
            "reviewerEmail": "ruby.andrews@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Awesome product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Leah Henderson",
            "reviewerEmail": "leah.henderson@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Very happy with my purchase!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Xavier Wright",
            "reviewerEmail": "xavier.wright@x.dummyjson.com"
          }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 1,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "4091737746820",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
      },
      {
        "id": 8,
        "title": "Dior J'adore",
        "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
        "category": "fragrances",
        "price": 89.99,
        "discountPercentage": 14.72,
        "rating": 3.8,
        "stock": 98,
        "tags": [
          "fragrances",
          "perfumes"
        ],
        "brand": "Dior",
        "sku": "FRA-DIO-DIO-008",
        "weight": 4,
        "dimensions": {
          "width": 27.67,
          "height": 28.28,
          "depth": 11.83
        },
        "warrantyInformation": "1 week warranty",
        "shippingInformation": "Ships in 2 weeks",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Great value for money!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Nicholas Bailey",
            "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Great value for money!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Penelope Harper",
            "reviewerEmail": "penelope.harper@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Great product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Emma Miller",
            "reviewerEmail": "emma.miller@x.dummyjson.com"
          }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 10,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "1445086097250",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp"
      },
      {
        "id": 9,
        "title": "Dolce Shine Eau de",
        "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
        "category": "fragrances",
        "price": 69.99,
        "discountPercentage": 0.62,
        "rating": 3.96,
        "stock": 4,
        "tags": [
          "fragrances",
          "perfumes"
        ],
        "brand": "Dolce & Gabbana",
        "sku": "FRA-DOL-DOL-009",
        "weight": 6,
        "dimensions": {
          "width": 27.28,
          "height": 29.88,
          "depth": 18.3
        },
        "warrantyInformation": "3 year warranty",
        "shippingInformation": "Ships in 1 month",
        "availabilityStatus": "Low Stock",
        "reviews": [
          {
            "rating": 4,
            "comment": "Would buy again!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Mateo Bennett",
            "reviewerEmail": "mateo.bennett@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Highly recommended!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Nolan Gonzalez",
            "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Very happy with my purchase!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Aurora Lawson",
            "reviewerEmail": "aurora.lawson@x.dummyjson.com"
          }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 2,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "3023868210708",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp"
      },
      {
        "id": 10,
        "title": "Gucci Bloom Eau de",
        "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
        "category": "fragrances",
        "price": 79.99,
        "discountPercentage": 14.39,
        "rating": 2.74,
        "stock": 91,
        "tags": [
          "fragrances",
          "perfumes"
        ],
        "brand": "Gucci",
        "sku": "FRA-GUC-GUC-010",
        "weight": 7,
        "dimensions": {
          "width": 20.92,
          "height": 21.68,
          "depth": 11.2
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 1,
            "comment": "Very dissatisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Cameron Perez",
            "reviewerEmail": "cameron.perez@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Very happy with my purchase!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Daniel Cook",
            "reviewerEmail": "daniel.cook@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Addison Wright",
            "reviewerEmail": "addison.wright@x.dummyjson.com"
          }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 2,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "3170832177880",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp"
      },
      {
        "id": 11,
        "title": "Annibale Colombo Bed",
        "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
        "category": "furniture",
        "price": 1899.99,
        "discountPercentage": 8.57,
        "rating": 4.77,
        "stock": 88,
        "tags": [
          "furniture",
          "beds"
        ],
        "brand": "Annibale Colombo",
        "sku": "FUR-ANN-ANN-011",
        "weight": 10,
        "dimensions": {
          "width": 28.16,
          "height": 25.36,
          "depth": 17.28
        },
        "warrantyInformation": "1 year warranty",
        "shippingInformation": "Ships in 1 month",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 2,
            "comment": "Would not recommend!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Christopher West",
            "reviewerEmail": "christopher.west@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Vivian Carter",
            "reviewerEmail": "vivian.carter@x.dummyjson.com"
          },
          {
            "rating": 1,
            "comment": "Poor quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Mason Wright",
            "reviewerEmail": "mason.wright@x.dummyjson.com"
          }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 1,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "3610757456581",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
          "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
          "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
      },
      {
        "id": 12,
        "title": "Annibale Colombo Sofa",
        "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
        "category": "furniture",
        "price": 2499.99,
        "discountPercentage": 14.4,
        "rating": 3.92,
        "stock": 60,
        "tags": [
          "furniture",
          "sofas"
        ],
        "brand": "Annibale Colombo",
        "sku": "FUR-ANN-ANN-012",
        "weight": 6,
        "dimensions": {
          "width": 12.75,
          "height": 20.55,
          "depth": 19.06
        },
        "warrantyInformation": "Lifetime warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 3,
            "comment": "Very unhappy with my purchase!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Christian Perez",
            "reviewerEmail": "christian.perez@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Fast shipping!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Lillian Bishop",
            "reviewerEmail": "lillian.bishop@x.dummyjson.com"
          },
          {
            "rating": 1,
            "comment": "Poor quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Lillian Simmons",
            "reviewerEmail": "lillian.simmons@x.dummyjson.com"
          }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "1777662847736",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
          "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp",
          "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
      },
      {
        "id": 13,
        "title": "Bedside Table African Cherry",
        "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
        "category": "furniture",
        "price": 299.99,
        "discountPercentage": 19.09,
        "rating": 2.87,
        "stock": 64,
        "tags": [
          "furniture",
          "bedside tables"
        ],
        "brand": "Furniture Co.",
        "sku": "FUR-FUR-BED-013",
        "weight": 2,
        "dimensions": {
          "width": 13.47,
          "height": 24.99,
          "depth": 27.35
        },
        "warrantyInformation": "5 year warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 4,
            "comment": "Excellent quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Aaliyah Hanson",
            "reviewerEmail": "aaliyah.hanson@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Excellent quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Liam Smith",
            "reviewerEmail": "liam.smith@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Highly recommended!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Avery Barnes",
            "reviewerEmail": "avery.barnes@x.dummyjson.com"
          }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 3,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "6441287925979",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
          "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/2.webp",
          "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp"
      },
      {
        "id": 14,
        "title": "Knoll Saarinen Executive Conference Chair",
        "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
        "category": "furniture",
        "price": 499.99,
        "discountPercentage": 2.01,
        "rating": 4.88,
        "stock": 26,
        "tags": [
          "furniture",
          "office chairs"
        ],
        "brand": "Knoll",
        "sku": "FUR-KNO-KNO-014",
        "weight": 10,
        "dimensions": {
          "width": 13.81,
          "height": 7.5,
          "depth": 5.62
        },
        "warrantyInformation": "2 year warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 2,
            "comment": "Waste of money!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Ella Cook",
            "reviewerEmail": "ella.cook@x.dummyjson.com"
          },
          {
            "rating": 2,
            "comment": "Very dissatisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Clara Berry",
            "reviewerEmail": "clara.berry@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Would buy again!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Elena Long",
            "reviewerEmail": "elena.long@x.dummyjson.com"
          }
        ],
        "returnPolicy": "60 days return policy",
        "minimumOrderQuantity": 5,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "8919386859966",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp",
          "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp",
          "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp"
      },
      {
        "id": 15,
        "title": "Wooden Bathroom Sink With Mirror",
        "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
        "category": "furniture",
        "price": 799.99,
        "discountPercentage": 8.8,
        "rating": 3.59,
        "stock": 7,
        "tags": [
          "furniture",
          "bathroom"
        ],
        "brand": "Bath Trends",
        "sku": "FUR-BAT-WOO-015",
        "weight": 10,
        "dimensions": {
          "width": 7.98,
          "height": 8.88,
          "depth": 28.46
        },
        "warrantyInformation": "3 year warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "Low Stock",
        "reviews": [
          {
            "rating": 4,
            "comment": "Fast shipping!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Logan Torres",
            "reviewerEmail": "logan.torres@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Very pleased!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Aria Parker",
            "reviewerEmail": "aria.parker@x.dummyjson.com"
          },
          {
            "rating": 3,
            "comment": "Poor quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Dylan Wells",
            "reviewerEmail": "dylan.wells@x.dummyjson.com"
          }
        ],
        "returnPolicy": "60 days return policy",
        "minimumOrderQuantity": 2,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "1958104402873",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
          "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp",
          "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp"
      },
      {
        "id": 16,
        "title": "Apple",
        "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
        "category": "groceries",
        "price": 1.99,
        "discountPercentage": 12.62,
        "rating": 4.19,
        "stock": 8,
        "tags": [
          "fruits"
        ],
        "sku": "GRO-BRD-APP-016",
        "weight": 9,
        "dimensions": {
          "width": 13.66,
          "height": 11.01,
          "depth": 9.73
        },
        "warrantyInformation": "3 year warranty",
        "shippingInformation": "Ships in 2 weeks",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Very satisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Sophia Brown",
            "reviewerEmail": "sophia.brown@x.dummyjson.com"
          },
          {
            "rating": 1,
            "comment": "Very dissatisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Scarlett Bowman",
            "reviewerEmail": "scarlett.bowman@x.dummyjson.com"
          },
          {
            "rating": 3,
            "comment": "Very unhappy with my purchase!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "William Gonzalez",
            "reviewerEmail": "william.gonzalez@x.dummyjson.com"
          }
        ],
        "returnPolicy": "90 days return policy",
        "minimumOrderQuantity": 7,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "7962803553314",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"
      },
      {
        "id": 17,
        "title": "Beef Steak",
        "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
        "category": "groceries",
        "price": 12.99,
        "discountPercentage": 9.61,
        "rating": 4.47,
        "stock": 86,
        "tags": [
          "meat"
        ],
        "sku": "GRO-BRD-BEE-017",
        "weight": 10,
        "dimensions": {
          "width": 18.9,
          "height": 5.77,
          "depth": 18.57
        },
        "warrantyInformation": "3 year warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 3,
            "comment": "Would not recommend!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Tyler",
            "reviewerEmail": "eleanor.tyler@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Fast shipping!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Alexander Jones",
            "reviewerEmail": "alexander.jones@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Great value for money!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Natalie Harris",
            "reviewerEmail": "natalie.harris@x.dummyjson.com"
          }
        ],
        "returnPolicy": "60 days return policy",
        "minimumOrderQuantity": 43,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "5640063409695",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp"
      },
      {
        "id": 18,
        "title": "Cat Food",
        "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
        "category": "groceries",
        "price": 8.99,
        "discountPercentage": 9.58,
        "rating": 3.13,
        "stock": 46,
        "tags": [
          "pet supplies",
          "cat food"
        ],
        "sku": "GRO-BRD-FOO-018",
        "weight": 10,
        "dimensions": {
          "width": 18.08,
          "height": 9.26,
          "depth": 21.86
        },
        "warrantyInformation": "1 year warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 3,
            "comment": "Would not recommend!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Noah Lewis",
            "reviewerEmail": "noah.lewis@x.dummyjson.com"
          },
          {
            "rating": 3,
            "comment": "Very unhappy with my purchase!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Ruby Andrews",
            "reviewerEmail": "ruby.andrews@x.dummyjson.com"
          },
          {
            "rating": 2,
            "comment": "Very disappointed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Ethan Thompson",
            "reviewerEmail": "ethan.thompson@x.dummyjson.com"
          }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 18,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "1483991328610",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp"
      },
      {
        "id": 19,
        "title": "Chicken Meat",
        "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
        "category": "groceries",
        "price": 9.99,
        "discountPercentage": 13.7,
        "rating": 3.19,
        "stock": 97,
        "tags": [
          "meat"
        ],
        "sku": "GRO-BRD-CHI-019",
        "weight": 1,
        "dimensions": {
          "width": 11.03,
          "height": 22.11,
          "depth": 16.01
        },
        "warrantyInformation": "1 year warranty",
        "shippingInformation": "Ships in 1 month",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Great product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Mateo Bennett",
            "reviewerEmail": "mateo.bennett@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Highly recommended!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Jackson Evans",
            "reviewerEmail": "jackson.evans@x.dummyjson.com"
          },
          {
            "rating": 3,
            "comment": "Not worth the price!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Sadie Morales",
            "reviewerEmail": "sadie.morales@x.dummyjson.com"
          }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 22,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "8829514594521",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
          "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp"
      },
      {
        "id": 20,
        "title": "Cooking Oil",
        "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
        "category": "groceries",
        "price": 4.99,
        "discountPercentage": 9.33,
        "rating": 4.8,
        "stock": 10,
        "tags": [
          "cooking essentials"
        ],
        "sku": "GRO-BRD-COO-020",
        "weight": 5,
        "dimensions": {
          "width": 19.95,
          "height": 27.54,
          "depth": 24.86
        },
        "warrantyInformation": "Lifetime warranty",
        "shippingInformation": "Ships in 1-2 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Very happy with my purchase!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Victoria McDonald",
            "reviewerEmail": "victoria.mcdonald@x.dummyjson.com"
          },
          {
            "rating": 2,
            "comment": "Would not recommend!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Hazel Evans",
            "reviewerEmail": "hazel.evans@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Would buy again!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Zoe Bennett",
            "reviewerEmail": "zoe.bennett@x.dummyjson.com"
          }
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 46,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "4874727824518",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp"
      },
      {
        "id": 21,
        "title": "Cucumber",
        "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
        "category": "groceries",
        "price": 1.49,
        "discountPercentage": 0.16,
        "rating": 4.07,
        "stock": 84,
        "tags": [
          "vegetables"
        ],
        "sku": "GRO-BRD-CUC-021",
        "weight": 4,
        "dimensions": {
          "width": 12.8,
          "height": 28.38,
          "depth": 21.34
        },
        "warrantyInformation": "2 year warranty",
        "shippingInformation": "Ships in 1-2 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 4,
            "comment": "Great product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Lincoln Kelly",
            "reviewerEmail": "lincoln.kelly@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Great value for money!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Savannah Gomez",
            "reviewerEmail": "savannah.gomez@x.dummyjson.com"
          },
          {
            "rating": 2,
            "comment": "Poor quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "James Davis",
            "reviewerEmail": "james.davis@x.dummyjson.com"
          }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 2,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "5300066378225",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp"
      },
      {
        "id": 22,
        "title": "Dog Food",
        "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
        "category": "groceries",
        "price": 10.99,
        "discountPercentage": 10.27,
        "rating": 4.55,
        "stock": 71,
        "tags": [
          "pet supplies",
          "dog food"
        ],
        "sku": "GRO-BRD-FOO-022",
        "weight": 10,
        "dimensions": {
          "width": 16.93,
          "height": 27.15,
          "depth": 9.29
        },
        "warrantyInformation": "No warranty",
        "shippingInformation": "Ships in 1-2 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Excellent quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Nicholas Edwards",
            "reviewerEmail": "nicholas.edwards@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Awesome product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Zachary Lee",
            "reviewerEmail": "zachary.lee@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Great product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Nova Cooper",
            "reviewerEmail": "nova.cooper@x.dummyjson.com"
          }
        ],
        "returnPolicy": "60 days return policy",
        "minimumOrderQuantity": 43,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "5906686116469",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp"
      },
      {
        "id": 23,
        "title": "Eggs",
        "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
        "category": "groceries",
        "price": 2.99,
        "discountPercentage": 11.05,
        "rating": 2.53,
        "stock": 9,
        "tags": [
          "dairy"
        ],
        "sku": "GRO-BRD-EGG-023",
        "weight": 2,
        "dimensions": {
          "width": 11.42,
          "height": 7.44,
          "depth": 16.95
        },
        "warrantyInformation": "1 week warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 3,
            "comment": "Disappointing product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Penelope King",
            "reviewerEmail": "penelope.king@x.dummyjson.com"
          },
          {
            "rating": 3,
            "comment": "Poor quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Tyler",
            "reviewerEmail": "eleanor.tyler@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Very pleased!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Benjamin Foster",
            "reviewerEmail": "benjamin.foster@x.dummyjson.com"
          }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 32,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "3478638588469",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp"
      },
      {
        "id": 24,
        "title": "Fish Steak",
        "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
        "category": "groceries",
        "price": 14.99,
        "discountPercentage": 4.23,
        "rating": 3.78,
        "stock": 74,
        "tags": [
          "seafood"
        ],
        "sku": "GRO-BRD-FIS-024",
        "weight": 6,
        "dimensions": {
          "width": 14.95,
          "height": 26.31,
          "depth": 11.27
        },
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 2,
            "comment": "Would not buy again!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Caleb Perkins",
            "reviewerEmail": "caleb.perkins@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Excellent quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Isabella Jackson",
            "reviewerEmail": "isabella.jackson@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Great value for money!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Nathan Dixon",
            "reviewerEmail": "nathan.dixon@x.dummyjson.com"
          }
        ],
        "returnPolicy": "60 days return policy",
        "minimumOrderQuantity": 50,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "9595036192098",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp"
      },
      {
        "id": 25,
        "title": "Green Bell Pepper",
        "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
        "category": "groceries",
        "price": 1.29,
        "discountPercentage": 0.16,
        "rating": 3.25,
        "stock": 33,
        "tags": [
          "vegetables"
        ],
        "sku": "GRO-BRD-GRE-025",
        "weight": 2,
        "dimensions": {
          "width": 15.33,
          "height": 26.65,
          "depth": 14.44
        },
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 4,
            "comment": "Highly recommended!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Avery Carter",
            "reviewerEmail": "avery.carter@x.dummyjson.com"
          },
          {
            "rating": 3,
            "comment": "Would not recommend!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Henry Hill",
            "reviewerEmail": "henry.hill@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Excellent quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Addison Wright",
            "reviewerEmail": "addison.wright@x.dummyjson.com"
          }
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 12,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "2365227493323",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp"
      },
      {
        "id": 26,
        "title": "Green Chili Pepper",
        "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
        "category": "groceries",
        "price": 0.99,
        "discountPercentage": 1,
        "rating": 3.66,
        "stock": 3,
        "tags": [
          "vegetables"
        ],
        "sku": "GRO-BRD-GRE-026",
        "weight": 7,
        "dimensions": {
          "width": 15.38,
          "height": 18.12,
          "depth": 19.92
        },
        "warrantyInformation": "2 year warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "Low Stock",
        "reviews": [
          {
            "rating": 4,
            "comment": "Great product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Luna Russell",
            "reviewerEmail": "luna.russell@x.dummyjson.com"
          },
          {
            "rating": 1,
            "comment": "Waste of money!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Noah Lewis",
            "reviewerEmail": "noah.lewis@x.dummyjson.com"
          },
          {
            "rating": 3,
            "comment": "Very disappointed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Clara Berry",
            "reviewerEmail": "clara.berry@x.dummyjson.com"
          }
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 39,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "9335000538563",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp"
      },
      {
        "id": 27,
        "title": "Honey Jar",
        "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
        "category": "groceries",
        "price": 6.99,
        "discountPercentage": 14.4,
        "rating": 3.97,
        "stock": 34,
        "tags": [
          "condiments"
        ],
        "sku": "GRO-BRD-HON-027",
        "weight": 2,
        "dimensions": {
          "width": 9.28,
          "height": 21.72,
          "depth": 17.74
        },
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships in 1-2 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 1,
            "comment": "Very disappointed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Autumn Gomez",
            "reviewerEmail": "autumn.gomez@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Benjamin Wilson",
            "reviewerEmail": "benjamin.wilson@x.dummyjson.com"
          },
          {
            "rating": 2,
            "comment": "Very disappointed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Nicholas Edwards",
            "reviewerEmail": "nicholas.edwards@x.dummyjson.com"
          }
        ],
        "returnPolicy": "90 days return policy",
        "minimumOrderQuantity": 47,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "6354306346329",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp"
      },
      {
        "id": 28,
        "title": "Ice Cream",
        "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
        "category": "groceries",
        "price": 5.49,
        "discountPercentage": 8.69,
        "rating": 3.39,
        "stock": 27,
        "tags": [
          "desserts"
        ],
        "sku": "GRO-BRD-CRE-028",
        "weight": 1,
        "dimensions": {
          "width": 14.83,
          "height": 15.07,
          "depth": 24.2
        },
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships in 2 weeks",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Very pleased!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Elijah Cruz",
            "reviewerEmail": "elijah.cruz@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Excellent quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Jace Smith",
            "reviewerEmail": "jace.smith@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Sadie Morales",
            "reviewerEmail": "sadie.morales@x.dummyjson.com"
          }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 42,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "0788954559076",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
          "https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp",
          "https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp",
          "https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp"
      },
      {
        "id": 29,
        "title": "Juice",
        "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
        "category": "groceries",
        "price": 3.99,
        "discountPercentage": 12.06,
        "rating": 3.94,
        "stock": 50,
        "tags": [
          "beverages"
        ],
        "sku": "GRO-BRD-JUI-029",
        "weight": 1,
        "dimensions": {
          "width": 18.56,
          "height": 21.46,
          "depth": 28.02
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Excellent quality!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Nolan Gonzalez",
            "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Would buy again!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Bella Grant",
            "reviewerEmail": "bella.grant@x.dummyjson.com"
          },
          {
            "rating": 5,
            "comment": "Awesome product!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Aria Flores",
            "reviewerEmail": "aria.flores@x.dummyjson.com"
          }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 25,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "6936112580956",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp"
      },
      {
        "id": 30,
        "title": "Kiwi",
        "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
        "category": "groceries",
        "price": 2.49,
        "discountPercentage": 15.22,
        "rating": 4.93,
        "stock": 99,
        "tags": [
          "fruits"
        ],
        "sku": "GRO-BRD-KIW-030",
        "weight": 5,
        "dimensions": {
          "width": 19.4,
          "height": 18.67,
          "depth": 17.13
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 4,
            "comment": "Highly recommended!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Emily Brown",
            "reviewerEmail": "emily.brown@x.dummyjson.com"
          },
          {
            "rating": 2,
            "comment": "Would not buy again!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Jackson Morales",
            "reviewerEmail": "jackson.morales@x.dummyjson.com"
          },
          {
            "rating": 4,
            "comment": "Fast shipping!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Nora Russell",
            "reviewerEmail": "nora.russell@x.dummyjson.com"
          }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 30,
        "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "2530169917252",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp"
      }
    ],
    "total": 194,
    "skip": 0,
    "limit": 30
  }


  const basket = [
    {
      "id": 253,
      "title": "Classic Grey Hooded Sweatshirt",
      "slug": "classic-grey-hooded-sweatshirt",
      "price": 100,
      "description": "Default description",
      "category": {
        "id": 34,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.ytimg.com/vi/PBJ24T_2clc/maxresdefault.jpg"
      ],
      "creationAt": "2025-07-22T21:25:47.000Z",
      "updatedAt": "2025-07-23T02:36:02.000Z"
    },
    {
      "id": 254,
      "title": "Majestic Mountain Graphic T-Shirt",
      "slug": "majestic-mountain-graphic-t-shirt",
      "price": 40,
      "description": "Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.",
      "category": {
        "id": 34,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/QkIa5tT.jpeg",
        "https://i.imgur.com/jb5Yu0h.jpeg",
        "https://i.imgur.com/UlxxXyG.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:47.000Z",
      "updatedAt": "2025-07-23T02:54:26.000Z"
    },
    {
      "id": 255,
      "title": "Classic Red Pullover Hoodie",
      "slug": "classic-red-pullover-hoodie",
      "price": 10,
      "description": "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
      "category": {
        "id": 34,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/1twoaDy.jpeg",
        "https://i.imgur.com/FDwQgLy.jpeg",
        "https://i.imgur.com/kg1ZhhH.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:47.000Z",
      "updatedAt": "2025-07-22T21:25:47.000Z"
    },
    {
      "id": 256,
      "title": "Classic Black Hooded Sweatshirt",
      "slug": "classic-black-hooded-sweatshirt",
      "price": 79,
      "description": "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
      "category": {
        "id": 34,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/cSytoSD.jpeg",
        "https://i.imgur.com/WwKucXb.jpeg",
        "https://i.imgur.com/cE2Dxh9.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:47.000Z",
      "updatedAt": "2025-07-23T01:57:00.000Z"
    },
    {
      "id": 265,
      "title": "Classic Olive Chino Shorts",
      "slug": "classic-olive-chino-shorts",
      "price": 84,
      "description": "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
      "category": {
        "id": 34,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/UsFIvYs.jpeg",
        "https://i.imgur.com/YIq57b6.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:48.000Z",
      "updatedAt": "2025-07-22T21:25:48.000Z"
    },
    {
      "id": 266,
      "title": "Classic White Crew Neck T-Shirt",
      "slug": "classic-white-crew-neck-t-shirt",
      "price": 39,
      "description": "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
      "category": {
        "id": 34,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/axsyGpD.jpeg",
        "https://i.imgur.com/T8oq9X2.jpeg",
        "https://i.imgur.com/J6MinJn.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:48.000Z",
      "updatedAt": "2025-07-22T21:25:48.000Z"
    },
    {
      "id": 267,
      "title": "Classic High-Waisted Athletic Shorts",
      "slug": "classic-high-waisted-athletic-shorts",
      "price": 43,
      "description": "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
      "category": {
        "id": 34,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/eGOUveI.jpeg",
        "https://i.imgur.com/UcsGO7E.jpeg",
        "https://i.imgur.com/NLn4e7S.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:48.000Z",
      "updatedAt": "2025-07-22T21:25:48.000Z"
    },
    {
      "id": 268,
      "title": "Classic Black T-Shirt",
      "slug": "classic-black-t-shirt",
      "price": 35,
      "description": "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
      "category": {
        "id": 34,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/9DqEOV5.jpeg",
        "https://i.imgur.com/ae0AEYn.jpeg",
        "https://i.imgur.com/mZ4rUjj.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:48.000Z",
      "updatedAt": "2025-07-22T21:25:48.000Z"
    },
    {
      "id": 269,
      "title": "Classic White Tee - Timeless Style and Comfort",
      "slug": "classic-white-tee-timeless-style-and-comfort",
      "price": 73,
      "description": "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
      "category": {
        "id": 34,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/Y54Bt8J.jpeg",
        "https://i.imgur.com/SZPDSgy.jpeg",
        "https://i.imgur.com/sJv4Xx0.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:49.000Z",
      "updatedAt": "2025-07-22T21:25:49.000Z"
    },
    {
      "id": 270,
      "title": "Sleek White & Orange Wireless Gaming Controller",
      "slug": "sleek-white-orange-wireless-gaming-controller",
      "price": 69,
      "description": "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
      "category": {
        "id": 35,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/ZANVnHE.jpeg",
        "https://i.imgur.com/Ro5z6Tn.jpeg",
        "https://i.imgur.com/woA93Li.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:49.000Z",
      "updatedAt": "2025-07-22T21:25:49.000Z"
    },
    {
      "id": 271,
      "title": "Sleek Wireless Headphone & Inked Earbud Set",
      "slug": "sleek-wireless-headphone-inked-earbud-set",
      "price": 44,
      "description": "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
      "category": {
        "id": 35,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/yVeIeDa.jpeg",
        "https://i.imgur.com/jByJ4ih.jpeg",
        "https://i.imgur.com/KXj6Tpb.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:49.000Z",
      "updatedAt": "2025-07-22T21:25:49.000Z"
    },
    {
      "id": 272,
      "title": "Efficient 2-Slice Toaster",
      "slug": "efficient-2-slice-toaster",
      "price": 48,
      "description": "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
      "category": {
        "id": 35,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/keVCVIa.jpeg",
        "https://i.imgur.com/afHY7v2.jpeg",
        "https://i.imgur.com/yAOihUe.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:49.000Z",
      "updatedAt": "2025-07-22T21:25:49.000Z"
    },
    {
      "id": 273,
      "title": "Sleek Comfort-Fit Over-Ear Headphones",
      "slug": "sleek-comfort-fit-over-ear-headphones",
      "price": 28,
      "description": "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
      "category": {
        "id": 35,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/SolkFEB.jpeg",
        "https://i.imgur.com/KIGW49u.jpeg",
        "https://i.imgur.com/mWwek7p.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:49.000Z",
      "updatedAt": "2025-07-22T21:25:49.000Z"
    },
    {
      "id": 274,
      "title": "Sleek Wireless Computer Mouse",
      "slug": "sleek-wireless-computer-mouse",
      "price": 10,
      "description": "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
      "category": {
        "id": 35,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/w3Y8NwQ.jpeg",
        "https://i.imgur.com/WJFOGIC.jpeg",
        "https://i.imgur.com/dV4Nklf.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:49.000Z",
      "updatedAt": "2025-07-22T21:25:49.000Z"
    },
    {
      "id": 275,
      "title": "Sleek Modern Laptop with Ambient Lighting",
      "slug": "sleek-modern-laptop-with-ambient-lighting",
      "price": 43,
      "description": "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
      "category": {
        "id": 35,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/OKn1KFI.jpeg",
        "https://i.imgur.com/G4f21Ai.jpeg",
        "https://i.imgur.com/Z9oKRVJ.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:49.000Z",
      "updatedAt": "2025-07-22T21:25:49.000Z"
    },
    {
      "id": 276,
      "title": "Sleek Mirror Finish Phone Case",
      "slug": "sleek-mirror-finish-phone-case",
      "price": 27,
      "description": "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
      "category": {
        "id": 35,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/yb9UQKL.jpeg",
        "https://i.imgur.com/m2owtQG.jpeg",
        "https://i.imgur.com/bNiORct.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:49.000Z",
      "updatedAt": "2025-07-22T21:25:49.000Z"
    },
    {
      "id": 277,
      "title": "Sleek Modern Laptop for Professionals",
      "slug": "sleek-modern-laptop-for-professionals",
      "price": 97,
      "description": "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
      "category": {
        "id": 35,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/ItHcq7o.jpeg",
        "https://i.imgur.com/55GM3XZ.jpeg",
        "https://i.imgur.com/tcNJxoW.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:49.000Z",
      "updatedAt": "2025-07-22T21:25:49.000Z"
    },
    {
      "id": 278,
      "title": "Sleek Smartwatch with Vibrant Display",
      "slug": "sleek-smartwatch-with-vibrant-display",
      "price": 16,
      "description": "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
      "category": {
        "id": 35,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:49.000Z",
      "updatedAt": "2025-07-22T21:25:49.000Z"
    },
    {
      "id": 279,
      "title": "Stylish Red & Silver Over-Ear Headphones",
      "slug": "stylish-red-silver-over-ear-headphones",
      "price": 39,
      "description": "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
      "category": {
        "id": 35,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.imgur.com/YaSqa06.jpeg",
        "https://i.imgur.com/isQAliJ.jpeg",
        "https://i.imgur.com/5B8UQfh.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:50.000Z",
      "updatedAt": "2025-07-22T21:25:50.000Z"
    },
    {
      "id": 280,
      "title": "Sleek Modern Leather Sofa",
      "slug": "sleek-modern-leather-sofa",
      "price": 53,
      "description": "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
      "category": {
        "id": 36,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/Qphac99.jpeg",
        "https://i.imgur.com/dJjpEgG.jpeg",
        "https://i.imgur.com/MxJyADq.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:50.000Z",
      "updatedAt": "2025-07-22T21:25:50.000Z"
    },
    {
      "id": 281,
      "title": "Modern Elegance Teal Armchair",
      "slug": "modern-elegance-teal-armchair",
      "price": 25,
      "description": "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
      "category": {
        "id": 36,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/6wkyyIN.jpeg",
        "https://i.imgur.com/Ald3Rec.jpeg",
        "https://i.imgur.com/dIqo03c.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:50.000Z",
      "updatedAt": "2025-07-22T21:25:50.000Z"
    },
    {
      "id": 282,
      "title": "Elegant Golden-Base Stone Top Dining Table",
      "slug": "elegant-golden-base-stone-top-dining-table",
      "price": 66,
      "description": "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
      "category": {
        "id": 36,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/NWIJKUj.jpeg",
        "https://i.imgur.com/Jn1YSLk.jpeg",
        "https://i.imgur.com/VNZRvx5.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:50.000Z",
      "updatedAt": "2025-07-22T21:25:50.000Z"
    },
    {
      "id": 283,
      "title": "Modern Minimalist Workstation Setup",
      "slug": "modern-minimalist-workstation-setup",
      "price": 49,
      "description": "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
      "category": {
        "id": 36,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/3oXNBst.jpeg",
        "https://i.imgur.com/ErYYZnT.jpeg",
        "https://i.imgur.com/boBPwYW.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:50.000Z",
      "updatedAt": "2025-07-22T21:25:50.000Z"
    },
    {
      "id": 284,
      "title": "Futuristic Holographic Soccer Cleats",
      "slug": "futuristic-holographic-soccer-cleats",
      "price": 39,
      "description": "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
      "category": {
        "id": 37,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/qNOjJje.jpeg",
        "https://i.imgur.com/NjfCFnu.jpeg",
        "https://i.imgur.com/eYtvXS1.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:51.000Z",
      "updatedAt": "2025-07-22T21:25:51.000Z"
    },
    {
      "id": 285,
      "title": "Rainbow Glitter High Heels",
      "slug": "rainbow-glitter-high-heels",
      "price": 39,
      "description": "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
      "category": {
        "id": 37,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/62gGzeF.jpeg",
        "https://i.imgur.com/5MoPuFM.jpeg",
        "https://i.imgur.com/sUVj7pK.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:51.000Z",
      "updatedAt": "2025-07-22T21:25:51.000Z"
    },
    {
      "id": 286,
      "title": "Chic Summer Denim Espadrille Sandals",
      "slug": "chic-summer-denim-espadrille-sandals",
      "price": 33,
      "description": "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
      "category": {
        "id": 37,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/9qrmE1b.jpeg",
        "https://i.imgur.com/wqKxBVH.jpeg",
        "https://i.imgur.com/sWSV6DK.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:51.000Z",
      "updatedAt": "2025-07-22T21:25:51.000Z"
    },
    {
      "id": 287,
      "title": "Vibrant Runners: Bold Orange & Blue Sneakers",
      "slug": "vibrant-runners-bold-orange-blue-sneakers",
      "price": 27,
      "description": "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
      "category": {
        "id": 37,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/hKcMNJs.jpeg",
        "https://i.imgur.com/NYToymX.jpeg",
        "https://i.imgur.com/HiiapCt.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:51.000Z",
      "updatedAt": "2025-07-22T21:25:51.000Z"
    },
    {
      "id": 288,
      "title": "Elegant Solid Wood Dining Table",
      "slug": "elegant-solid-wood-dining-table",
      "price": 67,
      "description": "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
      "category": {
        "id": 36,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/4lTaHfF.jpeg",
        "https://i.imgur.com/JktHE1C.jpeg",
        "https://i.imgur.com/cQeXQMi.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:51.000Z",
      "updatedAt": "2025-07-22T21:25:51.000Z"
    },
    {
      "id": 289,
      "title": "Vibrant Pink Classic Sneakers",
      "slug": "vibrant-pink-classic-sneakers",
      "price": 84,
      "description": "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
      "category": {
        "id": 37,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/mcW42Gi.jpeg",
        "https://i.imgur.com/mhn7qsF.jpeg",
        "https://i.imgur.com/F8vhnFJ.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:51.000Z",
      "updatedAt": "2025-07-22T21:25:51.000Z"
    },
    {
      "id": 290,
      "title": "Modern Ergonomic Office Chair",
      "slug": "modern-ergonomic-office-chair",
      "price": 71,
      "description": "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
      "category": {
        "id": 36,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/3dU0m72.jpeg",
        "https://i.imgur.com/zPU3EVa.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:51.000Z",
      "updatedAt": "2025-07-22T21:25:51.000Z"
    },
    {
      "id": 291,
      "title": "Futuristic Silver and Gold High-Top Sneaker",
      "slug": "futuristic-silver-and-gold-high-top-sneaker",
      "price": 68,
      "description": "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
      "category": {
        "id": 37,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/npLfCGq.jpeg",
        "https://i.imgur.com/vYim3gj.jpeg",
        "https://i.imgur.com/HxuHwBO.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:51.000Z",
      "updatedAt": "2025-07-22T21:25:51.000Z"
    },
    {
      "id": 292,
      "title": "Mid-Century Modern Wooden Dining Table",
      "slug": "mid-century-modern-wooden-dining-table",
      "price": 24,
      "description": "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
      "category": {
        "id": 36,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/DMQHGA0.jpeg",
        "https://i.imgur.com/qrs9QBg.jpeg",
        "https://i.imgur.com/XVp8T1I.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:52.000Z",
      "updatedAt": "2025-07-22T21:25:52.000Z"
    },
    {
      "id": 293,
      "title": "Futuristic Chic High-Heel Boots",
      "slug": "futuristic-chic-high-heel-boots",
      "price": 36,
      "description": "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
      "category": {
        "id": 37,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/HqYqLnW.jpeg",
        "https://i.imgur.com/RlDGnZw.jpeg",
        "https://i.imgur.com/qa0O6fg.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:52.000Z",
      "updatedAt": "2025-07-22T21:25:52.000Z"
    },
    {
      "id": 294,
      "title": "Elegant Purple Leather Loafers",
      "slug": "elegant-purple-leather-loafers",
      "price": 17,
      "description": "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
      "category": {
        "id": 37,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/Au8J9sX.jpeg",
        "https://i.imgur.com/gdr8BW2.jpeg",
        "https://i.imgur.com/KDCZxnJ.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:52.000Z",
      "updatedAt": "2025-07-22T21:25:52.000Z"
    },
    {
      "id": 295,
      "title": "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
      "slug": "elegant-patent-leather-peep-toe-pumps-with-gold-tone-heel",
      "price": 53,
      "description": "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
      "category": {
        "id": 37,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/AzAY4Ed.jpeg",
        "https://i.imgur.com/umfnS9P.jpeg",
        "https://i.imgur.com/uFyuvLg.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:52.000Z",
      "updatedAt": "2025-07-22T21:25:52.000Z"
    },
    {
      "id": 296,
      "title": "Classic Blue Suede Casual Shoes",
      "slug": "classic-blue-suede-casual-shoes",
      "price": 39,
      "description": "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
      "category": {
        "id": 37,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://i.imgur.com/sC0ztOB.jpeg",
        "https://i.imgur.com/Jf9DL9R.jpeg",
        "https://i.imgur.com/R1IN95T.jpeg"
      ],
      "creationAt": "2025-07-22T21:25:52.000Z",
      "updatedAt": "2025-07-22T21:25:52.000Z"
    },
    {
      "id": 297,
      "title": "Sleek Futuristic Electric Bicycle",
      "slug": "sleek-futuristic-electric-bicycle",
      "price": 22,
      "description": "This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
      "category": {
        "id": 38,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-07-22T21:25:46.000Z",
        "updatedAt": "2025-07-22T22:46:23.000Z"
      },
      "images": [
        "https://i.imgur.com/BG8J0Fj.jpg",
        "https://i.imgur.com/ujHBpCX.jpg",
        "https://i.imgur.com/WHeVL9H.jpg"
      ],
      "creationAt": "2025-07-22T21:25:52.000Z",
      "updatedAt": "2025-07-22T21:25:52.000Z"
    },
    {
      "id": 298,
      "title": "Sleek All-Terrain Go-Kart",
      "slug": "sleek-all-terrain-go-kart",
      "price": 37,
      "description": "Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.",
      "category": {
        "id": 38,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-07-22T21:25:46.000Z",
        "updatedAt": "2025-07-22T22:46:23.000Z"
      },
      "images": [
        "https://i.imgur.com/Ex5x3IU.jpg",
        "https://i.imgur.com/z7wAQwe.jpg",
        "https://i.imgur.com/kc0Dj9S.jpg"
      ],
      "creationAt": "2025-07-22T21:25:52.000Z",
      "updatedAt": "2025-07-22T21:25:52.000Z"
    },
    {
      "id": 299,
      "title": "Radiant Citrus Eau de Parfum",
      "slug": "radiant-citrus-eau-de-parfum",
      "price": 73,
      "description": "Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, it's an olfactory delight that leaves a lasting, zesty impression.",
      "category": {
        "id": 38,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-07-22T21:25:46.000Z",
        "updatedAt": "2025-07-22T22:46:23.000Z"
      },
      "images": [
        "https://i.imgur.com/xPDwUb3.jpg",
        "https://i.imgur.com/3rfp691.jpg",
        "https://i.imgur.com/kG05a29.jpg"
      ],
      "creationAt": "2025-07-22T21:25:52.000Z",
      "updatedAt": "2025-07-22T21:25:52.000Z"
    },
    {
      "id": 300,
      "title": "Sleek Olive Green Hardshell Carry-On Luggage",
      "slug": "sleek-olive-green-hardshell-carry-on-luggage",
      "price": 48,
      "description": "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
      "category": {
        "id": 38,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-07-22T21:25:46.000Z",
        "updatedAt": "2025-07-22T22:46:23.000Z"
      },
      "images": [
        "https://i.imgur.com/jVfoZnP.jpg",
        "https://i.imgur.com/Tnl15XK.jpg",
        "https://i.imgur.com/7OqTPO6.jpg"
      ],
      "creationAt": "2025-07-22T21:25:52.000Z",
      "updatedAt": "2025-07-22T21:25:52.000Z"
    },
    {
      "id": 301,
      "title": "Chic Transparent Fashion Handbag",
      "slug": "chic-transparent-fashion-handbag",
      "price": 61,
      "description": "Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.",
      "category": {
        "id": 38,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-07-22T21:25:46.000Z",
        "updatedAt": "2025-07-22T22:46:23.000Z"
      },
      "images": [
        "https://i.imgur.com/Lqaqz59.jpg",
        "https://i.imgur.com/uSqWK0m.jpg",
        "https://i.imgur.com/atWACf1.jpg"
      ],
      "creationAt": "2025-07-22T21:25:53.000Z",
      "updatedAt": "2025-07-22T21:25:53.000Z"
    },
    {
      "id": 302,
      "title": "Elegant Glass Tumbler Set",
      "slug": "elegant-glass-tumbler-set",
      "price": 50,
      "description": "Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses, lending a modern touch to any table setting. Crafted with quality materials, these durable tumblers are designed to withstand daily use while maintaining their elegant appeal.",
      "category": {
        "id": 38,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-07-22T21:25:46.000Z",
        "updatedAt": "2025-07-22T22:46:23.000Z"
      },
      "images": [
        "https://i.imgur.com/TF0pXdL.jpg",
        "https://i.imgur.com/BLDByXP.jpg",
        "https://i.imgur.com/b7trwCv.jpg"
      ],
      "creationAt": "2025-07-22T21:25:53.000Z",
      "updatedAt": "2025-07-22T21:25:53.000Z"
    },
    {
      "id": 303,
      "title": "Trendy Pink-Tinted Sunglasses",
      "slug": "trendy-pink-tinted-sunglasses",
      "price": 38,
      "description": "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
      "category": {
        "id": 38,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-07-22T21:25:46.000Z",
        "updatedAt": "2025-07-22T22:46:23.000Z"
      },
      "images": [
        "https://i.imgur.com/0qQBkxX.jpg",
        "https://i.imgur.com/I5g1DoE.jpg",
        "https://i.imgur.com/myfFQBW.jpg"
      ],
      "creationAt": "2025-07-22T21:25:53.000Z",
      "updatedAt": "2025-07-22T21:25:53.000Z"
    },
    {
      "id": 319,
      "title": "Hanuman Beer Light",
      "slug": "hanuman-beer-light",
      "price": 22,
      "description": "Default description",
      "category": {
        "id": 34,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://i.ytimg.com/vi/PBJ24T_2clc/maxresdefault.jpg"
      ],
      "creationAt": "2025-07-23T01:28:08.000Z",
      "updatedAt": "2025-07-23T02:36:44.000Z"
    },
    {
      "id": 322,
      "title": "Superman123",
      "slug": "superman123",
      "price": 15,
      "description": "Superman poster from the newest movie of the character",
      "category": {
        "id": 36,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-07-22T21:25:45.000Z",
        "updatedAt": "2025-07-22T21:25:45.000Z"
      },
      "images": [
        "https://cineargentinohoy.com.ar/wp-content/uploads/2024/12/unnamed-4-691x1024.webp"
      ],
      "creationAt": "2025-07-23T02:57:36.000Z",
      "updatedAt": "2025-07-23T03:32:07.000Z"
    },
    {
      "id": 326,
      "title": "New Product",
      "slug": "new-product",
      "price": 10,
      "description": "A description",
      "category": {
        "id": 34,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-07-22T21:25:44.000Z",
        "updatedAt": "2025-07-22T21:25:44.000Z"
      },
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7UbrY0_fNYc-4VKDHs3hZSWSpCT2qDgkSQ&s"
      ],
      "creationAt": "2025-07-23T03:58:50.000Z",
      "updatedAt": "2025-07-23T03:58:50.000Z"
    }
  ]

  return (
    <div>
      {/* <h1>{name}</h1> 
       <p>Roll No.={rollNo}</p>
       <p>{isLogin}</p>
       {
        isLogin ? "hello" : "hii"

       }
        {
            isLogin
             ? 
            <Alert  variant={'success'}>
            Your are already login.
            </Alert>
            :
            <Alert  variant={'danger'}>
            Login Now
            </Alert>
        }

        <p>{friends[3]}</p>
        <p>{friends}</p>

       <p>{check}</p>
       <p>{friend}</p>
       <p>{mix}</p>
       <p>{array}</p> */}
      {/* <p>{array1}</p> */}
      {/* <p>{array2}</p>
       <p>{array3}</p>
       <p>{array4}</p>
       <p>{array5}</p>
       <p>{array6}</p>
       <p>{array6}</p>
       <p>{array7}</p>
       <p>{array8}</p>
       <p>{array9 }</p>
       <p>{reverseArray}</p>
       <p>{shiftArray}</p>
        <p>{sliceArray}</p>
        <p>{sorted}</p>
        <p>{book2}</p>
        <p>{letter}</p>
        <p>{water}</p>
        <p>{right}</p> */}

      {/* <p>{student.name}</p>
        <p>{JSON.stringify(student)}</p> */}

      <p>{students[0].name}</p>

      <Row>
        <Col>
          <ul>
            {
              students.map((data) => {
                return (
                  <li>{data.name}, {data.branch}, {data.roll}</li>
                )
              }

              )
            }
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <table>
            <tr>

              <th>notices</th>
              <th>date</th>

            </tr>
            {
              notices.map((data, index) => {
                return (
                  <tr>

                    <td>{index + 1}</td>
                    <td>{data.title} {data.new === "1" ? <img src="https://gpa.ac.in/new.gif" /> : ""}</td>
                    <td>{data.date}</td>


                  </tr>
                )
              }

              )
            }
          </table>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((data, index) => {
                  return (
                    <tr>

                      <td>{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.branch}</td>
                      <td>{data.roll}</td>
                    </tr>
                  )
                }

                )
              }
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          {
            notices.map((data, index) => {
              return (
                <Alert variant={'success'}>
                  <p>{data.home}</p>
                </Alert>
              )
            }

            )
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <table>
            <tr>
              <th>SL</th>
              <th>name</th>
              <th>branch</th>
              <th>roll</th>
            </tr>



            {
              students.map((data, index) => {
                return (
                  <tr>

                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.branch}</td>
                    <td>{data.roll}</td>
                  </tr>
                )
              }

              )
            }



          </table>
        </Col>
      </Row>




      <Row>
        {
          products.map((data, index) => {
            return (
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={data.image} />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          }

          )
        }
      </Row>


      <Row>
        {
          identity.map((data, index) => {
            return (
              <Col>
                <DropdownButton id="dropdown-item-button" title="Dropdown button">
                  <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                  <Dropdown.Item as="button">{data.userId}</Dropdown.Item>
                  <Dropdown.Item as="button">{data.title}</Dropdown.Item>
                  <Dropdown.Item as="button">{data.completed ? "COMPLETED" : "Not Completed yet"}</Dropdown.Item>
                </DropdownButton>
              </Col>
            )
          }
          )
        }
      </Row>

      <Row>
        {
          dummy.products.map((data, index) => {
            return (
              <Col>
                <div className="d-flex justify-content-around">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={data.qrCode} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>{data.id}</Card.Text>
                      <p>{data.comment}</p>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={data.qrCode} />
                    <Card.Body>
                      <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                      </Placeholder>
                      <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                      </Placeholder>
                      <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            )
          }
          )
        }
      </Row>



      <Row>
        {
          basket.map((data, index) => {
            return (

              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={data.images} />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.slug}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Creation at :- {data.creationAt}</ListGroup.Item>
                    <ListGroup.Item>Update At :- {data.updatedAt}</ListGroup.Item>
                    <ListGroup.Item>price:- Rs.{data.price}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>

              </Col>

            )
          }
          )
        }
      </Row>


    </div>
  )
}

export default Jsr

