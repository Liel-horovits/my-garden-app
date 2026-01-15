import Header from "./components/Header/Header";
import Flower from "./components/Flower/Flower";

export default function App() {
 const flowers = [
  { id: 1, name: "כלנית", petalColor: "red", leafColor: "green" }, 
  { id: 2, name: "שושנה", petalColor: "yellow" },          
  { id: 3, name: "סיגלית", leafColor: "purple" },      
  { id: 4, name: "רקפת" },                                      
];

  return (
    <div>
      <Header />
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        {flowers.map(f => <Flower key={f.id} {...f} />)}
      </div>
    </div>
  );
}
