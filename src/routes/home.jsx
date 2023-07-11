import Banner from "../components/_banner";
import img from "../assets/img/home-cover.jpg";

function Home() {
  return (
    <>
      <div className="wrapper">
        <Banner img={img} title={"Chez vous, partout et ailleurs"} />
        <section id={"locations"}></section>
      </div>
    </>
  );
}

export default Home;
