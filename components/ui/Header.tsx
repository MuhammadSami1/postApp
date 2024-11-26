import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b px-7 py-4">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="Logo"
          className="h-[35px] w-[35px]"
          width="35"
          height="35"
        />
      </Link>
      <Navbar />
    </header>
  );
}
