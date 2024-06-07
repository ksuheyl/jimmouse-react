import { Button, Form, Input, InputNumber, Spin, message } from "antd";
import { useState } from "react";

const CreateCouponPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/coupons`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("The coupon code has been created successfully.");
        form.resetFields();
      } else {
        message.error("An error occurred while creating the coupon code.");
      }
    } catch (error) {
      console.log("Coupon create error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="coupon code"
          name="code"
          rules={[
            {
              required: true,
              message: "Please enter the code",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Coupon discount"
          name="discountPercent"
          rules={[
            {
              required: true,
              message: "Please enter the discount rate",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </Spin>
  );
};

export default CreateCouponPage;
