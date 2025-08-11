import "./App.css";
import ExpandableItem from "./components/ExpandableItem";
import PixLightbox from "./components/PixLightbox";
import pixQR150 from "./assets/qr150.png";
import pixQR200 from "./assets/qr200.png";
import pixQR250 from "./assets/qr250.png";
import pixQR300 from "./assets/qr300.png";
import logo from "./assets/logo.svg";
import dress from "./assets/dress.svg";
import perfum from "./assets/perfum.svg";
import maquiagem from "./assets/maquiagem.svg";
import shoes from "./assets/shoes.svg";
import pix from "./assets/pix.svg";
import paleta from "./assets/paleta.svg";
function App() {
  return (
    <div>
      <header className="header">
        <img src={logo} className="logo" />
      </header>
      <main className="bodySite">
        <h1>
          INFORMAÇÕES PARA AJUDAR NA <br /> ESCOLHA DO PRESENTE DA <br />
          <span className="name">Maria Luiza</span>
        </h1>
        <div className="List">
          <div>
            <span>
              <img src={dress} className="dress" />
            </span>
            <p>ROUPAS</p>
            <ul>
              <ExpandableItem
                label="BLUSAS E VESTIDOS - P"
                links={[
                  {
                    name: "JOICE BOUTIQUE",
                    url: "https://www.instagram.com/joiceboutique/?igsh=MWJicHp5Z21xNHp0cw%3D%3D#",
                  },
                  {
                    name: "PINGO DE GENTE",
                    url: "https://www.instagram.com/piingodegentte/?igsh=anl6bmg2b3ozcXYw#",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf/?igsh=MXg2NTkyN3ZvcWVsaw%3D%3D#",
                  },
                ]}
              />

              <ExpandableItem
                label="CALÇAS E BERMUDAS - 38"
                links={[
                  {
                    name: "JOICE BOUTIQUE",
                    url: "https://www.instagram.com/joiceboutique/?igsh=MWJicHp5Z21xNHp0cw%3D%3D#",
                  },
                  {
                    name: "PINGO DE GENTE",
                    url: "https://www.instagram.com/piingodegentte/?igsh=anl6bmg2b3ozcXYw#",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf/?igsh=MXg2NTkyN3ZvcWVsaw%3D%3D#",
                  },
                ]}
              />
            </ul>
          </div>

          <div>
            <span>
              <img src={perfum} className="perfum" />
            </span>
            <p>PERFUMES</p>
            <ul>
              <ExpandableItem
                label="VICTORIA SECRET"
                links={[
                  {
                    name: "WE LOVE PERFUMARIA",
                    url: "https://www.instagram.com/weloveperfumaria/?igsh=MTJxdGIwbmJjNTF1NA%3D%3D#",
                  },
                  {
                    name: "O BOTICÁRIO CAPANEMA",
                    url: "https://www.instagram.com/oboticariocapanema?igsh=MWFqcDFmemt0eDhzcQ==",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf/?igsh=MXg2NTkyN3ZvcWVsaw%3D%3D#",
                  },
                ]}
              />

              <ExpandableItem
                label="LA VIE EST BELLE"
                links={[
                  {
                    name: "WE LOVE PERFUMARIA",
                    url: "https://www.instagram.com/weloveperfumaria/?igsh=MTJxdGIwbmJjNTF1NA%3D%3D#",
                  },
                  {
                    name: "O BOTICÁRIO CAPANEMA",
                    url: "https://www.instagram.com/oboticariocapanema?igsh=MWFqcDFmemt0eDhzcQ==",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf/?igsh=MXg2NTkyN3ZvcWVsaw%3D%3D#",
                  },
                ]}
              />
              <ExpandableItem
                label="GOOD GIRL"
                links={[
                  {
                    name: "WE LOVE PERFUMARIA",
                    url: "https://www.instagram.com/weloveperfumaria/?igsh=MTJxdGIwbmJjNTF1NA%3D%3D#",
                  },
                  {
                    name: "O BOTICÁRIO CAPANEMA",
                    url: "https://www.instagram.com/oboticariocapanema?igsh=MWFqcDFmemt0eDhzcQ==",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf/?igsh=MXg2NTkyN3ZvcWVsaw%3D%3D#",
                  },
                ]}
              />

              <ExpandableItem
                label="O BOTICÁRIO"
                links={[
                  {
                    name: "WE LOVE PERFUMARIA",
                    url: "https://www.instagram.com/weloveperfumaria/?igsh=MTJxdGIwbmJjNTF1NA%3D%3D#",
                  },
                  {
                    name: "O BOTICÁRIO CAPANEMA",
                    url: "https://www.instagram.com/oboticariocapanema/?igsh=MWFqcDFmemt0eDhzcQ%3D%3D#",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf/?igsh=MXg2NTkyN3ZvcWVsaw%3D%3D#",
                  },
                ]}
              />
            </ul>
          </div>

          <div>
            <span>
              <img src={maquiagem} className="maquiagem" />
            </span>
            <a
              href="https://www.instagram.com/insanepalettenew/?igsh=MTN0dm5zZzA0b2loNQ%3D%3D#"
              target="_blank"
            >
              <p>MAQUIAGENS</p>
            </a>
          </div>

          <div>
            <span>
              <img src={shoes} className="shoes" />
            </span>
            <p>SAPATOS</p>
            <ul>
              <ExpandableItem
                label="TAMANHO 37"
                links={[
                  {
                    name: "DEJÔ SAPATOS",
                    url: "https://www.instagram.com/dejosapatos/?igsh=MW9zeWR0azA5bjd3Mw%3D%3D#",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf/?igsh=MXg2NTkyN3ZvcWVsaw%3D%3D#",
                  },
                ]}
              />
            </ul>
          </div>
          <div>
            <span>
              <img src={pix} className="pix" />
            </span>
            <p>PIX</p>
            <PixLightbox
              valor="R$ 150,00"
              qrCode={pixQR150}
              codigoPix="00020126330014BR.GOV.BCB.PIX0111040442502005204000053039865406150.005802BR5923Maria Luiza Ramos Canto6009SAO PAULO62140510ZohONunJJr6304E42E"
            />
            <PixLightbox
              valor="R$ 200,00"
              qrCode={pixQR200}
              codigoPix="00020126330014BR.GOV.BCB.PIX0111040442502005204000053039865406200.005802BR5923Maria Luiza Ramos Canto6009SAO PAULO6214051046rsY9J5M06304A4C6"
            />
            <PixLightbox
              valor="R$ 250,00"
              qrCode={pixQR250}
              codigoPix="00020126330014BR.GOV.BCB.PIX0111040442502005204000053039865406250.005802BR5923Maria Luiza Ramos Canto6009SAO PAULO621405104N10Urn3Sf6304B52E"
            />
            <PixLightbox
              valor="R$ 300,00"
              qrCode={pixQR300}
              codigoPix="00020126330014BR.GOV.BCB.PIX0111040442502005204000053039865406300.005802BR5923Maria Luiza Ramos Canto6009SAO PAULO62140510HvgkMgbHP663047379"
            />
          </div>
        </div>
      </main>
      <footer className="footer">
        <h2>INFORMAÇÕES GERAIS:</h2>
        <div className="footer_data">
          <p>CORES QUE NÃO DEVEM SER USADAS:</p>
          <img src={paleta} />
        </div>
      </footer>
    </div>
  );
}

export default App;
