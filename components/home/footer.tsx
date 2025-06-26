import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center bg-white/5">
      <div className="relative flex flex-col items-center justify-center GeistMedium max-w-6xl w-[95%] mt-40">
        <p className="text-4xl md:text-5xl w-[95%] max-w-3xl GeistBold text-center uppercase">
          Have a project in mind? Let’s get to work.
        </p>
        <p className="text-sm md:text-lg Geist w-[95%] max-w-xl mt-3 text-foreground/50 text-center">
          Feel free to reach out if you want to collaborate with us, or simply
          have a chat.
        </p>
        <Button className="w-auto bg-primary text-background p-7 text-xl rounded-full mt-10 GeistBold">
          Hello@ArcticBase.com
        </Button>
      </div>
      <div className="flex justify-center items-center mt-30 border-y w-full border-foreground">
        <div className="w-full max-w-6xl h-auto">
          <div className="flex flex-col md:flex-row justify-between items-start w-[95%] h-auto text-3xl border-foreground transition-all duration-500 py-5">
            <a className="flex justify-start items-start p-0 GeistBold w-auto bg-transparents hover:text-primary cursor-pointer">
              LinkedIn
            </a>
            <a className="flex justify-start items-start p-0 GeistBold w-auto bg-transparents hover:text-primary cursor-pointer">
              Instagram
            </a>
            <a className="flex justify-start items-start p-0 GeistBold w-auto  bg-transparents hover:text-primary cursor-pointer">
              FaceBook
            </a>
            <a className="flex justify-start items-start p-0 GeistBold w-auto  bg-transparents hover:text-primary cursor-pointer">
              Behence
            </a>
            <a className="flex justify-start items-start p-0 GeistBold w-auto  bg-transparents hover:text-primary cursor-pointer">
              Dribbble
            </a>
            <a className="flex justify-start items-start p-0 GeistBold w-auto  bg-transparents hover:text-primary cursor-pointer">
              X
            </a>
          </div>
        </div>
      </div>
      <p>© ARCTIC BASE 2025</p>
    </div>
  );
}
