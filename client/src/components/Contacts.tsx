import React, { useState } from "react";
import SpinnerOverlay from "./Loading.tsx";
import { ContactProps } from "../utilities/types.ts";

const ContactModal: React.FC<ContactProps> = ({ isModalOpen, setModalOpen }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending");
    const data_packet = "Sender: " + 
      form.firstName + 
      " " + form.lastName + 
      " Email: " + form.email + 
      " Phone: " + form.phone + "\n" + form.message;

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: data_packet
        }),
      });
      console.log("Received the form");

      const data = await res.json();

      if (res.ok) {
        setStatus("Success");
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        alert("The message was successfully sent...");
      } else {
        setStatus(`Failed to send: ${data.error}`);
        alert("The message was not received...");
      }
    } catch (err) {
      setStatus("Error");
    }
  };

  return (
    <>
      {isModalOpen && (
        <div tabIndex={-1} className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
          {status === "Sending" ? (
            <SpinnerOverlay />
          ) : (
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="bg-white rounded-lg shadow dark:bg-gray-700 card">
                <div className="border-b border-gray-900 dark:border-gray-600 p-4 md:p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Me</h3>
                    <button
                      onClick={() => setModalOpen(false)}
                      className="text-gray-400 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg text-sm w-8 h-8 flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="text-l opacity-60 text-white mt-5">
                    * Leave me a message, send your inquiry directly to my email account. I will then reach out via email or phone number.
                  </div>
                </div>

                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-200">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md bg-[#3a3a3a] border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-200">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md bg-[#3a3a3a] border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md bg-[#3a3a3a] border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-200">Phone (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-[#3a3a3a] border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      onChange={handleChange}
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-md bg-[#3a3a3a] border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 text-white purple-bg-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ContactModal;

