import "./App.css";
import ExpandableItem from "./components/ExpandableItem";
import PixLightbox from "./components/PixLightbox";
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
                    url: "https://www.instagram.com/joiceboutique?igsh=MWJicHp5Z21xNHp0cw==",
                  },
                  {
                    name: "PINGO DE GENTE",
                    url: "https://www.instagram.com/piingodegentte?igsh=anl6bmg2b3ozcXYw",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf?igsh=MXg2NTkyN3ZvcWVsaw==",
                  },
                ]}
              />

              <ExpandableItem
                label="CALÇAS E BERMUDAS - 38"
                links={[
                  {
                    name: "JOICE BOUTIQUE",
                    url: "https://www.instagram.com/joiceboutique?igsh=MWJicHp5Z21xNHp0cw==",
                  },
                  {
                    name: "PINGO DE GENTE",
                    url: "https://www.instagram.com/piingodegentte?igsh=anl6bmg2b3ozcXYw",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf?igsh=MXg2NTkyN3ZvcWVsaw==",
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
                    url: "https://www.instagram.com/weloveperfumaria?igsh=MTJxdGIwbmJjNTF1NA==",
                  },
                  {
                    name: "O BOTICÁRIO CAPANEMA",
                    url: "https://www.instagram.com/oboticariocapanema?igsh=MWFqcDFmemt0eDhzcQ==",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf?igsh=MXg2NTkyN3ZvcWVsaw==",
                  },
                ]}
              />

              <ExpandableItem
                label="LA VIE EST BELLE"
                links={[
                  {
                    name: "WE LOVE PERFUMARIA",
                    url: "https://www.instagram.com/weloveperfumaria?igsh=MTJxdGIwbmJjNTF1NA==",
                  },
                  {
                    name: "O BOTICÁRIO CAPANEMA",
                    url: "https://www.instagram.com/oboticariocapanema?igsh=MWFqcDFmemt0eDhzcQ==",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf?igsh=MXg2NTkyN3ZvcWVsaw==",
                  },
                ]}
              />
              <ExpandableItem
                label="GOOD GIRL"
                links={[
                  {
                    name: "WE LOVE PERFUMARIA",
                    url: "https://www.instagram.com/weloveperfumaria?igsh=MTJxdGIwbmJjNTF1NA==",
                  },
                  {
                    name: "O BOTICÁRIO CAPANEMA",
                    url: "https://www.instagram.com/oboticariocapanema?igsh=MWFqcDFmemt0eDhzcQ==",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf?igsh=MXg2NTkyN3ZvcWVsaw==",
                  },
                ]}
              />

              <ExpandableItem
                label="O BOTICÁRIO"
                links={[
                  {
                    name: "WE LOVE PERFUMARIA",
                    url: "https://www.instagram.com/weloveperfumaria?igsh=MTJxdGIwbmJjNTF1NA==",
                  },
                  {
                    name: "O BOTICÁRIO CAPANEMA",
                    url: "https://www.instagram.com/oboticariocapanema?igsh=MWFqcDFmemt0eDhzcQ==",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf?igsh=MXg2NTkyN3ZvcWVsaw==",
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
              href="https://www.instagram.com/insanepalettenew?igsh=MTN0dm5zZzA0b2loNQ=="
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
                    url: "https://www.instagram.com/dejosapatos?igsh=MW9zeWR0azA5bjd3Mw==",
                  },
                  {
                    name: "REQUINTE",
                    url: "https://www.instagram.com/requinterf?igsh=MXg2NTkyN3ZvcWVsaw==",
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
            <PixLightbox />
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
