"use client";

import { useState } from "react";
import clsx from "clsx";
import { toast } from "sonner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const contentType = res.headers.get("content-type");

      if (!res.ok) {
        const errorData =
          contentType && contentType.includes("application/json")
            ? await res.json()
            : { message: "Unexpected server error" };

        toast.error(`Failed: ${errorData.message}`);
        return;
      }

      const data = await res.json();
      toast.success(data.message || "Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col md:flex-row relative items-start justify-between Geist max-w-6xl w-[95%] mt-40 border-b pb-5">
        <div className="flex justify-start items-start flex-col md:w-[40%] w-[95%]">
          <h3 className="w-full text-4xl md:text-5xl GeistBold mb-6 text-foreground uppercase">
            Get in Touch
          </h3>
          <p className="w-full text-left text-sm md:text-xl Geist mb-6 text-foreground">
            Have an idea, question, or project in mind? We’d love to hear from
            you! Reach out to Arctic Base and let’s build something awesome
            together—no delays, no fuss, just clear communication and great
            collaboration.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-start items-start w-full md:w-[50%] space-y-6"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="w-full text-left text-sm md:text-xl Geist py-3 mb-6 border-b text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full text-left text-sm md:text-xl Geist py-3 mb-6 border-b text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows={5}
            required
            className="w-full text-left text-sm md:text-xl Geist py-3 mb-6 border-b text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={clsx(
              "w-full bg-primary text-background py-3 text-xl rounded-full GeistMedium uppercase transition-all duration-300",
              loading
                ? "bg-primary text-background opacity-70 cursor-not-allowed"
                : "bg-primary text-background hover:bg-opacity-80"
            )}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 py-10">
        <p className="text-lg text-muted-foreground mb-6 max-w-xl">
          Quickly connect and directly discuss your project requirements with
          our team. No delays, no middlemen – just clear, focused communication
          to bring your ideas to life.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 text-xl pt-5">
          <a
            href="mailto:hello@arcticbase.tech"
            className="Geist hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            hello@arcticbase.tech
          </a>
          <a
            href="tel:+919104320305"
            className="Geist hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            +91 91043 20305
          </a>
          <a
            href="tel:+916351240714"
            className="Geist hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            +91 63512 40714
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
