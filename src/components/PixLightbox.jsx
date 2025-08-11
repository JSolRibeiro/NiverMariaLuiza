import { useState } from "react";

function PixLightbox({ valor, qrCode, codigoPix }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copiarCodigo = () => {
    navigator.clipboard.writeText(codigoPix);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <ul>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
          >
            {valor}
          </a>
        </li>
      </ul>

      {isOpen && (
        <div style={styles.overlay} onClick={() => setIsOpen(false)}>
          <div style={styles.content} onClick={(e) => e.stopPropagation()}>
            <h2 className="title">PIX {valor}</h2>
            <img src={qrCode} alt="QR Code PIX" style={{ maxWidth: "200px" }} />
            <p>código Pix:</p>
            <p style={{ wordBreak: "break-all" }}>{codigoPix}</p>
            <button onClick={copiarCodigo} style={styles.copyBtn}>
              {copied ? "✅ Copiado!" : "📋 Copiar código"}
            </button>
            <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
              Fechar
            </button>
            <p className="instruction">
              Copie o código acima e cole no seu app de banco na opção "Pix
              copia e cola" ou escaneie o QR Code.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  content: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    maxWidth: "300px",
  },
  copyBtn: {
    marginTop: "10px",
    padding: "8px 12px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  closeBtn: {
    marginTop: "10px",
    padding: "8px 12px",
    background: "#d9534f",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default PixLightbox;
