import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
// import ToastContainer from "../../components/ToastContainer";
// import ToastifyContainer from "../components/ToastifyContainer";

function Home() {
  return (
    <>
      <Header />
      <main className="max-md:px-6">
        <h1 className="mb-4 md:mb-5 font-light text-5xl max-sm:text-xl text-center text-neutral-gray">
          We are launching{" "}
          <span className="font-bold text-neutral-dark-blue">soon!</span>
        </h1>
        <h2 className="mb-7 md:mb-8 font-semibold text-xl max-sm:text-xs text-center text-neutral-gray">
          Subscribe and get notified
        </h2>
        <Form />
        <img
          src="/illustration-dashboard.png"
          height={800}
          width={635}
          alt=""
          aria-hidden
        />
      </main>
      <Footer />
    </>
  );
}

export default Home;
