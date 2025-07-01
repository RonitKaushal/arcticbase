import Image from "next/image";

const teamMembers = [
  {
    name: "Brindesh Patel",
    role: "Founder of Tech Rational",
    image: "/reviews/review1.png",
  },
  {
    name: "Tushar Joshi",
    role: "Founder of Buddyse",
    image: "/reviews/review2.png",
  },

  {
    name: "Het Jani",
    role: "Back-End Developer",
    image: "/reviews/review3.png",
  },
  {
    name: "Heshva Soni",
    role: "AI-ML Engineer",
    image: "/reviews/review4.png",
  },
];

export const runtime = "edge";

export default function Testimonials() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center my-32">
      {/* Section Heading */}
      <div className="relative flex flex-col items-center justify-center uppercase GeistMedium max-w-6xl w-[95%] mt-40">
        <h2 className="text-xl md:text-2xl w-full text-left text-primary">
          testimonials
        </h2>
        <p className="text-4xl md:text-5xl GeistBold">
          Real words from the people who believed in our work, trusted the
          process, and loved the results.
        </p>
      </div>

      {/* Testimonials Grid */}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 max-w-6xl w-[95%] my-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-left space-y-1"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="GeistMedium text-lg font-semibold w-full text-left">
              {member.name}
            </h2>
            <h3 className="Geist text-sm text-muted-foreground w-full text-left">
              {member.role}
            </h3>
          </div>
        ))}
      </div>

      {/* ////////// */}
    </div>
  );
}
