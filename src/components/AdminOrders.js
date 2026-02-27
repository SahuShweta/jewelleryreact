import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios';

const AdminOrders = () => {

  const navigate = useNavigate();
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/ssorders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log("Failed to fetch orders", err));
  }, []);

  const status = [
    "pending",
    "Order Placed",
    "Processing",
    "Order shipped",
    "Out For delivered",
    "Return Accepted",
    "Return Process complete",
    "Canceled"
  ];

  const orderStatusUpdate = (orderId, newStatus) => {
    axios
      .put(
        `http://localhost:8090/api/ssorders/user/${currentUser.id}/${orderId}/status`,
        { status: newStatus }
      )
      .then(() => window.location.reload())
      .catch((error) => console.error("Failed to update status", error));
  };

  return (
    <div>

      <Row>
        <Col>
          <h2 className="text-center" style={{ color: "#001F54" }}>All Orders</h2>
        </Col>
      </Row>

      <Container fluid>
        <div className="d-flex justify-content-center">
          <Table striped bordered hover>

            <thead>
              <tr>
                <th className='text-center' style={{ backgroundColor: "#001F54", color: "white" }}>Order Id</th>
                <th className='text-center' style={{ backgroundColor: "#001F54", color: "white" }}>User Id</th>
                <th className='text-center' style={{ backgroundColor: "#001F54", color: "white" }}>Address ID</th>
                <th className='text-center' style={{ backgroundColor: "#001F54", color: "white" }}>Product Name</th>
                <th className='text-center' style={{ backgroundColor: "#001F54", color: "white" }}>Image</th>
                <th className='text-center' style={{ backgroundColor: "#001F54", color: "white" }}>Gender</th>
                <th className='text-center' style={{ backgroundColor: "#001F54", color: "white" }}>Quantity</th>
                <th className='text-center' style={{ backgroundColor: "#001F54", color: "white" }}>Price</th>
                <th className='text-center' style={{ backgroundColor: "#001F54", color: "white" }}>Subtotal</th>
                <th className='text-center' style={{ backgroundColor: "#001F54", color: "white" }}>Total</th>
                <th className='text-center' style={{ backgroundColor: "#001F54", color: "white" }}>Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, orderIndex) =>
                order.products.map((item, productIndex) => (

                  <tr key={`${orderIndex}-${productIndex}`}>

                    {productIndex === 0 && (
                      <>
                        <td rowSpan={order.products.length} style={{ verticalAlign: "middle", color: "#001F54" }}>
                          {order.id}
                        </td>

                        <td rowSpan={order.products.length} style={{ verticalAlign: "middle", color: "#001F54" }}>
                          {order.userId}
                        </td>

                        <td rowSpan={order.products.length} style={{ verticalAlign: "middle", color: "#001F54" }}>
                          {order.addressId}
                        </td>
                      </>
                    )}

                    <td style={{ color: "#001F54" }}>
                      {item.productDetails.productName}
                    </td>

                    <td>
                      <img
                        src={`http://localhost:8090/upload/${item.productDetails.images[0]}`}
                        style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }}
                        alt="product"
                      />
                    </td>

                    <td style={{ color: "#001F54" }}>
                      {item.productDetails.productGender}
                    </td>

                    <td className="text-center" style={{ color: "#001F54" }}>
                      {item.quantity}
                    </td>

                    <td className="text-center" style={{ color: "#001F54" }}>
                      ₹{item.productDetails.productPrice}
                    </td>

                    <td className="text-center" style={{ color: "#001F54" }}>
                      ₹{item.quantity * item.productDetails.productPrice}
                    </td>

                    {productIndex === 0 && (
                      <td rowSpan={order.products.length} style={{ verticalAlign: "middle", fontWeight: "bold", color: "#001F54" }}>
                        ₹{order.totalAmount}
                      </td>
                    )}

                    {productIndex === 0 && (
                      <td rowSpan={order.products.length} style={{ verticalAlign: "middle" }}>
                        <select
                          className="form-select"
                          value={order.status}
                          onChange={(e) => orderStatusUpdate(order.id, e.target.value)}
                        >
                          {status.map((s, index) => (
                            <option key={index} value={index}>{s}</option>
                          ))}
                        </select>
                      </td>
                    )}

                  </tr>

                ))
              )}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan="9" style={{ fontWeight: "bold", backgroundColor: "#EEEEEE", color: "#001F54" }}>
                  Grand Total (All Orders)
                </td>

                <td style={{ fontWeight: "bold", backgroundColor: "#001F54", color: "white" }}>
                  ₹{orders.reduce((acc, curr) => acc + curr.totalAmount, 0)}
                </td>
              </tr>
            </tfoot>

          </Table>
        </div>
      </Container>

    </div>
  );
};

