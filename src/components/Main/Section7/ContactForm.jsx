import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_yn1zazt',        // ✅ your real service ID
            'template_w3s7rgd',       // ✅ your real template ID
            form.current,
            '0DohKSDS7WtYrfNCJ'       // ✅ your public key from dashboard
        )
            .then(
                (result) => {
                    console.log('Email sent:', result.text);
                    toast.success('Message sent successfully!');
                },
                (error) => {
                    console.error('Error sending email:', error.text);
                    toast.error('Failed to send message.');
                }
            );

        e.target.reset();
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className="mt-7">
                <div className="mb-4 flex gap-2 overflow-hidden">
                    <input
                        id="email"
                        type="email"
                        name="reply_to"
                        className="w-[400px] p-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="Email"
                        required
                    />
                    <button
                        type="submit"
                        className="px-10 rounded py-[10px] bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300"
                    >
                        Subscribe
                    </button>
                </div>
            </form>

            {/* 👇 This is required to show toast notifications */}
            <ToastContainer position="top-center" autoClose={3000} />
        </>
    );
};

export default ContactForm;
