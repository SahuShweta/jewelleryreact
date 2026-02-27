import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from "react-bootstrap";
import axios from 'axios';
import { useSelector } from "react-redux";
import Badge from 'react-bootstrap/Badge';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user: currentUser } = useSelector((state) => state.auth);

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

  useEffect(() => {
    if (!currentUser) return;

    axios
      .get(`http://localhost:8090/api/ssorders/user/${currentUser.id}`)
      .then((response) => {
        console.log(response.data);
        setOrders(response.data);
      })
      .catch((err) => console.log("Failed to fetch user orders", err));
  }, [currentUser]);

  return (
    <div>

      <Container style={{ paddingTop: "20px" }}>
        <Row>
          <Col>
            <h2>Your Orders</h2>
          </Col>
        </Row>

        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>
                  No Orders Found
                </td>
              </tr>
            ) : (
              orders.map((order, orderIndex) =>
                order.products.map((item, productIndex) => (
                  <tr key={`${orderIndex}-${productIndex}`}>
                    <td>{orderIndex + 1}</td>

                    <td>
                      <img
                        src={`http://localhost:8090/upload/${item.productDetails.images[0]}`}
                        alt="product"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                          borderRadius: "8px"
                        }}
                      />
                    </td>

                    <td>{item.productDetails.productName}</td>

                    <td>₹{item.productDetails.productPrice}</td>

                    <td>{item.quantity}</td>

                    <td>₹{item.quantity * item.productDetails.productPrice}</td>

                    {productIndex === 0 && (
                      <td rowSpan={order.products.length}>
                        <Badge bg="primary">{status[order.status]}</Badge>
                      </td>
                    )}
                  </tr>
                ))
              )
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Orders;
