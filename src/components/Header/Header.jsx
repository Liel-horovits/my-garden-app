import "./Header.css"; 
import flowerImg from "./flower.png";

export default function Header() {
  return (
    <header className="garden-header">
      <h1 className="garden-header__title">הגינה שלי</h1>
      <img src={flowerImg} alt="פרח" className="garden-header__img" />
    </header>
  );
}