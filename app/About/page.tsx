import Image from "next/image";

const teamMembers = [
  {
    name: "Ronit Kaushal",
    role: "Front-End Developer",
    image: "/members/Ronit Kaushal.png",
  },
  {
    name: "Khushi Kaushal",
    role: "UI UX Designer",
    image: "/members/Khushi Kaushal.png",
  },

  {
    name: "Het Jani",
    role: "Back-End Developer",
    image: "/members/Het Jani.png",
  },
  {
    name: "Heshva Soni",
    role: "AI-ML Engineer",
    image: "/members/Heshva Soni.png",
  },
  {
    name: "Hardi Patel",
    role: "Front-End Developer",
    image: "/members/Hardi Patel.png",
  },
  {
    name: "Tirth Chokshi",
    role: "Back-end Developer",
    image: "/members/Tirth chokshi.png",
  },
  {
    name: "Devanshi Makwana",
    role: "HTML Developer",
    image: "/members/Devanshi Makwan.png",
  },
  {
    name: "Bikram Sadhukhan",
    role: "Web Security Expert",
    image: "/members/Bikram.png",
  },
  // {
  //   name: "Diya Pandya",
  //   role: "Marketing Lead",
  //   image: "/members/Diya Pandya.png",
  // },
];

export const runtime = "edge";


export default function AboutPage() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center">
      <div className="relative flex flex-col items-center justify-center uppercase GeistMedium max-w-6xl w-[95%] mt-40">
        <h2 className="text-xl md:text-2xl w-full text-left text-primary">
          about us
        </h2>
        <p className="text-4xl md:text-5xl GeistBold">
          Arctic Base is a team of passionate students who work together to
          build real projects with trust, creativity, and skill—without any
          titles, hierarchy, or corporate rules.
        </p>
      </div>

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
    </div>
  );
}
