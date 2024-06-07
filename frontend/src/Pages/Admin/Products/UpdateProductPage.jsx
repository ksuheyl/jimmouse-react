import { Button, Form, Input, InputNumber, Select, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UpdateProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const [categoriesResponse, singleProductResponse] = await Promise.all([
          fetch(`${apiUrl}/api/categories`),
          fetch(`${apiUrl}/api/products/${productId}`),
        ]);

        if (!categoriesResponse.ok || !singleProductResponse.ok) {
          message.error("Data fetch failed.");
          return;
        }

        const [categoriesData, singleProductData] = await Promise.all([
          categoriesResponse.json(),
          singleProductResponse.json(),
        ]);

        setCategories(categoriesData);

        if (singleProductData) {
          form.setFieldsValue({
            name: singleProductData.name,
            current: singleProductData.price.current,
            discount: singleProductData.price.discount,
            description: singleProductData.description,
            image: singleProductData.image.join("\n"),
            colors: singleProductData.colors.join("\n"),
            sizes: singleProductData.sizes.join("\n"),
            category: singleProductData.category,
          });
        }
      } catch (error) {
        console.log("Data error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl, productId, form]);

  const onFinish = async (values) => {
    console.log(values);
    const imageLinks = values.image.split("\n").map((link) => link.trim());
    const colors = values.colors.split("\n").map((link) => link.trim());
    const sizes = values.sizes.split("\n").map((link) => link.trim());
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/products/${productId}`, {
        method: "PUT",
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
        message.success("The product has been updated successfully.");
        navigate("/admin/products");
      } else {
        message.error("An error occurred while updating the product.");
      }
    } catch (error) {
      console.log("Product update error:", error);
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
          label="Product Category"
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
          label="discount rate"
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
          label="Product Images"
          name="image"
          rules={[
            {
              required: true,
              message: "Please enter at least one product image link!",
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
          Update
        </Button>
      </Form>
    </Spin>
  );
};

export default UpdateProductPage;
