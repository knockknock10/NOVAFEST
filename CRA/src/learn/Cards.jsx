import AmazonCards from "./Amazoncards";
import "./Amazoncard.css";

export default function Cards() {
  return (
    <div className="s">
      <h1>Blockbuster Deals on Computer Accessories | Shop Now</h1>

      <AmazonCards
        title="Logitech Mx Master"
        idx={0}
      />

      <AmazonCards
        title="Apple Pencil"
        idx={1}
      />

      <AmazonCards
        title="Zebronics"
        idx={2}
      />

      <AmazonCards
        title="Pentronics Toad"
        idx={3}
      />
    </div>
  );
}
