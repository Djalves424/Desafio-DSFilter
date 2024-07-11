import { useContext } from "react";
import "./styles.css";
import { ContextProductCount } from "../../utils/context-product";

export default function Header() {
  const { contextProductCount } = useContext(ContextProductCount);

  return (
    <header>
      <div className="dsf-container dsf-header-content">
        <h1>DSFilter</h1>
        <p>{contextProductCount} produto(s)</p>
      </div>
    </header>
  );
}
