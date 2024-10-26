import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#50b948] py-5">
      <ul className="flex items-center flex-wrap justify-center md:gap-5  text-sm gap-2 text-white font-semibold">
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>FAQ</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
        <li>Copyright © 2024 Pinecone Research</li>
      </ul>
    </div>
  );
};

export default Footer;
