import ButtonLogin from "@/components/ButtonLogin";

function Home() {
  const isLoggedIn = true;
  const name = "Will";
  return (
    <main>
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 ">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}

export default Home;
