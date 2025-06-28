export default function About() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center bg-white/5">
      <div className="relative flex flex-col items-center justify-center uppercase GeistMedium max-w-6xl w-[95%] mt-40">
        <h2 className="text-xl md:text-2xl w-full text-left text-primary">
          about us
        </h2>
        <p className="text-4xl md:text-5xl GeistBold">
          At Arctic Base, we’re just a bunch of students trying to turn caffeine
          and code into cash. We build cool websites, design awesome stuff, and
          help brands glow up online—affordably!
        </p>
      </div>
      <div className="flex justify-center items-center mt-30 border-y w-full border-foreground">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-0 column-rule-solid-6 w-full max-w-6xl h-auto">
          <div className="flex flex-col justify-center items-center w-full h-60 border-foreground  hover:bg-primary hover:text-background transition-all duration-500">
            <p className="GeistBold text-6xl w-[80%] text-left">0</p>
            <p className="Geist text-sm w-[80%] text-left">Hierarchy</p>
            <p className="Geist text-sm w-[80%] text-left mt-5">
              We don’t have CEOs, managers, or fixed roles—just a team of equals
              working together with trust and shared responsibility.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-full h-60 border-foreground hover:bg-primary hover:text-background transition-all duration-500">
            <p className="GeistBold text-6xl w-[80%] text-left">10+</p>
            <p className="Geist text-sm w-[80%] text-left">
              Projects Completed
            </p>
            <p className=" Geist text-sm w-[80%] text-left mt-5">
              We`&apos;`ve built and shipped over 15 real-world projects across various
              domains.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-60 border-foreground  hover:bg-primary hover:text-background transition-all duration-500">
            <p className="GeistBold text-6xl w-[80%] text-left">83%</p>
            <p className="Geist text-sm w-[80%] text-left">Productivity</p>
            <p className="Geist text-sm w-[80%] text-left mt-5">
              Most of our output is powered by collaboration, curiosity, and a
              bit of chaos.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-60 border-foreground  hover:bg-primary hover:text-background transition-all duration-500">
            <p className="GeistBold text-6xl w-[80%] text-left">100%</p>
            <p className="Geist text-sm w-[80%] text-left">Commitment</p>
            <p className="Geist text-sm w-[80%] text-left mt-5">
              Every member is fully dedicated to learning, building, and growing
              together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
