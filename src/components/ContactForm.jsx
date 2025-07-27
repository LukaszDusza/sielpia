import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Prosta walidacja
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Wpisz swoje imię i nazwisko";
    if (!form.email.trim()) {
      errs.email = "Wpisz adres email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Podaj poprawny adres email";
    }
    if (!form.message.trim()) errs.message = "Wpisz wiadomość";
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setErrors({});
    setSuccess(false);

    // Symulacja wysyłania danych (tu możesz podpiąć swoje API)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto mt-10 p-4 gap-8 bg-white rounded-lg shadow-md">
      {/* Sekcja tekstowa */}
      <div className="md:w-1/2 w-full flex flex-col justify-start items-start mb-6 md:mb-0">
        <h2 className="text-2xl font-bold tracking-wider text-black mb-2">
          Formularz Kontaktowy
        </h2>
        <div className="w-20 h-05 bg-purple-600 rounded-full mb-4" />
        <p className="text-black tracking-wide text-base">
          Skontaktuj się z nami wypełniając poniższy formularz. Czekamy na Twoje pytania i sugestie!
        </p>
      </div>

      {/* Formularz */}
      <form
        className="md:w-1/2 w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
        noValidate
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black tracking-wide mb-1">
            Imię i nazwisko
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black tracking-wide ${
              errors.name ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black tracking-wide mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black tracking-wide ${
              errors.email ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black tracking-wide mb-1">
            Wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
            className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black tracking-wide resize-y ${
              errors.message ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-block px-4 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full hover:shadow-lg transition-shadow duration-200 disabled:hover:shadow-none"
        >
          {loading ? "WYSYŁANIE..." : "WYŚLIJ"}
        </button>

        {success && (
          <div className="text-green-500 font-semibold text-center tracking-wide mt-2">
            Wiadomość została wysłana 👍
          </div>
        )}
      </form>
    </div>
  );
}