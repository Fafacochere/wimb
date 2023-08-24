export default function BeerDescription() {
    return <div className="border-b-2 p-3 py-2 w-full">
        <div className="flex items-center space-x-4 border-gray-300">
            <img className="w-16 h-16 rounded-md" src="https://images.unsplash.com/photo-1608742598121-15038a8db33c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80" alt="Biere 1" />
            <div>
                <h3 className="text-lg font-semibold">Ma bière sélectionée 1</h3>
                <p className="">Description de la bière que vous avez sélectionnée</p>
            </div>
        </div>
        <div className="mt-1">
            <p className="font-bold">Caractéristiques:</p>
            <ul className="list-none">
                <li>Type: Ambrée</li>
                <li>Intensité: 4,7%</li>
                <li>Origine: Belgique</li>
            </ul>
        </div>
    </div>
}