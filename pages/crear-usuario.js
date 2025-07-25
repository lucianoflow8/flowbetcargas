import { useState } from "react";

export default function CrearUsuario() {
  const [casino, setCasino] = useState("flowbets.co");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Usuario creado correctamente (modo demo)");
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🎮 Crear Usuario</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
        <select value={casino} onChange={(e) => setCasino(e.target.value)}>
          <option value="flowbets.co">FlowBets.co</option>
        </select>
        <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
}
