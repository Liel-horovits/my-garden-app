export default function Flower({ name = "פרח לא מזוהה", petalColor = "#FFB6C1", leafColor = "#228B22" }) {
  return (
    <div
      onClick={() => alert(`אני פרח מסוג ${name}`)}
      style={{
        border: "2px solid #ccc",
        borderRadius: "12px",
        padding: "12px",
        backgroundColor: petalColor,
        color: leafColor,
        cursor: "pointer",
        width: "100px",
        textAlign: "center",
      }}
    >
      🌸 {name} 
    </div>
  );
}

