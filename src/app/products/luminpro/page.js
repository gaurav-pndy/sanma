import LuminDesc from "@/components/Products/Lumin/LuminDesc";
import LuminHero from "@/components/Products/Lumin/LuminHero";

export const metadata = {
  title: "Lumin Pro - Surgical Operating Microscope | Sanma",
  description:
    "Designed for precision, stability, and ergonomic performance in ENT procedures.",
};

export default function LuminPage() {
  return (
    <>
      <LuminHero />
      <LuminDesc />
    </>
  );
}
