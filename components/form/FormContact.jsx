"use client";

// icons
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
// ui components
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const FormContact = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input name */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input mail */}
      <div className="relative flex items-center">
        <Input type="mail" id="mail" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input message */}
      <div className="relative flex items-center">
        <Textarea
          type="message"
          id="message"
          placeholder="Type your message here"
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default FormContact;
