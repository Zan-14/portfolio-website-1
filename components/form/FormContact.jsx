"use client";
// functioning the form
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// icons
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
// ui components
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const FormContact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kj1wslm",
        "template_zontg06",
        form.current,
        "2ECa1u_t-gdu2efAP"
      )
      .then(
        result => {
          alert("Email sent successfully");
          e.target.reset();
        },
        error => {
          alert(error.text);
        }
      );
  };
  return (
    <form className="flex flex-col gap-y-4" ref={form} onSubmit={sendEmail}>
      <p className="text-center">This form is functional. Please don't spam!</p>
      {/* input name */}
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          placeholder="Name"
          name="user_name"
          required
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input mail */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="mail"
          placeholder="Email"
          name="user_email"
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input message */}
      <div className="relative flex items-center">
        <Textarea
          type="message"
          id="message"
          placeholder="Type your message here"
          name="message"
          required
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]" type="submit">
        Let's Talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default FormContact;
