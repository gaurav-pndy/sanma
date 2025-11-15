import OculaDesc from "@/components/Products/Ocula/OculaDesc";
import OculaHero from "@/components/Products/Ocula/OculaHero";

export const metadata = {
  title: "Ocula - Surgical Operating Microscope | Sanma",
  description:
    "Ocula surgical operating microscope for Neuro, Spine, ENT and Plastic & Reconstructive surgery.",
};

export default function OculaPage() {
  return (
    <>
      <OculaHero />
      <OculaDesc />
    </>
  );
}
