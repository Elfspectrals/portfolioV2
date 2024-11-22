import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); // New state for showing "sending" message

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    setIsSending(true); // Set sending state to true

    fetch('https://formsubmit.co/ajax/jerome.neupert@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsSending(false); // Reset sending state
        setIsSubmitted(true); // Update submission status
      })
      .catch((error) => {
        console.error(error);
        setIsSending(false); // Reset sending state even if there's an error
      });
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto p-5 bg-gray-800 rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-indigo-400">
        Contact Me
      </h2>
      {isSending ? (
        <p className="text-blue-500 text-center text-xl">
          Votre message s'envoie, merci d'attendre...
        </p>
      ) : isSubmitted ? (
        <p className="text-green-500 text-center text-xl">
          Merci pour votre message ! Je vous répondrai bientôt.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-gray-300">
            <span className="block font-semibold mb-1">Nom :</span>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              required
            />
          </label>
          <label className="text-gray-300">
            <span className="block font-semibold mb-1">Email :</span>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              required
            />
          </label>
          <label className="text-gray-300">
            <span className="block font-semibold mb-1">Message :</span>
            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
          >
            Envoyer le message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactMe;
