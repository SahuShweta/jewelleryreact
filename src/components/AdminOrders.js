// import { Formik } from 'formik';
import React, { useState, useEffect } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';


const AdminOrders = () => {

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8090/api/ssorders').then((res) => {
      console.log(res.data);
      setOrders(res.data)
    })
  }, []);
  // const orders = [
  //   {
  //     id: "1",
  //     items: [
  //       {
  //         productName: "Fringes Slay in Fringe Earrings",
  //         ProductCategory: "",
  //         productPrice: 509,
  //         productQuantity: 2
  //       },
  //       {
  //         productName: "Fringes Slay in Fringe Earrings",
  //         ProductCategory: "",
  //         productPrice: 509,
  //         productQuantity: 2

  //       }

  //     ],
  //     total: 499,
  //     discount: 10,
  //     grandTotal: 500,
  //     status: 0
  //   },
  //   {
  //     id: "2",
  //     items: [
  //       {
  //         productName: "Fringes Chain Tessel Dangler Earrings",
  //         ProductCategory: "",
  //         productPrice: 509,
  //         productQuantity: 3

  //       },
  //       {
  //         productName: "Fringes Chain Tessel Dangler Earrings",
  //         ProductCategory: "",
  //         productPrice: 509,
  //         productQuantity: 4

  //       }

  //     ],
  //     total: 700,
  //     discount: 10,
  //     grandTotal: 1000,
  //     status: 0
  //   }


  // ]
  const status = [
    "Order Placed",
    "Processing",
    "Order shipped",
    "Out For deleverd",
    "Return Accepted",
    "Return Process complete",
    "Canceled"



  ]

  const orderStatusUpdate = (orderId, newStatus) => {
    console.log(orderId)
    console.log(newStatus)

    // axios.put(http://localhost:8090/api/carts/user/${currentUser.id}/item/${productId}, { quantity: newQuantity }).then(() => {
    //   window.location.reload();

    // }).catch((error) => { console.error("Failed to update quantity", error); });

  }


  return (
    <div>
      <Table>
        <tbody>
          {
            orders.map((order, index) => {
              return (
                <tr key={index}>
                  <td>
                    {order.id}

                  </td>
                  <td>
                    {
                      order.products.map((item, index) => {
                        return (
                          <p key={index}>
                            {item.productDetails.productName}   Rs. {item.price} X {item.quantity} = {item.price * item.quantity}
                          </p>

                        )
                      }

                      )
                    }
                    <hr />
                    <p>Total : {order.totalAmount}</p>
                    <p>Grand Total : {order.grandTotal}</p>

                  </td>

                  <td>
                    <p> status : {status[order.status]}</p>
                  </td>
                  <td>
                    <Formik
                      initialValues={{
                        orderStatus: '',
                      }}
                    // validationSchema={CategorySchema}
                    // onSubmit={handleSubmit}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div>
                            <Row >

                              {/* <Field name="orderStatus" as="select" className="inputbox" onChange={() => orderStatusUpdate(order.id, formValue orderStatus)}> */}
                              {
                                status.map((data, index) => {
                                  return (
                                    <option value={index}>{data}</option>
                                  )
                                }

                                )
                              }

                              {/* </Field> */}

                            </Row>

                          </div>
                        </Form>
                      )}
                    </Formik>
                  </td>
                </tr>
              )
            }

            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default AdminOrders