import "./styles.css";
import { useState } from "react";

type Props = {
  onFilter: Function;
};

type FormData = {
  minPrice?: number;
  maxPrice?: number;
};

export default function CardFilter({ onFilter }: Props) {
  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onFilter(formData.minPrice || 0, formData.maxPrice || Number.MAX_VALUE);
  }

  return (
    <div className="dsf-container card-filter mt20 mb10">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="minPrice"
            value={formData.minPrice || ""}
            type="text"
            placeholder="Preço mínimo"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            name="maxPrice"
            value={formData.maxPrice || ""}
            type="text"
            placeholder="Preço máximo"
            onChange={handleInputChange}
          />
        </div>
      </form>
      <button onClick={handleSubmit} className="button" type="submit">
        Filtrar
      </button>
    </div>
  );
}
