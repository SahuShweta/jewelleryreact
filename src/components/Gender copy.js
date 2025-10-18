import React, { useState, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import slide3 from '../images/slide3.webp';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Star from "./Star";

// import { Link } from 'react-router';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { useSelector } from 'react-redux';







   export const products = [
        {
            "id": 1,
            "photo": [
                "f1.webp", "f2.webp",
            ],
            "name": "Fringes Thrill Statement Dangler Earrings",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "The Fringe Thrill Statement Dangler Earrings are a breathtaking fusion of artistry and movement, designed for the modern woman who embraces fluid elegance. Crafted in premium brass with oxidized gold plating, these earrings exude vintage opulence, while their intricate floral motifs and cascading delicate chains add dynamic charm. The top portion features ornamental swirls with subtle studded accents, offering a regal aesthetic, while the free-flowing fringes create a captivating, rhythmic dance with every movement. Whether paired with boho-chic brunch outfits, an effortless cocktail dress, or festive ensembles, these earrings are the perfect balance of chic sophistication and bold statement-making appeal. Their golden hue effortlessly complements warm skin tones, lending an air of understated luxury. Thoughtfully designed as gifting treasures, they make for a timeless present—ideal for Valentine’s Day, Diwali, Rakshabandhan, Christmas, New Year celebrations, and special moments with loved ones. Whether treating yourself or expressing love for your girlfriend, sister, wife, or mother, these earrings are a heartfelt addition to any jewelry collection.",
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
            "description": "A harmonious blend of elegance and fluidity, the Bloom In Fringe Statement Choker Set is designed for the woman who sways through life with effortless charm. Crafted from premium brass and adorned with oxidized gold plating, this piece encapsulates movement with its tassel-detailed fringe elements, embodying a rhythmic dance of sophistication. The choker is a statement in geometry and texture, featuring intricate circular motifs interconnected by delicate chains with bead accents, delivering a bold yet graceful aesthetic. The accompanying earrings mirror the cascading charm of the necklace, ensuring a coordinated and impactful look. Perfect for festive celebrations, elegant brunches, cocktail evenings, and everyday work ensembles, this gold necklace set transitions seamlessly across occasions. Whether styled with a chic boho dress or layered over a structured western outfit, its oxidized brilliance and tassel artistry elevate any ensemble. Ideal for gifting, the set is a meaningful gesture for Valentine’s Day, Rakshabandhan, Diwali, Christmas, and special milestones, making it a timeless expression of love and appreciation.",
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
            "name": "Fringes Intercrossed Collar Necklace Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Introducing the Intercrossed Collar Necklace Set from the Fringes Collection by Voylla, a masterful blend of structured beauty and effortless movement. Designed for women who embrace bold statements with grace, this brass-crafted set boasts an intricate intercrossed pattern, seamlessly adorned with delicate tassels that add fluidity to its aesthetic. The oxidized gold plating lends a vintage-inspired richness, making it an elegant yet versatile piece that effortlessly transitions from casual brunches and cocktail soirées to festive celebrations like Diwali and Rakshabandhan. The warm gold tone complements both traditional and western attire, making it a standout addition to any jewelry collection. Whether styled with a boho-chic ensemble, a sleek workwear outfit, or a dreamy holiday look, this necklace set remains the epitome of chic sophistication. A thoughtful gift for girlfriends, wives, mothers, or sisters, it carries the essence of a heartfelt gesture, perfect for Valentine’s Day, Christmas, New Year, and special occasions. Lightweight yet striking, this statement jewelry piece is an ideal travel companion, ensuring that every outfit gets an effortless touch of glamour.",
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
            "name": "Fringes Perfect Beaded Fringe Earrings",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate yet striking, the Perfect Beaded Fringe Earrings redefine artistic craftsmanship with their intricate brass construction and oxidized gold plating, exuding an effortless vintage charm. Designed as part of Voylla’s Fringes collection, these earrings capture the essence of fluidity and motion, blending cascading fringe elements with detailed beadwork for a mesmerizing look. The ornate circular top showcases sophisticated patterns that transition gracefully into fine chains ending in pointed beads, adding a dynamic and playful appeal. Versatile and stylish, these statement earrings complement a variety of occasions—from brunch dates and cocktail parties to festive celebrations like Diwali, Rakshabandhan, Christmas, and New Year. Perfect for modern women, these boho-chic earrings elevate any western ensemble, making them an exceptional gift for women, whether for a girlfriend, wife, sister, or mother. Pair them with flowy outfits or sleek evening wear for a touch of refined elegance that effortlessly enhances your look.",
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
            "name": "Fringes Sway In Fringe Earrings",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Inspired by effortless movement and graceful fluidity, the Sway In Fringe Earrings bring a touch of bohemian charm infused with contemporary finesse. Crafted from high-quality brass and plated in oxidized gold, these earrings exude antique sophistication while ensuring durability and long-lasting wear. The intricate top motif, adorned with delicate beadwork, seamlessly transitions into cascading chain fringes, each ending in teardrop-shaped charms that catch the light with every sway. Their playful yet elegant aesthetic makes them the perfect accessory for festive gatherings, cocktail nights, brunch outings, and even everyday wear. The warm antique gold hue enhances versatility, allowing these statement earrings to complement both traditional and western outfits with effortless grace. Whether gifted for Valentine’s Day, Rakshabandhan, Diwali, Christmas, or New Year, these tassel earrings will make an unforgettable present for girlfriends, wives, mothers, sisters, and loved ones, celebrating their unique style and personality.",
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
            "name": "Fringes Playful Statement Ear Cuff Earrings",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Elegance meets movement with these exquisite Playful Statement Ear Cuff Earrings, designed to turn heads with their intricate artistry and boho-chic allure. Crafted from premium brass with a stunning oxidized gold plating, these earrings feature delicate swirling motifs adorned with small round embellishments that capture light effortlessly. The mesmerizing tassel-inspired chains gracefully cascade, creating a fluid and dynamic effect that complements the wearer’s natural charm. Perfect for festive occasions, brunches, cocktail parties, and everyday wear, these earrings effortlessly blend western jewelry aesthetics with traditional undertones, making them a versatile addition to your collection. Whether dressing up for Diwali, Rakshabandhan, Christmas, New Year, or Valentine's Day, these statement earrings are a stylish pick. A thoughtful gift for women, including girlfriends, wives, mothers, and sisters, they embody elegance and personality, ideal for every modern, free-spirited woman. Pair them with chic boho ensembles, structured dresses, or casual resort wear for an effortlessly fashionable look.",
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
            "name": "Fringes Dazzle In Fringe Earrings",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Dazzle In Fringe Earrings are an exquisite blend of elegance and movement, crafted to radiate charm with every sway. These statement earrings feature a horseshoe-shaped top adorned with tiny bead embellishments, from which delicate cascading chains flow gracefully, each finishing in a pointed, conical tassel. The oxidized gold plating enriches the brass base, giving these earrings a vintage yet modern appeal—perfect for the free-spirited woman who embraces fluid style with effortless grace. Part of the Fringes Collection by Voylla, these earrings are designed for women who love versatility, making them an ideal choice for brunches, festive celebrations, cocktail evenings, and everyday sophistication. Whether paired with a breezy maxi dress for a beach vacation or styled with chic western wear for a night out, these earrings add a touch of drama and elegance to any look. Their rich gold hue complements diverse skin tones, making them a cherished gift for women—be it Valentine's Day, Rakshabandhan, Diwali, Christmas, or New Year’s celebrations. Elevate your ensemble with this dynamic accessory, embodying the essence of festive charm, boho-chic style, and contemporary refinement.",
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
            "name": "Fringes Curvy Fringe Earrings",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Inspired by fluidity and artistic details, the Curvy Fringe Earrings blend timeless craftsmanship with contemporary boho elegance. Designed in a striking oval shape, these gold-toned oxidized earrings feature intricate concentric dot motifs that exude a vintage yet modern charm. The lower section gracefully cascades into delicate teardrop-shaped tassels, lending movement and playful sophistication to each piece. Crafted from premium brass with oxidized gold plating, the earrings promise durability while maintaining an effortless, lightweight appeal. Whether styled with a breezy dress for a beach brunch, paired with a chic cocktail gown, or worn as a standout accessory for festive gatherings, these earrings embody versatility and elegance. Their subtle shimmer and dynamic structure make them an ideal gift for women who love statement jewelry, perfect for occasions like Valentine's Day, Rakshabandhan, Diwali, Christmas, and New Year. Add a touch of western flair or enhance a traditional look—these earrings are designed to adapt, captivate, and elevate everyday and celebratory moments.",
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
            "name": "Fringes Chain Tassel Dangler Earrings",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Elevate your jewelry collection with the Chain Tassel Dangler Earrings, a masterpiece in design and craftsmanship. These earrings, crafted in high-quality brass with an oxidized gold finish, blend heritage charm with contemporary aesthetics. The intricately detailed top motif, reminiscent of vintage filigree, features delicate beadwork, leading into cascading fine chains that create a mesmerizing tassel effect. Each chain flows effortlessly, catching the light with subtle movement—an embodiment of the free-spirited woman’s grace. A part of the Fringes collection, inspired by fluidity and expressive charm, these earrings are perfect for women who love boho-chic elegance with a statement edge. Whether styled for a festive brunch, a cocktail evening, or as everyday jewelry, their lightweight design ensures comfort without compromising on sophistication. The antique gold hue adds versatility, making them a stunning addition to both Western and ethnic ensembles. Ideal for gifting on special occasions like Valentine's Day, Diwali, Rakshabandhan, Christmas, and New Year, these earrings will be treasured by girlfriends, wives, mothers, and sisters alike.",
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
            "name": "Fringes Classic Dangler Earrings",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Elegance meets playful movement in these exquisite Classic Dangler Earrings from Voylla’s Fringes Collection. Crafted from high-quality brass with a stunning oxidized gold plating, these earrings radiate a vintage yet chic appeal. The intricate circular design features delicate bead detailing, with cascading chains that create a tassel effect, adding dynamic movement and an expressive, free-spirited charm. Perfectly blending boho elegance with timeless beauty, these earrings effortlessly elevate any ensemble, whether it’s a casual brunch look, a travel-ready vacation outfit, or a cocktail party statement piece. Their warm gold hue complements Western and festive styles alike, making them a versatile addition to any jewelry collection. Thoughtfully designed for modern women, these earrings serve as an ideal gift for sisters, girlfriends, wives, mothers, or lovers, perfect for Valentine's Day, Diwali, Rakshabandhan, Christmas, and New Year celebrations. Whether worn as everyday work essentials or paired with an elegant festive look, these earrings promise comfort, style, and a touch of glamour.",
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
            "name": "Fringes Fantasy Drop Earrings",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "An exquisite blend of vintage elegance and contemporary flair, the Fringe Fantasy Drop Earrings embody effortless grace and fluid movement. Designed for women who love making bold yet sophisticated style statements, these earrings feature a delicately crafted floral motif on the stud, followed by a semi-circular frame adorned with intricate leaf-like patterns. Cascading tassel chains with tiny spherical beads lend them a dynamic edge, swaying with every step. Made from high-quality brass and coated with a rich oxidized gold plating, they exude an old-world charm with a modern twist. Whether you're styling them for a festive gathering, brunch date, cocktail night, or an everyday look, these earrings seamlessly elevate any outfit. Pair them with boho-chic ensembles, western wear, or fusion attire, and let them be the perfect accent piece. Ideal as a Valentine’s gift, Rakshabandhan surprise, or a Christmas delight, they are a thoughtful choice for girlfriends, wives, mothers, or sisters who cherish timeless beauty with a modern sensibility.",
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
            "name": "Fringes Bliss Necklace Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Graceful, fluid, and effortlessly captivating, the Fall For Fringe Bliss Necklace Set is designed for the modern woman who embraces movement in style. Crafted in high-quality brass with a mesmerizing oxidized gold plating, this set exudes old-world charm with a contemporary edge. The necklace features a layered chain design that cascades into a dazzling fringe-inspired pendant, adorned with circular motifs and dainty tassel-like chains that catch the light beautifully with every movement. The matching earrings mirror the necklace’s delicate detailing, providing a harmonious finish to the set. Designed as a statement piece, it embodies chic elegance—perfect for styling with breezy boho outfits, sophisticated cocktail ensembles, or festive looks that demand attention. Whether you're celebrating Diwali, Rakshabandhan, Christmas, Valentine's Day, or simply indulging in self-love, this set makes an unforgettable gift for women who appreciate Necklace Sets for women that blend artistry with wearability. Pair it with a flowy maxi dress for brunch, or let it complement a structured blazer for work—this versatile boho Necklace Set is crafted for occasions that call for timeless sophistication.",
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
            "productCategory": "Fringes",
            "productForGender": "Female",
            "description": "The Dramatic Fringe Pendant Set is an exquisite blend of opulence and movement, designed for the woman who loves to make an impression. This stunning pendant set showcases a hexagonal filigree pendant, intricately crafted with delicate beadwork that lends an air of sophistication. The pendant cascades into tassel chains, creating a dynamic fringe effect that enhances its statement appeal. Matching earrings echo the pendant’s artistry with similar detailing, ensuring a cohesive look. The oxidized gold plating over high-quality brass adds a vintage charm while preserving its luxurious durability. A signature piece from the Fringes Collection, this pendant set celebrates fluidity, motion, and effortless elegance, perfect for brunch outings, cocktail evenings, festive celebrations, and chic everyday wear. Whether styled with a flowing maxi dress for a boho vibe, a structured blazer for work, or layered over a casual western ensemble, this versatile piece embodies grace in every setting. An ideal gift for sisters, girlfriends, wives, mothers, and friends, it makes for a thoughtful present for Diwali, Rakshabandhan, Christmas, New Year, Valentine's Day, and other special occasions.",
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
                "f27.webp", "f28.webp",
            ],
            "name": "Fringes Dangling Ring",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "This dangling ring from the Fringes Collection by Voylla is a stunning blend of elegance and movement, crafted for the woman who loves statement jewelry with a touch of whimsy. Made from high-quality brass with a luxurious oxidized gold plating, this ring features a striking V-shaped band adorned with delicate bead detailing, enhancing its refined aesthetic. The highlight of the design lies in the five tassel-like cylindrical charms that elegantly dangle from the ring, creating a rhythmic play of motion with every gesture. Perfect for a boho-chic, festive, or cocktail-ready look, this ring seamlessly complements western jewelry styling and effortlessly transitions from everyday workwear to evening elegance. Its warm gold hue pairs beautifully with summer brunches, beach getaways, and even holiday celebrations, making it a versatile gifting option for Rakshabandhan, Diwali, Valentine's Day, Christmas, and more. Whether given to a girlfriend, wife, mother, sister, or best friend, this travel-friendly, chic accessory is sure to impress.",
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
            "id": 15,
            "photo": [
                "f29.webp", "f30.webp",
            ],
            "name": "Fringes Intercrossed Collar Necklace Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Introducing the Intercrossed Collar Necklace Set from the Fringes Collection by Voylla, a masterful blend of structured beauty and effortless movement. Designed for women who embrace bold statements with grace, this brass-crafted set boasts an intricate intercrossed pattern, seamlessly adorned with delicate tassels that add fluidity to its aesthetic. The oxidized gold plating lends a vintage-inspired richness, making it an elegant yet versatile piece that effortlessly transitions from casual brunches and cocktail soirées to festive celebrations like Diwali and Rakshabandhan. The warm gold tone complements both traditional and western attire, making it a standout addition to any jewelry collection. Whether styled with a boho-chic ensemble, a sleek workwear outfit, or a dreamy holiday look, this necklace set remains the epitome of chic sophistication. A thoughtful gift for girlfriends, wives, mothers, or sisters, it carries the essence of a heartfelt gesture, perfect for Valentine’s Day, Christmas, New Year, and special occasions. Lightweight yet striking, this statement jewelry piece is an ideal travel companion, ensuring that every outfit gets an effortless touch of glamour.",
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
            "id": 16,
            "photo": [
                "f31.webp", "f32.webp",
            ],
            "name": "Fringes Slay In Fringe Earrings",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "The Slay In Fringe Cuff Earrings redefine statement jewelry with a structured cuff design, seamlessly blending bold elegance and dynamic movement. Crafted from premium brass with oxidized gold plating, these earrings showcase a curved bar adorned with delicate studs, leading into five gracefully cascading fringe chains, creating a fluid and eye-catching effect. Part of Voylla’s Fringes Collection, they embody playful sophistication, making them perfect for cocktail evenings, brunches, festive celebrations, and travel-ready looks. Their lightweight yet durable craftsmanship ensures all-day comfort, while their rich golden finish complements western, boho-chic, and everyday luxe styling effortlessly. A timeless gift for Rakshabandhan, Diwali, Christmas, New Year, Valentine's Day, or a cherished surprise for mothers, sisters, wives, girlfriends, and stylish trendsetters, these earrings capture the essence of bold charm, effortless glamour, and expressive elegance in every sway.",
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
            "id": 17,
            "photo": [
                "f33.webp", "f34.webp",
            ],
            "name": "Fringes Chain Tassel Dangler Earrings",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Elevate your jewelry collection with the Chain Tassel Dangler Earrings, a masterpiece in design and craftsmanship. These earrings, crafted in high-quality brass with an oxidized gold finish, blend heritage charm with contemporary aesthetics. The intricately detailed top motif, reminiscent of vintage filigree, features delicate beadwork, leading into cascading fine chains that create a mesmerizing tassel effect. Each chain flows effortlessly, catching the light with subtle movement—an embodiment of the free-spirited woman’s grace. A part of the Fringes collection, inspired by fluidity and expressive charm, these earrings are perfect for women who love boho-chic elegance with a statement edge. Whether styled for a festive brunch, a cocktail evening, or as everyday jewelry, their lightweight design ensures comfort without compromising on sophistication. The antique gold hue adds versatility, making them a stunning addition to both Western and ethnic ensembles. Ideal for gifting on special occasions like Valentine's Day, Diwali, Rakshabandhan, Christmas, and New Year, these earrings will be treasured by girlfriends, wives, mothers, and sisters alike.",
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
            "id": 18,
            "photo": [
                "m1.webp", "m2.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 1029,
            "price2": 598,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": false,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 19,
            "photo": [
                "m3.webp", "m4.webp"
            ],
            "name": "Eclipse Stylish Black Blade Mens Pendant",
            "price1": 1029,
            "price2": 598,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "This Voylla pendant for men is a striking piece of jewelry that combines modern design with a bold, edgy aesthetic. Crafted from high-quality brass, this black pendant for men is shaped like a razor blade, adding a unique and daring touch to your accessory collection. The deep black finish exudes sophistication, making it a versatile piece suitable for various occasions. Whether you’re dressing up for a casual outing, heading to the office, or embarking on a travel adventure, this pendant seamlessly complements your style. It’s also an excellent gifting option, perfect for surprising your brother, boyfriend, or any special man in your life. With Rakhi around the corner, consider this pendant as a meaningful Rakhi gift that symbolizes the bond and protection between siblings. Its understated elegance and distinctive design make it a standout piece that enhances any outfit, ensuring you make a subtle yet noticeable statement wherever you go. Embrace the blend of contemporary design and classic charm with this Voylla blade pendant, a must-have addition to any man’s jewelry collection."
        },
        {
            "id": 20,
            "photo": [
                "m5.webp", "m6.webp"
            ],
            "name": "Eclipse Dominator Gold American Diamond Men's Necklace",
            "price1": 1029,
            "price2": 598,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": false,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 21,
            "photo": [
                "m7.webp", "m8.webp"
            ],
            "name": "Eclipse Alpha American Diamond Men's Bracelet",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband. This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 22,
            "photo": [
                "m9.webp", "m10.webp"
            ],
            "name": "Eclipse Enigmatic Black Dragon Mens Pendant",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Unleash the power of mythical elegance with Voylla’s latest addition to its men’s collection, a captivating black pendant that exudes strength and style. This brass-crafted masterpiece is designed for the modern man who dares to stand out. The pendant features an intricately detailed dragon, a timeless symbol of wisdom and power, poised in mid-flight with wings outstretched, ready to conquer the skies. Its dark hue adds a touch of enigmatic charm, making it a versatile accessory suitable for casual wear or as a distinctive piece for office attire. Whether you’re traversing the urban jungle or exploring distant lands, this pendant is your perfect travel companion. With its bold design and striking black finish, it serves as an ideal gift for men - be it your brother or boyfriend - especially as a thoughtful Rakhi gift that celebrates the bond between siblings. Let this Voylla dragon pendant be more than just an accessory; let it be an expression of individuality and personal legend."
        },
        {
            "id": 23,
            "photo": [
                "m11.webp", "m12.webp"
            ],
            "name": "Eclipse Majestic Sparkle American Diamond Men's Bracelet",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with lustrous white rhodium, this bracelet exudes sophistication and elegance. The intricate design features interlocking links adorned with sparkling American diamonds, making it a perfect accessory for any occasion. Whether you're dressing up for a party, wedding, or a special event like Diwali or Rakshabandhan, this bracelet is sure to make a statement. It also makes an ideal gift for your brother, lover, boyfriend, or husband on Valentine's Day or any other special occasion. Add a touch of luxury to your wardrobe with this stunning piece of jewelry."
        },
        {
            "id": 24,
            "photo": [
                "m13.webp", "m14.webp"
            ],
            "name": "Eclipse Divine Radiance Mens Pendant",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Exuding a blend of spiritual elegance and contemporary style, this Voylla pendant for men is a testament to exquisite craftsmanship. The pendant features an intricate design that draws inspiration from religious symbolism, making it an ideal Rakhi gift or a thoughtful present for your brother or boyfriend. The black rhodium plating adds a touch of sophistication and versatility, ensuring that it complements both casual wear and office attire seamlessly. Its dark hue embodies the essence of masculine charm while offering a subtle yet striking accessory option for travel or everyday use. This black pendant for men is not just jewelry; it’s a statement piece that resonates with personal faith and fashion-forward sensibility."
        },
        {
            "id": 25,
            "photo": [
                "m15.webp", "m16.webp"
            ],
            "name": "Eclipse Regal Roar Black Mens Pendant",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Unleash the power of the king of the jungle with Voylla’s latest offering, a stunning black pendant for men that exudes strength and style. This brass-crafted masterpiece is a symbol of majesty, featuring an intricately designed lion face that commands attention and respect. The rich black hue accentuates the fierce expression and detailed mane, making it a perfect accessory for casual wear or to add a touch of boldness to office attire. Ideal for gifting, this pendant is not just a piece of jewelry but a statement—a reflection of courage and leadership. Whether you’re looking to surprise your brother, boyfriend, or any man in your life on special occasions like Rakhi or simply searching for an exceptional travel companion that resonates with personality and poise, this lion face pendant from Voylla is tailored for those who dare to stand out."
        },
        {
            "id": 26,
            "photo": [
                "m17.webp", "m18.webp"
            ],
            "name": "Eclipse Ganesha & Om Divine Black Mens Pendant",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "This exquisite piece from Voylla is a testament to the fusion of spirituality and style, perfect for the modern man. The pendant showcases a masterful blend of the sacred ‘Om’ symbol and the revered deity Ganesha, intricately designed to exude an aura of divine grace. Crafted with precision from high-quality brass, this pendant is adorned with black rhodium plating, giving it a bold and sophisticated edge that complements any outfit. Whether it’s casual wear for everyday outings or a thoughtful gift for your brother or boyfriend, this black pendant serves as an ideal choice. Its versatile design makes it suitable for office wear or travel, ensuring that the wearer carries a touch of spiritual elegance wherever they go. As Rakhi approaches, consider this unique piece as a Rakhi Gift that combines traditional sentiments with contemporary fashion. The detailed craftsmanship reflects Voylla’s commitment to quality and style, making it more than just an accessory; it’s a statement piece that resonates with personal expression and cultural heritage."
        },
        {
            "id": 27,
            "photo": [
                "m19.webp", "m20.webp"
            ],
            "name": "Eclipse Modern Knight Black Mens Pendant",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Exuding a robust charm, this Voylla pendant for men is a statement piece that combines edgy design with a sleek finish. Crafted from high-quality brass, the pendant features an intricate black rhodium plating that gives it a mysterious and masculine allure. The central motif is reminiscent of medieval heraldry, with its striking spikes and detailed engravings that speak to the wearer’s bold personality. This black pendant for men is versatile enough to complement both casual wear and office attire, making it an excellent choice for daily accessorizing or as a distinctive travel companion. Its unique design also makes it an ideal gifting option for special occasions - be it as a Rakhi gift, or as a thoughtful present for your brother or boyfriend. The Voylla pendant is more than just an accessory; it’s a personal emblem that signifies strength ."
        },
        {
            "id": 28,
            "photo": [
                "m21.webp", "m22.webp"
            ],
            "name": "Eclipse The Gentleman American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "This exquisite men's necklace from Voylla is a perfect blend of sophistication and style. Crafted from high-quality alloy, the necklace features a stunning white rhodium plating that adds a touch of elegance and luxury. The intricate design showcases a series of meticulously arranged links, each adorned with sparkling American diamonds, making it an ideal accessory for party wear, wedding wear, or any special occasion. This necklace is not just a piece of jewelry but a statement of refined taste, making it an excellent gift for men on occasions like Valentine's Day, Diwali, Rakshabandhan, or as a thoughtful present for a brother, lover, boyfriend, or husband."
        },
        {
            "id": 29,
            "photo": [
                "m23.webp", "m24.webp"
            ],
            "name": "Eclipse Divine Radiance Mens Pendant",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Exuding a blend of spiritual elegance and contemporary style, this Voylla pendant for men is a testament to exquisite craftsmanship. The pendant features an intricate design that draws inspiration from religious symbolism, making it an ideal Rakhi gift or a thoughtful present for your brother or boyfriend. The black rhodium plating adds a touch of sophistication and versatility, ensuring that it complements both casual wear and office attire seamlessly. Its dark hue embodies the essence of masculine charm while offering a subtle yet striking accessory option for travel or everyday use. This black pendant for men is not just jewelry; it’s a statement piece that resonates with personal faith and fashion-forward sensibility."
        },
        {
            "id": 30,
            "photo": [
                "m25.webp", "m26.webp"
            ],
            "name": "Eclipse Hawk Black Mens Pendant",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Command attention with the Eclipse Hawk Black Men’s Pendant, a tribute to fearless individuality and striking elegance. Meticulously crafted from durable brass and finished with a bold black rhodium plating, this stylish pendant for men showcases a fierce hawk motif surrounded by celestial accents, blending heritage symbolism with trend-forward fashion. The deep matte black hue and link chain style evoke both traditional Indian warrior aesthetics and contemporary streetwear flair. From casual days out in denim and kurtas to dressed-up evenings with bandhgalas or sleek shirts, this statement pendant adapts seamlessly. A part of the iconic Eclipse collection, this is more than a fashion jewellery men pick—it's a storyteller, a style statement, and a timeless token for every Indian man. Gift it as a Valentine’s Day pendant for men, a bracelet and pendant combo for boyfriend, or surprise him with an anniversary gift for him pendant. This is easily among the best pendants for men online in 2025-versatile, bold, and truly unforgettable."
        },
        {
            "id": 31,
            "photo": [
                "m27.webp", "m28.webp"
            ],
            "name": "Eclipse Enigmatic Black Ganesha Mens Pendant",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "This exquisite Voylla pendant for men is a testament to refined taste and personal style, making it an ideal choice for Casual Wear or as a thoughtful Gifting option. Crafted from premium brass, the pendant features a striking black hue that exudes sophistication and versatility. The design is centered around the revered figure of Ganesha, intricately detailed to capture the deity’s essence in a modern aesthetic that appeals to contemporary sensibilities. Perfect as a Gift for men, be it your brother or boyfriend, this black pendant serves as an emblem of good fortune and wisdom. Its sleek profile makes it suitable for Office wear or Travel, effortlessly complementing any outfit with its understated elegance. As Rakhi approaches, consider this unique piece as a Rakhi Gift that blends spiritual significance with stylish allure."
        },
        {
            "id": 32,
            "photo": [
                "m29.webp", "m30.webp"
            ],
            "name": "Eclipse Stylish Black Ganesha Pendant for Men",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Discover the perfect blend of tradition and modernity with Voylla’s black pendant for men, featuring a stylized Ganesha design. Crafted from high-quality brass, this pendant showcases an intricate depiction of Lord Ganesha, the remover of obstacles, seamlessly integrated into a contemporary pattern. The sleek black color adds a touch of sophistication, making it an ideal accessory for casual wear, office wear, or travel. Its versatile design ensures it complements various outfits, whether you’re dressing up for a day at the office or a casual outing. This pendant is not just a piece of jewelry but a meaningful gift for men, perfect for occasions like Rakhi, birthdays, or as a thoughtful gesture for your brother or boyfriend. The elegant design and deep black hue make it a standout piece that exudes style and spiritual significance. Whether you’re looking for a unique gifting option or a stylish addition to your accessory collection, this Voylla pendant is sure to impress. Embrace the fusion of art and spirituality with this exquisite black pendant for men, a true testament to Voylla’s craftsmanship and design excellence."
        },
        {
            "id": 33,
            "photo": [
                "m31.webp", "m32.webp"
            ],
            "name": "Eclipse Traditional Ganesha Black Mens Pendant",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "This exquisite Voylla pendant for men is a testament to the harmonious blend of traditional motifs and contemporary style. Crafted from premium brass, the pendant features a striking black finish that exudes sophistication and versatility, making it suitable for casual wear or as a distinctive piece for office attire. The design takes center stage with its intricately detailed Ganesha face, symbolizing wisdom and understanding in every curve and contour. The thoughtful craftsmanship is evident in the delicate etchings that bring out the divine features of Ganesha, revered in many cultures as a remover of obstacles. This black pendant serves not only as an accessory but also as a meaningful gift for men; be it your brother, boyfriend, or any loved one. Its universal appeal makes it an ideal choice for gifting on special occasions like Rakhi or when celebrating personal achievements. Whether paired with travel ensembles or daily outfits, this Voylla pendant promises to be a conversation starter and a cherished addition to any jewelry collection."
        },
        {
            "id": 34,
            "photo": [
                "m33.webp", "m34.webp"
            ],
            "name": "Eclipse The Conqueror's American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's necklace from Voylla. Crafted from high-quality alloy and plated with luxurious white rhodium, this necklace exudes sophistication and timeless elegance. The design features intricate interlocking links adorned with sparkling American diamonds, adding a touch of brilliance and refinement. Perfect for special occasions, this necklace is ideal for party wear, wedding wear, or as a thoughtful gift for Valentine's Day, Diwali, Rakshabandhan, or any other celebration. Whether you're looking for a gift for your brother, lover, boyfriend, or husband, this stunning necklace is sure to be cherished for years to come."
        },
        {
            "id": 35,
            "photo": [
                "m35.webp", "m36.webp"
            ],
            "name": "Eclipse Intricate Trishul Pendant Mens Pendant",
            "price1": 598,
            "price2": 229,
            "productCategory": "Male",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Exuding a bold charm, this Voylla pendant for men is a testament to masculine elegance with its striking design. Crafted from durable brass, the pendant features an intricately detailed round trishul that immediately commands attention. The black rhodium plating adds a layer of sophistication and depth, creating an eye-catching contrast against the metallic sheen of the brass. This piece is perfect for casual wear or can add a touch of personality to office attire. Its versatile style makes it an ideal gift for men - be it your brother, boyfriend, or as a thoughtful Rakhi gift. The robust chain complements the pendant’s robust aesthetic, making it suitable for travel without compromising on style. This black pendant for men is not just an accessory; it’s a statement piece that celebrates strength and spirituality."
        },

    ]


    const Gender = () => {
    // export

    const { GenderName } = useParams();
    console.log(GenderName)



    const AllProducts = () => {
        const [products, setProducts] = useState();
        useEffect(() => {
            axios.get('http://localhost:8090/api/ssproducts').then((response) => {
                console.log(response.data);
                setProducts(response.data)
            })
        }, []);

        const AddCart = (product) => {
            // console.log(product)
            const data = {
                "userId": currentUser.id,
                "items": [
                    {
                        "productId": product.id,
                        "quantity": 1,
                        "price": product.productPrice
                    }
                ]
            }
            console.log(data)
            try {
                const res = axios.post("http://localhost:8090/api/carts", data);
                console.log("Products add to cart:", res.data);
                alert("Products add to cart succesfully!");



            } catch (err) {
                console.error("Failed to add to cart:", err);
                alert("Failed to add to cart");
            }

        }
        const { user: currentUser } = useSelector((state) => state.auth);
        console.log(currentUser)


        return (
            <div>

                <section>
                    <Container fluid>
                        <Row>
                            <Col>
                                <img src={slide3} alt='' className='img-fluid' />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col className='heading'>
                                <h1 className='headingtext-center'>{GenderName}</h1>
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

                                <Row>
                                    {
                                        products.filter(product => product.productForGender.includes(GenderName)).map((product) => {
                                            return (
                                                <Col md={3} className='morecategory'>
                                                    {/* <Link to={"/Buypage/" + product.id + product.name}> */}
                                                    <Link to={`/Buypage/${product.id}`}>

                                                        <div className='productf'>
                                                            <div className='fringe1'>
                                                                <img src={"/" + product.photo[0]} alt='' className='img-fluid' />
                                                            </div>
                                                            <div className='fringe2'>
                                                                <img src={"/" + product.photo[1]} alt='' className='img-fluid' />
                                                            </div>
                                                            <h6>{product.name}</h6>
                                                            <Row className='prodStock'>
                                                                <Col>
                                                                    <Star stars={product.rating} />
                                                                    {/* reviews={product.rating} /> */}
                                                                    {/* <h5>Ratings= {product.rating}</h5> */}
                                                                </Col>
                                                                <Col>
                                                                    <p>({product.isAvailable ? 'Available' : 'Out of the Stock'})</p>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <div className='pricearea'>
                                                                    <Col className='price1'>
                                                                        <h4><s>₹ {product.price1}</s></h4>
                                                                        &nbsp;
                                                                        &nbsp;
                                                                        &nbsp;
                                                                        &nbsp;
                                                                        &nbsp;
                                                                        <h4>₹ {product.price2}</h4>
                                                                    </Col>
                                                                </div>
                                                                <Col > <FontAwesomeIcon icon={faHeart} className='favourite1' />
                                                                    &nbsp;
                                                                    &nbsp;
                                                                    &nbsp;
                                                                    <button>Add to Cart</button>
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

                <section>
                    <Container>
                        <Row>
                            {
                                products ?
                                    products.map((product, index) => {
                                        return (
                                            <Col md={3}>
                                                {/* <Link to={"/Buypage/" + product.id}> */}
                                                <div className='allbox'>
                                                    <div className='allImage'>
                                                        <img src={`http://localhost:8090/upload/${product.images[0]}`} alt="" />

                                                    </div>
                                                    <div className='allImage2'>
                                                        <img src={`http://localhost:8090/upload/${product.images[1]}`} alt="" />

                                                    </div>
                                                    <p>{product.productName}</p>
                                                    <h5><s>₹ {product.productPrice}</s>&nbsp; &nbsp; &nbsp;<b>₹ 509</b></h5>


                                                    <div className="actions">
                                                        <FontAwesomeIcon icon={faHeart} className='favourite' />
                                                        <button className="cart-btn" onClick={() => AddCart(product)}>Add to Cart</button>
                                                    </div>
                                                </div>
                                                {/* </Link> */}
                                            </Col>
                                        )
                                    }

                                    )
                                    :
                                    <div>
                                        Oops! No Data available.
                                    </div>

                            }
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}


export default Gender
