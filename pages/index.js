import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
  <div style={{ width: '60%', maxWidth: '220px', margin: '0 auto 1.5rem' }}>
    <Image
      src="/logo.png"
      alt="FlowBet"
      width={220}
      height={80}
      priority
      style={{ width: "100%", height: "auto", filter: "drop-shadow(0 0 10px #00ff66)" }}
    />
  </div>

  <h1 className="neon-title fade-in" style={{ animationDelay: '0s', animationFillMode: 'both' }}>
    Bienvenido a FlowBet
  </h1>
  <p className="neon-subtitle fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
    El sistema automatizado de recargas y premios
  </p>

  <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
    <Link href="/crear-usuario">
      <button className="fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        🎮 Crear usuario
      </button>
    </Link>
    <Link href="/cargar-saldo">
      <button className="fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
        💸 Cargar saldo
      </button>
    </Link>
    <Link href="/retirar-premio">
      <button className="fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
        🎁 Retirar premio
      </button>
    </Link>
  </div>
</div>

  );
}
