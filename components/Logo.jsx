import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/home-icon-40.svg"
        width={48}
        height={48}
        priority
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
