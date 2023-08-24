import MainMap from "@/components/modules/MainMap";
import MainSearch from "@/components/modules/MainSearch";

export default function Home() {
  return (
    <div className="w-full h-full">
      <MainMap />
      <MainSearch/>
    </div>
  );
};