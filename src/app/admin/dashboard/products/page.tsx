"use client";

import React, { useState } from "react";
import axios, { AxiosError } from "axios";

const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check for required fields
    const { name, price, category } = formData;
    if (!name || !price || !category) {
      alert("Please fill out all required fields: Name, Price, and Category.");
      return;
    }

    setLoading(true);

    try {
      // Send POST request to add product
      const response = await axios.post("/api/admin/products", {
        ...formData,
        price: Number(formData.price), // Ensure price is a number
        stock: formData.stock ? Number(formData.stock) : 0, // Convert stock to number, default to 0
      });

      alert("Product added successfully!");
      console.log(response.data);

      // Reset the form after successful submission
      setFormData({
        name: "",
        price: "",
        description: "",
        category: "",
        stock: "",
        image: "",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
        alert(error.response?.data?.message || "Failed to add product. Please try again.");
      } else {
        // Handle non-Axios errors
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      {/* Name Field */}
      <input
        type="text"
        name="name"
        placeholder="Product Name *"
        value={formData.name}
        onChange={handleChange}
        className="border px-4 py-2 w-full"
        required
      />

      {/* Price Field */}
      <input
        type="number"
        name="price"
        placeholder="Price *"
        value={formData.price}
        onChange={handleChange}
        className="border px-4 py-2 w-full"
        required
      />

      {/* Description Field */}
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="border px-4 py-2 w-full"
      />

      {/* Category Field */}
      <input
        type="text"
        name="category"
        placeholder="Category *"
        value={formData.category}
        onChange={handleChange}
        className="border px-4 py-2 w-full"
        required
      />

      {/* Stock Field */}
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        className="border px-4 py-2 w-full"
      />

      {/* Image Field */}
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        className="border px-4 py-2 w-full"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
};

export default AddProduct;
