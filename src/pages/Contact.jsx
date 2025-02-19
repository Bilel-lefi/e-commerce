import React, { useState } from "react";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false); // To track if the form was successfully submitted
  const [isError, setIsError] = useState(false); // To track if an error occurred during form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to backend or email API
      const response = await axios.post("http://localhost:8080/api/contact", formData);

      if (response.status === 200) {
        setIsSuccess(true); // Show success message
        setIsError(false);  // Reset error state
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error while sending message:", error);
      setIsSuccess(false);  // Reset success state
      setIsError(true);     // Show error message
    }
  };

  return (
    <div className="py-15 px-5 w-full max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg mt-10 mb-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Contactez-Nous</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nom :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Sujet :
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message :
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button type="submit" className="w-full bg-[#67806c] text-white py-2 rounded-md">
          Envoyer le message
        </button>
      </form>

      {/* Success Message */}
      {isSuccess && (
        <div className="mt-4 text-center text-green-500">
          <p>Votre message a été envoyé avec succès !</p>
        </div>
      )}

      {/* Error Message */}
      {isError && (
        <div className="mt-4 text-center text-red-500">
          <p>Une erreur est survenue. Veuillez réessayer plus tard.</p>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
