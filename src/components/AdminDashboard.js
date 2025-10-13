import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import Dropdown from 'react-bootstrap/Dropdown';



const AdminDashboard = () => {
  return (
    <div>

      <Container>
        <Row>
          <Col md={2}>

            <p><Link to={'/AddCategory'} >Add Category</Link></p>
            <p><Link to={'/AdminProducts'} >Admin Products</Link></p>
            <p><Link to={'/AdminOrders'} >Admin Orders</Link></p>
            <p><Link to={'/AddProducts'} >Admin Products</Link></p>
            <h2>My Ecommerce</h2>
            <h4>Dashboard</h4>
            <h4>Orders</h4>
            <h4>Reports</h4>
            <h4>Sales</h4>
            <h4>Products</h4>
            <h4>Settings</h4>
            <h4>Help center</h4>


          </Col>
          <Col md={10}>
            <Row>
              <Col><h1>Dashboard</h1></Col>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    This month
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Last 45 days</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Last 90 days</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Last 6 months</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

            <Row className='dashboard'>
                <Col md={2} className='d1'>

                  <h6>Total Sales</h6>
                  <h3>$116358</h3>
                  <p>50% last month</p>
                </Col>
                <Col md={2} className='d1'>
                  <h6>Total Orders</h6>
                  <h3>200</h3>
                  <p>12% last month</p>
                </Col>
                <Col md={2} className='d1'>
                  <h6>Total Profit</h6>
                  <h3>$503625</h3>
                  <p>30% last month</p>
                </Col>
                <Col md={2} className='d1'>
                  <h6>New Customers</h6>
                  <h3>100+</h3>
                  <p>10% last month</p>
                </Col>
            </Row>
            <Row>
              <Col>
                  
    
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col></Col>

            </Row>
            
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default AdminDashboard
