// CTA is Call To Action (encourage the user to contact the developer, similar to Contact Me)

import Link from "next/link";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="py-24 bg-primary/30 dark:bg-card-header">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Interested to to work together ?
          </h2>
          <Link href="contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
