import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';


const Mens = () => {
    const malesProduct = [
        {
            "id": 1,
            "photo":["m1.webp","m2.webp"],
            "title": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price": 598,
            "category" : "Mens Sections",
            "availability": false,
            "rating": 3.5,
            "productDescription": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 2,
            "photo":["m3.webp","m4.webp"],
            "title": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price": 598,
            "category" : "Mens Sections",
            "availability": true,
            "rating": 3.5,
            "productDescription": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 3,
            "photo":["m5.webp","m6.webp"],
            "title": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price": 598,
            "category" : "Mens Sections",
            "availability": false,
            "rating": 3.5,
            "productDescription": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 4,
            "photo":["m7.webp","m8.webp"],
            "title": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price": 598,
            "category" : "Mens Sections",
            "availability": true,
            "rating": 3.5,
            "productDescription": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        }
    ]
  return (
    <div>
      <section>
        <Container>
            <Row>
                {
                    malesProduct.map((product)=>{
                        return(
                            <Col>
                            <img src={product.photo[0]} alt='' className='img-fluid'/>
                            <h1>{product.id}</h1>
                            <h5>{product.rating}</h5>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Mens
