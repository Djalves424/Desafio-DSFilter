import './styles.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="df-container">
        <Link to={"/"}>
          <h1>DSFilter</h1>
        </Link>
      </div>
    </header>
  );
}
