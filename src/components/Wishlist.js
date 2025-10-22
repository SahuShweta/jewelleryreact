import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Wishlist = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
                    <Col>

                        {/* <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className='text-center'>S. No.</th>
                                    <th className='text-center'>Name</th>
                                    <th className='text-center'>Product Images</th>

                                    <th className='text-center'>price  </th>
                                    <th className='text-center'>Quantity  </th>
                                    <th className='text-center'>Delete  </th>
                                    <th className='text-center'> Edit </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products ?
                                        products.map((product, index) => {
                                            return (
                                                <tr key={index}>

                                                    <td>{index + 1}</td>
                                                    <td>{product.productDetails.productName}</td>
                                                    <td className='cartImage'>
                                                        <img src={`http://localhost:8090/upload/${product.productDetails.images[0]}`} alt="" />

                                                    </td>

                                                    <td>{product.quantity*product.productDetails.productPrice}</td>
                                                    
                                                    <td className='text-center'>
                                                        

                                                            {product.quantity}
                                                    </td>


                                                    <td className='text-center'><button onClick={() => handleDelete(product.productId)}><MdDelete /></button>  </td> 
                                                    <td className='text-center'> <FaEdit /> </td>

                                                </tr>
                                            )
                                        }

                                        )
                                        : <tr>
                                            <td colSpan={4}>
                                                Oops! No Data available.
                                            </td>
                                        </tr>
                                }
                            </tbody>
                        </Table> */}

                    </Col>
                </Row>
        </Container>
      </section>
    </div>
  )
}

export default Wishlist
