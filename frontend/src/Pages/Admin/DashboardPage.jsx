import { useEffect, useState, useCallback } from "react";
import { message, Row, Col, Card, Statistic } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DashboardPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const MY_STRIPE_SECRET_KEY = import.meta.env.VITE_API_STRIPE_SECRET_KEY;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const fetchUsers = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/users`);

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Data Bring Error");
      }
    } catch (error) {
      console.log("Data Error:", error);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.stripe.com/v1/payment_intents`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${MY_STRIPE_SECRET_KEY}`,
            },
          }
        );
        if (response.ok) {
          const { data } = await response.json();
        console.log(data);

          setDataSource(data);
        } else {
          message.error("Data fetch failed.");
        }
      } catch (error) {
        console.log("data error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    fetchUsers();
  }, [MY_STRIPE_SECRET_KEY, fetchUsers]);

  const productSalesData = [
    { name: "January", numberOfProductsSold: 10 },
    { name: "February", numberOfProductsSold: 15 },
    { name: "March", numberOfProductsSold: 20 },
    { name: "April", numberOfProductsSold: 25 },
    { name: "May", numberOfProductsSold: 30 },
    { name: "June", numberOfProductsSold: 35 },
  ];

  const customerData = [
    { name: "January", theNumberOfCustomers: 20 },
    { name: "February", theNumberOfCustomers: 25 },
    { name: "March", theNumberOfCustomers: 30 },
    { name: "April", theNumberOfCustomers: 10 },
    { name: "May", theNumberOfCustomers: 40 },
    { name: "June", theNumberOfCustomers: 45 },
  ];

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Product Sales"
              value={productSalesData.reduce(
                (acc, item) => acc + item.numberOfProductsSold,
                0
              )}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Number of Customers"
              value={customerData.reduce(
                (acc, item) => acc + item.theNumberOfCustomers,
                0
              )}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Revenue"
              value={
                dataSource.reduce(
                  (acc, item) => acc + item.amount_received,
                  0
                ) / 100
              }
              prefix="$"
            />
          </Card>
        </Col>
      </Row>
      <Card style={{ marginTop: "20px" }}>
        <h2>Product Sales Increase in the Last Month</h2>
        <LineChart
          width={600}
          height={600}
          data={productSalesData}
          margin={{ top: 5, right: 30, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="numberOfProductsSold"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Card>
      <Card style={{ marginTop: "20px" }}>
        <h2>Customer Increase in the Last Month</h2>
        <LineChart
          width={600}
          height={300}
          data={customerData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="theNumberOfCustomers"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Card>
    </div>
  );
};

export default DashboardPage;
