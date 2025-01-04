"use client";

import { useState } from "react";
import axios from "axios";

export default function SubmitQuestion() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    details: "",
    city: "",
    appointmentTime: "",
    agreeToTerms: false,
  });

  const saudiCities = [
    "الرياض",
    "جدة",
    "مكة المكرمة",
    "المدينة المنورة",
    "الدمام",
    "الخبر",
    "تبوك",
    "أبها",
    // Add more cities as needed
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الجوال مطلوب";
    } else if (!/^5\d{8}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "يجب أن يبدأ الرقم بـ 5 ويتكون من 9 أرقام";
    }
    if (!formData.details.trim()) newErrors.details = "التفاصيل مطلوبة";
    if (!formData.city) newErrors.city = "المدينة مطلوبة";
    if (!formData.appointmentTime)
      newErrors.appointmentTime = "وقت التعيين مطلوب";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("/api/submit-question", formData);
        // Handle success
      } catch (error) {
        // Handle error
      }
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
      dir="rtl"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 space-y-4 bg-white rounded-lg"
    >
      <h2 className="pb-4 text-center text-lg md:text-2xl font-semibold">
        استشارة محامي مجانا
      </h2>
      <div className="relative">
        <label className="absolute -top-3 right-3 px-1 bg-white text-sm text-gray-600">
          الاسم
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}
      </div>

      <div className="relative">
        <label className="absolute -top-3 right-3 px-1 bg-white text-sm text-gray-600">
          رقم الجوال
        </label>
        <div className="flex flex-row-reverse gap-1">
          <span className="inline-flex items-center px-3 border border-l-1 border-gray-300 bg-gray-50 text-gray-500">
            966+
          </span>
          <input
            dir="ltr"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone}</span>
        )}
      </div>

      <div className="relative">
        <label className="absolute -top-3 right-3 px-1 bg-white text-sm text-gray-600">
          التفاصيل
        </label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          className="w-full px-3 py-2 border resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows="2"
        />
      </div>

      <div className="relative">
        <label className="absolute -top-3 right-3 px-1 bg-white text-sm text-gray-600">
          المدينة
        </label>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">اختر المدينة</option>
          {saudiCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {errors.city && (
          <span className="text-red-500 text-sm">{errors.city}</span>
        )}
      </div>

      {formData.city && (
        <div className="relative">
          <label className="block mb-2 text-sm text-gray-600">
            متى تريد تعيين محامي
          </label>
          <div className="space-y-2">
            {[
              { value: "immediately", label: "فوراً" },
              { value: "30days", label: "خلال 30 يوم" },
              { value: "notSure", label: "غير متأكد" },
            ].map((option) => (
              <div key={option.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="appointmentTime"
                  value={option.value}
                  checked={formData.appointmentTime === option.value}
                  onChange={handleChange}
                  className="w-4 h-4 focus:ring-2 focus:ring-blue-500"
                />
                <label className="text-sm text-gray-600">{option.label}</label>
              </div>
            ))}
          </div>
          {errors.appointmentTime && (
            <span className="text-red-500 text-sm">
              {errors.appointmentTime}
            </span>
          )}
        </div>
      )}

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
