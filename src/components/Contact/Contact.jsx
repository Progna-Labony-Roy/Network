import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h8blw8w', 'template_mka0hfl', form.current, {
        publicKey: 'AtXX8i6MtucT3D9P1',
      })
      .then(
        () => {
          setStatus('SUCCESS! Your message has been sent.');
          form.current.reset();
        },
        (error) => {
          setStatus(`FAILED... ${error.text}`);
        },
      );
  };

  return (
     <div className="max-w-lg mx-auto my-16 p-6  shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Send
        </button>
      </form>
      {status && <p className={`mt-4 text-center ${status.includes('SUCCESS') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>}
    </div>
  );
};

export default Contact;