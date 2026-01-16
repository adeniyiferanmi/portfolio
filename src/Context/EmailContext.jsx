import React, { createContext, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

export const EmailContext = createContext();

const EmailProvider = ({ children }) => {
  const [sendingEmail, setSendEmail] = useState(false);

  const sendEmail = async (form) => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    try {
      setSendEmail(true);

      await emailjs.send(serviceID, templateID, 
        {
          name: form.name,
          email: form.email,
          message: form.message,
        }, publicKey);
        
      toast.success("Email sent successfully!");
    } catch (error) {
      toast.error("Failed to send email. Please try again later.");
    } finally {
      setSendEmail(false);
    }
  };
  const value = { sendEmail, sendingEmail };
  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
};

export default EmailProvider;
