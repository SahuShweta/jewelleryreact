import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import Dropdown from 'react-bootstrap/Dropdown';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ComposedChart, Area, Bar } from 'recharts';





const firstData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];


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
                <LineChart
                  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                  responsive
                  data={firstData}
                  margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis width="auto" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>

              </Col>
              <Col>
                <ComposedChart
                  layout="vertical"
                  style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1 / 1.618 }}
                  responsive
                  data={data}
                  margin={{
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" scale="band" width="auto" />
                  <Tooltip />
                  <Legend />
                  <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                  <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                  <Line dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
              </Col>
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
