import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend);










// ChartJS.register(
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   Title,
//   Tooltip,
//   Legend
// );

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sales Chart",
    },
  },
};


export const doughnutData = {
  labels: ["Electronics", "Clothes", "Shoes", "Accessories"],
  datasets: [
    {
      label: "Sales",
      data: [300, 150, 200, 100],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)"
      ],
      borderWidth: 1,
    },
  ],
};

export const doughnutOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Doughnut Chart",
    },
  },
};



// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [12000, 19000, 3000, 5000, 2000],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1
    }
  ]
};

export const pieData = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      label: "Visitors",
      data: [300, 150, 200, 100],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)"
      ],
      borderWidth: 1,
    },
  ],
};

export const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Pie Chart",
    },
  },
};

const AdminDashboard = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Admin Dashboard</h1>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>

              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>

          <Col md={2} className='dashboard-sidebar'>

            {/* <p><Link to={'/AddCategory'} >Add Category</Link></p>
            <p><Link to={'/AdminProducts'} >Admin Products</Link></p>
            <p><Link to={'/AdminOrders'} >Admin Orders</Link></p>
            <p><Link to={'/AddProduct'} >Admin Products</Link></p>
            <h2>My Ecommerce</h2>
            <h4>Dashboard</h4>
            <h4>Orders</h4>
            <h4>Reports</h4>
            <h4>Sales</h4>
            <h4>Products</h4>
            <h4>Settings</h4>
            <h4>Help center</h4> */}

            <ul>
              <li><h4><Link to={'/AddCategory'} >Add Category</Link></h4></li>
              <li><h4><Link to={'/AdminProducts'} >Admin Products</Link></h4></li>
              <li><h4><Link to={'/AdminOrders'} >Admin Orders</Link></h4></li>
              <li><h4><Link to={'/AddProduct'} >Admin Products</Link></h4></li>
              <li><h4>Dashboard</h4></li>
              <li><h4>Orders</h4></li>
              <li><h4>Sales</h4></li>
              <li><h4>Total Profit</h4></li>
              <li><h4>New Customers</h4></li>
            </ul>


          </Col>
          <Col md={10}>
            <div className='dashboard-header'>
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
            </div>

            <Row className='dashboard'>
              <Col md={2} className='d1'>

                <h6>Total Sales</h6>
                <h3>₹16,358</h3>
                <p>50% last month</p>
              </Col>
              <Col md={2} className='d1'>
                <h6>Total Orders</h6>
                <h3>200</h3>
                <p>12% last month</p>
              </Col>
              <Col md={2} className='d1'>
                <h6>Total Profit</h6>
                <h3>₹50,625</h3>
                <p>30% last month</p>
              </Col>
              <Col md={2} className='d1'>
                <h6>New Customers</h6>
                <h3>100+</h3>
                <p>10% last month</p>
              </Col>
            </Row>
            <Row className='graph-section'>
              <Col md={7}>
                <div className='graph-card'>
                  <h5> Sales Overview</h5>
                  <Line data={data} options={options} />
                </div>

              </Col>
              <Col md={5}>
                <div className='graph-card'>
                  <h5> Orders Overview</h5>
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <div className='graph-card'>
                  <h5> Total Profit</h5>
                  <Pie data={pieData} options={pieOptions} />

                </div>
              </Col>
              <Col></Col>

            </Row>

          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default AdminDashboard
