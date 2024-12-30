"use client";

import { useState } from "react";
import axios from "axios";

export default function SubmitQuestion() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    details: "",
    city: "",
    appointmentTime: "",
    agreeToTerms: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/submit-question", formData);
      // التعامل مع الاستجابة هنا
    } catch (error) {
      // التعامل مع الخطأ هنا
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form
     
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 space-y-4 bg-white rounded-lg"
    >
      <h2 className="pb-4 text-right text-lg font-semibold">!...استشارة محامي مجانا</h2>
      <div className="relative">
        <label className="absolute -top-3 right-3 px-1 bg-white text-sm text-gray-600">
          الاسم
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none"
          required
        />
      </div>

      <div className="relative">
        <label className="absolute -top-3 right-3 px-1 bg-white text-sm text-gray-600">
          رقم الجوال
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none"
          required
        />
      </div>

      <div className="relative">
        <label className="absolute -top-3 right-3 px-1 bg-white text-sm text-gray-600">
          التفاصيل
        </label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          className="w-full px-3 py-2 border resize-none rounded-md focus:outline-none"
          rows="2"
          required
        />
      </div>

      <div className="relative">
        <label className="absolute -top-3 right-3 px-1 bg-white text-sm text-gray-600">
          المدينة
        </label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none"
          required
        />
      </div>

      <div className="relative">
        <label className="absolute -top-3 right-3 px-1 bg-white text-sm text-gray-600">
          متى تريد تعيين محامي
        </label>
        <input
          type="text"
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none"
          required
        />
      </div>

      <div dir="rtl" className="flex items-center gap-2">
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="w-4 h-4"
          required
        />
        <label className="text-sm text-gray-600">
          أوافق على شروط الاستخدام والخصوصية
        </label>
      </div>
      
      <button
        type="submit"
        className="lg:w-1/3 w-full mr-auto bg-[#EE5615] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
      >
        استشير محامي
      </button>
    </form>
  );
}
