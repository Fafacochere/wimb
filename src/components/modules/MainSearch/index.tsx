import { Input } from "@/components/ui/Input";
import ResultContent from "../ResultContent";
import BeerDescription from "../BeerDescription";

export default function MainSearch() {
    return <div className="h-full absolute z-10 bg-white w-[350px]">
        <div className="py-6 px-4">
            <Input type="text" placeholder="Rechercher sa bière" />
        </div>
        <BeerDescription />
        <ResultContent />
    </div>
}