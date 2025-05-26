import ButtonLogin from "@/components/ButtonLogin";

function Home() {
  const isLoggedIn = true;
  const name = "Will";
  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex flex-row justify-between items-center px-8 py-4">
          <div className="font-bold"> FirstProject</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* HERO */}
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 ">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>

      {/* PRICING */}
      <section className="bg-base-200">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>
          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$1.62</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>

            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Unlimited users
              </li>
              <li>Collect customer feedback</li>
              <li>Unlimited boards</li>
              <li>Admin dashboard</li>
              <li>24/7 support</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
