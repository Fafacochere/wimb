import { Input } from "@/components/ui/Input";
import ResultContent from "../ResultContent";

export default function MainSearch() {
    return <div className="h-full absolute z-10 bg-white">
        <div className="py-6 px-4">
            <Input type="text" placeholder="Rechercher sa bière" />
        </div>
        <ResultContent />
    </div>
}