import { Input } from "@/components/ui/Input";

export default function MainSearch() {
    return <div className="h-full absolute z-10">
        <div className="p-6">
            <Input type="text" placeholder="Rechercher sa bière" />
        </div>
    </div>
}