import Link from "next/link";
import "./styles.css"; // Ensure this points to your CSS file

const Nav: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link href="/overview">Overview</Link>{" "}
        </li> */}
        <li className="nav-item">
          <Link href="/finances">Finances</Link>
        </li>
        <li className="nav-item">
          <Link href="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link href="/mental">Mental</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
