import { useState } from "react";
import qr150 from "../assets/qr150.png";
import qr200 from "../assets/qr200.png";
import qr250 from "../assets/qr250.png";
import qr300 from "../assets/qr300.png";

const pixOptions = [
  {
    label: "R$ 150,00",
    qr: qr150,
    code: "00020126330014BR.GOV.BCB.PIX0111040442502005204000053039865406150.005802BR5923Maria Luiza Ramos Canto6009SAO PAULO62140510ZohONunJJr6304E42E",
  },
  {
    label: "R$ 200,00",
    qr: qr200,
    code: "00020126330014BR.GOV.BCB.PIX0111040442502005204000053039865406200.005802BR5923Maria Luiza Ramos Canto6009SAO PAULO6214051046rsY9J5M06304A4C6",
  },
  {
    label: "R$ 250,00",
    qr: qr250,
    code: "00020126330014BR.GOV.BCB.PIX0111040442502005204000053039865406250.005802BR5923Maria Luiza Ramos Canto6009SAO PAULO621405104N10Urn3Sf6304B52E",
  },
  {
    label: "R$ 300,00",
    qr: qr300,
    code: "00020126330014BR.GOV.BCB.PIX0111040442502005204000053039865406300.005802BR5923Maria Luiza Ramos Canto6009SAO PAULO62140510HvgkMgbHP663047379",
  },
];

export default function PixLightbox() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {pixOptions.map((pix, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelected(pix);
              }}
              style={{ color: "#cf537d", textDecoration: "none" }}
            >
              {pix.label}
            </a>
          </li>
        ))}
      </ul>

      {selected && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              position: "relative",
              maxWidth: "350px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
            <img
              src={selected.qr}
              alt={`QR Code para ${selected.label}`}
              width={200}
              style={{ marginBottom: "10px" }}
            />
            <p>
              <strong>Código Pix:</strong>
            </p>
            <textarea
              readOnly
              style={{
                width: "100%",
                height: "80px",
                resize: "none",
                marginBottom: "8px",
              }}
              value={selected.code}
            />
            <p style={{ fontSize: "0.85rem", color: "#555" }}>
              Copie o código acima e cole no seu app de banco na opção{" "}
              <b>"Pix copia e cola"</b> ou escaneie o QR Code.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
