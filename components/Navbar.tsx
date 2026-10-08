import Link from "next/link";
import { profile } from "@/data/projects";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">{profile.name}</Link>
        <ul>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#projects">Projects</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          <li><a href={profile.cv} download>CV</a></li>
        </ul>
      </div>
    </nav>
  );
}