export default AdminOrders;











// import { Formik } from 'formik';
// import React, { useState, useEffect } from 'react'
// import { Col, Row, Table } from 'react-bootstrap';
// import { Formik, Form, Field } from 'formik';
// import axios from 'axios';
// import { useNavigate } from 'react-router';
// import { useSelector } from 'react-redux';


// const AdminOrders = () => {
//   let navigate = useNavigate();

//   const [orders, setOrders] = useState([]);
//   useEffect(() => {
//     axios.get('http://localhost:8090/api/ssorders').then((res) => {
//       console.log(res.data);
//       setOrders(res.data)
//     })
//   }, []);

//   const { user: currentUser } = useSelector((state) => state.auth);
//   console.log(currentUser)
//   useEffect(() => {
//     if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
//       console.log(currentUser.roles[0]);
//       navigate("/")
//     }
//   }, [currentUser, navigate]);


//   // const orders = [
//   //   {
//   //     id: "1",
//   //     items: [
//   //       {
//   //         productName: "Fringes Slay in Fringe Earrings",
//   //         ProductCategory: "",
//   //         productPrice: 509,
//   //         productQuantity: 2
//   //       },
//   //       {
//   //         productName: "Fringes Slay in Fringe Earrings",
//   //         ProductCategory: "",
//   //         productPrice: 509,
//   //         productQuantity: 2

//   //       }

//   //     ],
//   //     total: 499,
//   //     discount: 10,
//   //     grandTotal: 500,
//   //     status: 0
//   //   },
//   //   {
//   //     id: "2",
//   //     items: [
//   //       {
//   //         productName: "Fringes Chain Tessel Dangler Earrings",
//   //         ProductCategory: "",
//   //         productPrice: 509,
//   //         productQuantity: 3

//   //       },
//   //       {
//   //         productName: "Fringes Chain Tessel Dangler Earrings",
//   //         ProductCategory: "",
//   //         productPrice: 509,
//   //         productQuantity: 4

//   //       }

//   //     ],
//   //     total: 700,
//   //     discount: 10,
//   //     grandTotal: 1000,
//   //     status: 0
//   //   }


//   // ]
//   const status = [
//     "Order Placed",
//     "Processing",
//     "Order shipped",
//     "Out For deleverd",
//     "Return Accepted",
//     "Return Process complete",
//     "Canceled"



//   ]

//   const orderStatusUpdate = (orderId, newStatus) => {
//     console.log(orderId)
//     console.log(newStatus)

//     // axios.put(http://localhost:8090/api/carts/user/${currentUser.id}/item/${productId}, { quantity: newQuantity }).then(() => {
//     //   window.location.reload();

//     // }).catch((error) => { console.error("Failed to update quantity", error); });

//   }


//   return (
//     <div>
//       <Table>
//         <tbody>
//           {
//             orders.map((order, index) => {
//               return (
//                 <tr key={index}>
//                   <td>
//                     {order.id}

//                   </td>
//                   <td>
//                     {
//                       order.products.map((item, index) => {
//                         return (
//                           <p key={index}>
//                             {item.productDetails.productName}   Rs. {item.price} X {item.quantity} = {item.price * item.quantity}
//                           </p>

//                         )
//                       }

//                       )
//                     }
//                     <hr />
//                     <p>Total : {order.totalAmount}</p>
//                     <p>Grand Total : {order.grandTotal}</p>

//                   </td>

//                   <td>
//                     <p> status : {status[order.status]}</p>
//                   </td>
//                   <td>
//                     <Formik
//                       initialValues={{
//                         orderStatus: '',
//                       }}
//                     // validationSchema={CategorySchema}
//                     // onSubmit={handleSubmit}
//                     >
//                       {({ errors, touched }) => (
//                         <Form>
//                           <div>
//                             <Row >

//                               {/* <Field name="orderStatus" as="select" className="inputbox" onChange={() => orderStatusUpdate(order.id, formValue orderStatus)}> */}
//                               {
//                                 status.map((data, index) => {
//                                   return (
//                                     <option value={index}>{data}</option>
//                                   )
//                                 }

//                                 )
//                               }

//                               {/* </Field> */}

//                             </Row>

//                           </div>
//                         </Form>
//                       )}
//                     </Formik>
//                   </td>
//                 </tr>
//               )
//             }

//             )
//           }
//         </tbody>
//       </Table>
//     </div>
//   )
// }

// export default AdminOrders