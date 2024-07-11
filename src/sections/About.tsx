import Title from '../components/Title';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section bg-about"
    >
      <div className="container">
        <div className="md:flex justify-between lg:gap-[24px]">
          <div className="md:w-2/3 lg:w-[628px] md:flex flex-col justify-between">
            <div className="mb-4 md:mb-0">
              <Title firstWords="WHO" secondWords="WE ARE" />
            </div>
          </div>
          <div className="w-[180px] md:w-[218px] lg:w-1/2 lg:mb-[72px]">
            <div className="lg:w-1/2 space-y-5 md:space-y-4">
              <p className="font-thin">
                <span className="font-normal">a team of enthusiasts</span> who
                are fully committed to the mission of creating unforgettable and
                extraordinary trips to the most beautiful parts of the
                Carpathians. Our goal is not just to show you the natural
                wonders of the mountains, but to provide you with a deep
                immersion in their magical atmosphere.
              </p>
              <p className="font-thin">
                <span className="font-normal">We believe</span> that nature has
                the power to inspire, strengthen character and provide new
                perspectives. Therefore, each of our tours is aimed at unlocking
                your potential, enriching your spiritual world and creating
                unforgettable memories.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:flex flex-col lg:flex-row gap-[64px] lg:justify-between md:-mt-[60px] lg:mt-0">
          <div className="order-1 lg:order-2 w-full flex justify-end md:justify-start lg:justify-end">
            <div className="mt-8 md:mt-0">
              <p className="uppercase">From vacationers</p>
              <p className="text-end uppercase">to active travelers</p>
              <p className="font-thin lg:tracking-[0.12em]">
                we have a tour for everyone.
              </p>
            </div>
          </div>

          <div className="order-2 lg:order-1 lg:w-full md:flex justify-center md:justify-end lg:justify-between">
            <div className="md:w-2/3 lg:w-full">
              <p className=" mt-8 md:mt-0 font-thin">
                <span className="font-normal">We use methods</span> that are
                time-tested and proven. Our expert guides with in-depth
                knowledge of the Carpathian landscapes lead you safely through
                the mysteries of these mountains.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
