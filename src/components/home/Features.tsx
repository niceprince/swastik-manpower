import { servicesData } from "@/static/data";

const Features = () => {
  return (
    <div>
      <section className="section key-feature relative bg-yellow-50">
        <div className="container">
          <div className="row justify-between text-center lg:text-start">
            <div className="lg:col-5">
              <h2>The Highlighting Part Of Our Services.</h2>
            </div>
            <div className="mt-6 lg:col-5 lg:mt-0">
              <p>
                Professional and reliable Armed/Unarmed Security Guards trained
                to protect people, property, and assets with vigilance and
                discipline.
              </p>
            </div>
          </div>
          <div className="key-feature-grid mt-10 grid grid-cols-1 gap-7 md:grid-cols-3 xl:grid-cols-3">
            {servicesData.map((item) => (
              <div
                key={item.title.replaceAll(" ", "")}
                className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg"
              >
                <div>
                  <h3 className="h4 text-xl lg:text-2xl">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="icon mt-4">
                  <img className="objec-contain" src={item.image} alt="" />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div id="mission"></div>
      </section>
    </div>
  );
};

export default Features;
