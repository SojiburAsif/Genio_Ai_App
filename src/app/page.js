import Image from "next/image";
import Hero from "./components/Hero";
import Create from "./components/Create";
import StepsCard from "./components/StepsCard";
import Generate from "./components/Generate";
import Payment from "./components/Payment";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      {/* <div className="bg-gradient-to-b from-[#071025] via-[#061224] to-[#050615] ">  </div> */}
      <StepsCard></StepsCard>
        <Create></Create>
        <Generate></Generate>
        <Payment></Payment>
    </>
  );
}
