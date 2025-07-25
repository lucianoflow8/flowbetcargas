import { useState } from "react";

export default function CargarSaldo() {
  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [receipt, setReceipt] = useState(null);
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Comprobante enviado (modo demo)");
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 className="neon-title">💸 Cargar saldo</h1>
      <p className="neon-subtitle">Transferí a los siguientes datos:</p>

      <div style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: "2rem" }}>
        <div>
          <strong>CBU:</strong> 0000003100056021071217
          <button onClick={() => copyToClipboard("0000003100056021071217", "CBU")} style={copyBtnStyle}>📋</button>
        </div>
        <div>
          <strong>Alias:</strong> Rosario201
          <button onClick={() => copyToClipboard("Rosario201", "Alias")} style={copyBtnStyle}>📋</button>
        </div>
        <div>
          <strong>A nombre de:</strong> Rosario Navarro
        </div>
        {copied && <p style={{ color: "#00ff66", marginTop: "1rem" }}>✔ {copied} copiado</p>}
      </div>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setReceipt(e.target.files[0])}
          accept="image/*"
          required
        />
        <button type="submit">Enviar comprobante</button>
      </form>
    </div>
  );
}

const copyBtnStyle = {
  marginLeft: '10px',
  background: 'transparent',
  border: 'none',
  fontSize: '1.5rem',
  color: '#00ff66',
  cursor: 'pointer',
  textShadow: `
    0 0 3px #00ff66,
    0 0 6px #00ff66,
    0 0 10px #00ff66
  `
};



const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "400px",
  margin: "2.5rem auto",
  textAlign: "left"
};
