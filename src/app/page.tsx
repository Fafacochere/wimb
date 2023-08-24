import MainMap from "@/components/pages/MainMap";
import MainSearch from "@/components/pages/MainSearch";

export default function Home() {
  return (
    <div className="w-full h-full">
      <MainMap />
      <MainSearch/>
    </div>
  );
};