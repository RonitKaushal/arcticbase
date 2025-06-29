import ContactDialog from "../ContactDialog";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="relative flex flex-col min-h-screen w-full max-w-6xl items-center justify-center bg-background">
      <div className="relative flex flex-col items-center justify-center uppercase text-5xl md:text-8xl GeistBold w-[95%]">
        <h2 className="w-full">we bring big ideas to life</h2>
        <h2 className="w-full text-right text-foreground/50">
          without asking for a{" "}
          <span className="text-primary/50">big budget</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:items-center items-start justify-between  mt-10 w-[95%]">
        <p className="w-full max-w-[700px] Geist text-sm md:text-xl">
          We’re Arcticbase — not an agency, not a startup, just a bunch of
          skilled students monetizing what we love. No bosses, no titles, just
          pure teamwork, trust, and a little chaos. We work smart, laugh harder,
          and deliver big.
        </p>
        <ContactDialog>
          <Button className="w-auto bg-primary text-background p-7 text-xl rounded-full mt-10 md:mt-0 GeistBold uppercase">
            Start a project
          </Button>
        </ContactDialog>
      </div>
    </div>
  );
}
