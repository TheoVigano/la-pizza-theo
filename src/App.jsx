import logoImg from "./assets/logo.svg";
import { Card } from "./components/card";
import locationImg from "./assets/local.png";
import data from "../data.json";

export function App() {
  return (
    <>
      <main className="s-main">
        <img src={logoImg} alt="La Pizza Pedaço da Itália" />
      </main>

      <section className="best-sellers">
        <h1 className="s-title">Mais Vendidas</h1>
        <div className="products">
          {data.pizzas.map(({ id, img, title, description, price }) => (
            <Card
              key={id}
              img={img}
              title={title}
              description={description}
              price={price}
            />
          ))}
        </div>
      </section>
      <section className="about">
        <img src={locationImg} alt="" />
        <p>
          Sobre a La P<span>i</span>
          <span>z</span>
          <span>z</span>
          <span>a</span>
        </p>
        <p className="description">
          Bem-vindo ao "La Pizza", o seu refúgio acolhedor para uma experiência
          de pizzaria autêntica. Em nosso pequeno oásis italiano, cada pedaço de
          pizza é uma obra-prima artesanal. Sinta-se em casa enquanto o aroma
          sedutor de massa fresca assa no forno, criando as pizzas mais
          deliciosas da cidade.
        </p>
        <button type="button">Ler mais sobre</button>
      </section>
    </>
  );
}
