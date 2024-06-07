import { Button, Form, Input, InputNumber, Select, Spin, message } from "antd";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${apiUrl}/api/categories`);

        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          message.error("data fetch error.");
        }
      } catch (error) {
        console.log("data error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [apiUrl]);

  const onFinish = async (values) => {
    const imageLinks = values.image.split("\n").map((link) => link.trim());
    const colors = values.colors.split("\n").map((link) => link.trim());
    const sizes = values.sizes.split("\n").map((link) => link.trim());
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          price: {
            current: values.current,
            discount: values.discount,
          },
          colors,
          sizes,
          image: imageLinks,
        }),
      });

      if (response.ok) {
        message.success("product created successfully");
        form.resetFields();
      } else {
        message.error("An error occurred while creating the product.");
      }
    } catch (error) {
      console.log("Product creation error:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Product name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter the Product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Product category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please select category!",
            },
          ]}
        >
          <Select>
            {categories.map((category) => (
              <Select.Option value={category._id} key={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Price"
          name="current"
          rules={[
            {
              required: true,
              message: "Please enter the product price!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Discount rate"
          name="discount"
          rules={[
            {
              required: true,
              message: "Please enter a product discount rate!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Product Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please enter a product description!",
            },
          ]}
        >
          <ReactQuill
            theme="snow"
            style={{
              backgroundColor: "white",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Product image"
          name="image"
          rules={[
            {
              required: true,
              message: "Please enter at least 1 product image links!",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Write each image link on a new line."
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item
          label="Product Colors (RGB Codes)"
          name="colors"
          rules={[
            {
              required: true,
              message: "Please enter at least 1 product color!",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Write each RGB code on a new line."
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item
          label="Product Sizes"
          name="sizes"
          rules={[
            {
              required: true,
              message: "Please enter at least 1 item size!",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Write each size measurement on a new line."
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </Spin>
  );
};

export default CreateProductPage;