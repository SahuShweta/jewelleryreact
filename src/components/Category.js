import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import slide3 from '../images/slide3.webp';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const Category = () => {

    const banners = [
        {
            "id": 1,
            "image": "bannerEarrings.webp",
            "productCategory": "Earring",
            "productForGender": "Female"
        },
        {
            "id": 2,
            "image": "bannerRings.webp",
            "productCategory": "Rings",
            "productForGender": "Female"
        },
        {
            "id": 3,
            "image": "bannerBangles.webp",
            "productCategory": "Bangles",
            "productForGender": "Female"
        },
        {
            "id": 4,
            "image": "bannerSets.webp",
            "productCategory": "Sets Collections",
            "productForGender": "Female"
        },
        {
            "id": 5,
            "image": "bannerNecklace.webp",
            "productCategory": "Necklace",
            "productForGender": "Female"
        },
        {
            "id": 6,
            "image": "manbanner.webp",
            "productCategory": "Mens Collections",
            "productForGender": "Male"
        }
    ]
    const products = [
        {
            "id": 1,
            "photo": [
                "f1.webp", "f2.webp",
            ],
            "name": "Aham bramhasmi moksh rudracks beads",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,

        },
        {
            "id": 2,
            "photo": [
                "f3.webp", "f4.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 3,
            "photo": [
                "f5.webp", "f6.webp",
            ],
            "name": " Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 4,
            "photo": [
                "f7.webp", "f8.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 5,
            "photo": [
                "f9.webp", "f10.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 6,
            "photo": [
                "f11.webp", "f12.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": false,
        },
        {
            "id": 7,
            "photo": [
                "f13.webp", "f14.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 8,
            "photo": [
                "f15.webp", "f16.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": false,
        },
        {
            "id": 9,
            "photo": [
                "f17.webp", "f18.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 10,
            "photo": [
                "f19.webp", "f20.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 11,
            "photo": [
                "f21.webp", "f22.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 12,
            "photo": [
                "f23.webp", "f24.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 13,
            "photo": [
                "f25.webp", "f26.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "price1": 1029,
            "price2": 929,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 14,
            "photo": [
                "e1.webp", "e2.webp",
            ],
            "name": "Halo Essence Floral Dangler Earrings",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 2399,
            "price2": 1439,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        }, {
            "id": 15,
            "photo": [
                "e3.webp", "e4.webp",
            ],
            "name": "Halo Essence Circular Disk Stud Earrings",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 1049,
            "price2": 629,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        }, {
            "id": 16,
            "photo": [
                "e5.webp", "e6.webp",
            ],
            "name": "Halo Essence Glory Statement Earrings",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 2549,
            "price2": 1529,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        }, {
            "id": 17,
            "photo": [
                "e7.webp", "e8.webp",
            ],
            "name": "Halo Essence Aureole Dangler Earrings",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 1349,
            "price2": 809,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        }, {
            "id": 18,
            "photo": [
                "e9.webp", "e10.webp",
            ],
            "name": "Halo Essence Brilliance Floral Ear Cuff Earrings",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 1399,
            "price2": 839,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        }, {
            "id": 19,
            "photo": [
                "e11.webp", "e12.webp",
            ],
            "name": "Halo Essence Aura Stud Earrings",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 1099,
            "price2": 659,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        }, {
            "id": 20,
            "photo": [
                "e13.webp", "e14.webp",
            ],
            "name": "Halo Essence Ring of Light Dangler Earrings",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 1899,
            "price2": 1139,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        }, {
            "id": 21,
            "photo": [
                "e15.webp", "e16.webp",
            ],
            "name": "Halo Essence Heart Dangler Earrings",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 2999,
            "price2": 1799,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        }, {
            "id": 22,
            "photo": [
                "e17.webp", "e18.webp",
            ],
            "name": "Halo Essence Rhombus Radiance Earrings",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 899,
            "price2": 539,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        }, {
            "id": 23,
            "photo": [
                "e19.webp", "e20.webp",
            ],
            "name": "Sparkling Elegance Sunray American Diamond Earrings",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 649,
            "price2": 389,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        }, {
            "id": 24,
            "photo": [
                "e21.webp", "e22.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 1029,
            "price2": 929,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        }, {
            "id": 25,
            "photo": [
                "e23.webp", "e24.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 1029,
            "price2": 929,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 26,
            "photo": [
                "e25.webp", "e26.webp",
            ],
            "name": "Halo Essence Floral Dangler Earrings",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 2399,
            "price2": 1439,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 27,
            "photo": [
                "e27.webp", "e28.webp",
            ],
            "name": "Halo Essence Floral Dangler Earrings",
            "productCategory": "Earring",
            "productForGender": "Female",
            "price1": 2399,
            "price2": 1439,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },

        {
            "id": 27,
            "photo": [
                "f27.webp", "f28.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 28,
            "photo": [
                "f29.webp", "f30.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 29,
            "photo": [
                "f31.webp", "f32.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 30,
            "photo": [
                "f33.webp", "f34.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },

        {
            "id": 31,
            "photo": [
                "m1.webp", "m2.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 1029,
            "price2": 598,
            "productCategory": "Mens collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": false,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 32,
            "photo": [
                "m3.webp", "m4.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 1029,
            "price2": 598,
            "productCategory": "Mens collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 33,
            "photo": [
                "m5.webp", "m6.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 1029,
            "price2": 598,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": false,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 34,
            "photo": [
                "m7.webp", "m8.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 35,
            "photo": [
                "m9.webp", "m10.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 36,
            "photo": [
                "m11.webp", "m12.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 37,
            "photo": [
                "m13.webp", "m14.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 38,
            "photo": [
                "m15.webp", "m16.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 39,
            "photo": [
                "m17.webp", "m18.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 40,
            "photo": [
                "m19.webp", "m20.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 41,
            "photo": [
                "m21.webp", "m22.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 42,
            "photo": [
                "m23.webp", "m24.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 43,
            "photo": [
                "m25.webp", "m26.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 44,
            "photo": [
                "m27.webp", "m28.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 45,
            "photo": [
                "m29.webp", "m30.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 46,
            "photo": [
                "m31.webp", "m32.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 47,
            "photo": [
                "m33.webp", "m34.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 48,
            "photo": [
                "m35.webp", "m36.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 49,
            "photo": [
                "r1.webp", "r2.webp"
            ],
            "name": "Halo Essence Floral Front Open Ring",
            "price1": 1149,
            "price2": 689,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 50,
            "photo": [
                "r3.webp", "r4.webp"
            ],
            "name": "Halo Essence Luster Floral Statement Ring",
            "price1": 1049,
            "price2": 629,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 51,
            "photo": [
                "r5.webp", "r6.webp"
            ],
            "name": "Halo Essence Glory Statement Ring",
            "price1": 1599,
            "price2": 959,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 52,
            "photo": [
                "r7.webp", "r8.webp"
            ],
            "name": "Halo Essence Statement Floral Halo Ring",
            "price1": 2899,
            "price2": 1739,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 53,
            "photo": [
                "r9.webp", "r10.webp"
            ],
            "name": "Sparkling Elegance Regal Cut American Diamond Ring",
            "price1": 649,
            "price2": 389,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 54,
            "photo": [
                "r11.webp", "r12.webp"
            ],
            "name": "Sparkling Elegance Crystal Flora American Diamond Ring",
            "price1": 899,
            "price2": 539,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 55,
            "photo": [
                "r13.webp", "r14.webp"
            ],
            "name": "Sparkling Elegance Celestial Dome American Diamond Ring",
            "price1": 899,
            "price2": 539,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 56,
            "photo": [
                "r15.webp", "r16.webp"
            ],
            "name": "Sparkling Elegance Crystal Crown American Diamond Ring",
            "price1": 899,
            "price2": 539,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 57,
            "photo": [
                "r17.webp", "r18.webp"
            ],
            "name": "Madhubani Pakhi Phool Oxidised Enamel Ring",
            "price1": 749,
            "price2": 449,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 58,
            "photo": [
                "r19.webp", "r20.webp"
            ],
            "name": "Madhubani Pakhi Oxidised Enamel Ring",
            "price1": 849,
            "price2": 509,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 59,
            "photo": [
                "r21.webp", "r22.webp"
            ],
            "name": "Sparkling Elegance Dual-Stone Gold Ring",
            "price1": 1174,
            "price2": 704,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 60,
            "photo": [
                "r23.webp", "r24.webp"
            ],
            "name": "Sparkling Elegance Ethereal Glow Solitaire Ring",
            "price1": 1074,
            "price2": 644,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 61,
            "photo": [
                "r25.webp", "r26.webp"
            ],
            "name": "Tropical Wildlife Elephant Herd Band Sterling Silver Ring",
            "price1": 2899,
            "price2": 1739,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 62,
            "photo": [
                "r27.webp", "r28.webp"
            ],
            "name": "Sparkling Elegance Glowing Grace American Diamond Solitaire Ring",
            "price1": 974,
            "price2": 584,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 63,
            "photo": [
                "r29.webp", "r30.webp"
            ],
            "name": "Sparkling Elegance Lustre Radiance American Diamond Solitaire Ring",
            "price1": 749,
            "price2": 449,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 64,
            "photo": [
                "r31.webp", "r32.webp"
            ],
            "name": "Sparkling Elegance Eternal Radiance American Diamond Solitaire Ring",
            "price1": 849,
            "price2": 509,
            "productCategory": "Rings",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 65,
            "photo": [
                "bn1.webp", "bn2.webp"
            ],
            "name": "Halo Essence Radiance Studded Bracelet",
            "price1": 2899,
            "price2": 1739,
            "productCategory": "Bangles",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 66,
            "photo": [
                "bn3.webp", "bn4.webp"
            ],
            "name": "Halo Essence Studded Floral Bracelet",
            "price1": 1849,
            "price2": 1109,
            "productCategory": "Bangles",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 67,
            "photo": [
                "bn5.webp", "bn6.webp"
            ],
            "name": "Gold Elegance Nazaakat Bangles",
            "price1": 2199,
            "price2": 1329,
            "productCategory": "Bangles",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 68,
            "photo": [
                "bn7.webp", "bn8.webp"
            ],
            "name": "Gold Elegance Nazaakat Bangles",
            "price1": 1598,
            "price2": 1629,
            "productCategory": "Bangles",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 69,
            "photo": [
                "bn9.webp", "bn10.webp"
            ],
            "name": "Madhubani Vihang Vibes Oxidised Enamel Necklace Set",
            "price1": 1598,
            "price2": 929,
            "productCategory": "Bangles",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 70,
            "photo": [
                "bn11.webp", "bn12.webp"
            ],
            "name": "Madhubani Pakhi Phool Oxidised Enamel Bangle",
            "price1": 998,
            "price2": 569,
            "productCategory": "Bangles",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 71,
            "photo": [
                "bn13.webp", "bn14.webp"
            ],
            "name": "Tropical Wildlife Wings Of Butterfly Sterling Silver Bracelet",
            "price1": 3449,
            "price2": 2069,
            "productCategory": "Bangles",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 72,
            "photo": [
                "bn15.webp", "bn16.webp"
            ],
            "name": "Boho Tribe Evil Eye Oxidised Enamel Bracelet",
            "price1": 749,
            "price2": 449,
            "productCategory": "Bangles",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 73,
            "photo": [
                "bn17.webp", "bn18.webp"
            ],
            "name": "Boho Tribe Flower Turquoise Cuff Bangle",
            "price1": 1149,
            "price2": 689,
            "productCategory": "Bangles",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 74,
            "photo": [
                "bn19.webp", "bn20.webp"
            ],
            "name": "Boho Tribe Butterfly Oxidised Cuff Bangle",
            "price1": 1148,
            "price2": 689,
            "productCategory": "Bangles",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 75,
            "photo": [
                "bn21.webp", "bn22.webp"
            ],
            "name": "Royal Romance Victoria Bangles",
            "price1": 4699,
            "price2": 2819,
            "productCategory": "Bangles",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 76,
            "photo": [
                "bn23.webp", "bn24.webp"
            ],
            "name": "Royal Romance Blossom Statement Bracelet",
            "price1": 6449,
            "price2": 3869,
            "productCategory": "Bangles",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },

        {
            "id": 77,
            "photo": [
                "s1.webp", "s2.webp"
            ],
            "name": "Kundan Elegance Polki Noor Pendant Set",
            "price1": 6099,
            "price2": 3659,
            "productCategory": "Sets collections",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 78,
            "photo": [
                "s3.webp", "s4.webp"
            ],
            "name": "Kundan Elegance Noor-e-Nazakat Necklace Set",
            "price1": 6699,
            "price2": 4019,
            "productCategory": "Sets Collections",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 79,
            "photo": [
                "s5.jpg", "s6.webp"
            ],
            "name": "Kundan Elegance Noor-e-Nazakat Necklace Set",
            "price1": 6699,
            "price2": 4019,
            "productCategory": "Sets Collections",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 80,
            "photo": [
                "s7.webp", "s8.webp"
            ],
            "name": "Kundan Elegance Noor-e-Nazakat Necklace Set",
            "price1": 6699,
            "price2": 4019,
            "productCategory": "Sets Collections",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 81,
            "photo": [
                "s9.webp", "s10.webp"
            ],
            "name": "Kundan Elegance Noor-e-Nazakat Necklace Set",
            "price1": 6699,
            "price2": 4019,
            "productCategory": "Sets Collections",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 78,
            "photo": [
                "s3.webp", "s4.webp"
            ],
            "name": "Kundan Elegance Noor-e-Nazakat Necklace Set",
            "price1": 6699,
            "price2": 4019,
            "productCategory": "Sets Collections",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 78,
            "photo": [
                "s3.webp", "s4.webp"
            ],
            "name": "Kundan Elegance Noor-e-Nazakat Necklace Set",
            "price1": 6699,
            "price2": 4019,
            "productCategory": "Sets Collections",
            "productForGender": "Female",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        }

    ]


    const { categoryName } = useParams();
    return (
        <div>

            <section>
                <Container fluid>
                    <Row>
                        <Col>
                            {
                                banners.filter(product => product.productCategory.includes(categoryName)).map((product) => {
                                    return (
                                        <img src={"/" + product.image} alt='' className='img-fluid' />
                                    )
                                }
                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <h1>{categoryName}</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container fluid>
                    <Row>
                        <Col md={2}>
                            <h4>Shop by type</h4>
                            <ul>
                                <li>Choker</li>
                                <li>Long</li>
                                <li>Short</li>
                            </ul>

                            <h4>shop by look</h4>
                            <ul>
                                <li>Oxidised</li>
                            </ul>

                            <h4>shop by Price</h4>
                            <ul>
                                <li>500-999</li>
                                <li>1000-1499</li>
                                <li>1500-1999</li>
                                <li>2000 & above</li>
                            </ul>

                            <h4>Shop by Occation</h4>
                            <ul>
                                <li>Office Wear</li>
                            </ul>

                            <h4>shop by category</h4>
                            <ul>
                                <li>Earrings</li>
                                <li>Necklace</li>
                                <li>Ring</li>
                            </ul>
                        </Col>
                        <Col md={10}>

                            <Row className='information'>
                                {
                                    // condition ? true part : false part
                                    products.filter(product => product.productCategory.includes(categoryName)).map((product) => {

                                        // products.filter(product => product.productCategory.toLowerCase().includes(categoryName)).map((product) => {
                                        return (
                                            <Col md={3} className='morecategory'>
                                                <Link to={"/Buypage/" + product.id + product.name}>
                                                    <div className='productf'>
                                                        <div className='fringe1'>
                                                            <img src={"/" + product.photo[0]} alt='' className='img-fluid' />
                                                        </div>
                                                        <div className='fringe2'>
                                                            <img src={"/" + product.photo[1]} alt='' className='img-fluid' />
                                                        </div>
                                                        <h6>{product.name}</h6>
                                                        <Row>
                                                            <Col>
                                                                <h5>Ratings= {product.rating}</h5>
                                                            </Col>
                                                            <Col>
                                                                <p>{product.isAvailable ? 'Available' : 'Out of the Stock'}</p>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <div className='pricearea'>
                                                                <Col><s>₹ {product.price1}</s></Col>
                                                                <Col>₹ {product.price2}</Col>
                                                            </div>
                                                            <Col>
                                                                <div className="actions">
                                                                    <FontAwesomeIcon icon={faHeart} className='favourite' />
                                                                    <button className="cart-btn">Add to Cart</button>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Link>
                                            </Col>
                                        )
                                    }
                                    )

                                }

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Category
