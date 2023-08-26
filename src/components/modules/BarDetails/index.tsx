import Image from "next/image";
import { GlobeEuropeAfricaIcon, PhoneArrowUpRightIcon, MapIcon, StarIcon } from '@heroicons/react/24/solid'

export default function BarDetails() {
    return <div className="h-full bg-transparent absolute left-[350px] top-0 p-6 w-[400px] rounded">
        <div className="h-full bg-white overflow-y-auto">
            <div className="w-full h-[250px] overflow-hidden relative">
                <div className="absolute w-9 h-9 bg-white rounded-full right-0 m-2 flex justify-center items-center font-bold text-lg">
                    X 
                </div>
                <Image 
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4004&q=80"
                    alt="bar"
                    width={400}
                    height={250}
                    className="content-center"
                />
            </div>
            <div className="bg-white p-4 border-b-2 border-gray-300">
                <h3 className="text-xl font-semibold">Le bar de la bière</h3>
                <p className="text-md text-gray-700">4.5 / 5 - à 800m</p>
            </div>
            <div className="flex flex-nowrap py-2 border-b-2 border-gray-300">
                <div className="w-1/4 p-2 text-red-900 flex flex-col items-center">
                    <div className="w-10 h-10 p-2.5  border-red-900 rounded-full border mb-1">
                        <MapIcon className="w-5 h-5" />
                    </div>
                    <div>Go To</div>
                </div>
                <div className="w-1/4 p-2 text-yellow-900 flex flex-col items-center">
                    <div className="w-10 h-10 p-2.5  border-yellow-900 rounded-full border mb-1">
                        <GlobeEuropeAfricaIcon className="w-5 h-5" />
                    </div>
                    <div>Site Web</div>
                </div>
                <div className="w-1/4 p-2 text-blue-900 flex flex-col items-center">
                    <div className="w-10 h-10 p-2.5  border-blue-900 rounded-full border mb-1">
                        <PhoneArrowUpRightIcon className="w-5 h-5" />
                    </div>
                    <div>Call</div>
                </div>
                <div className="w-1/4 p-2 -green-900 flex flex-col items-center">
                    <div className="w-10 h-10 p-2.5 border-green-900 rounded-full border mb-1">
                        <StarIcon className="w-5 h-5" />
                    </div>
                    <div>Noter</div>
                </div>
            </div>
            <div className="p-4">
                <p className="font-bold">Autres bières:</p>
                <ul className="list-none my-2">
                    <li className="flex justify-between border-gray-300">
                        <div>Chouffe</div>
                        <div className="text-gray-500">5.50 €</div>
                    </li>
                    <li className="flex justify-between border-gray-300">
                        <div>Kasteel Rouge</div>
                        <div className="text-gray-500">6.50 €</div>
                    </li>
                    <li className="flex justify-between border-gray-300">
                        <div>Delirium</div>
                        <div className="text-gray-500">7.50 €</div>
                    </li>
                    <li className="flex justify-between border-gray-300">
                        <div>Chouffe Cherry</div>
                        <div className="text-gray-500">6.00 €</div>
                    </li>
                    <li className="flex justify-between border-gray-300">
                        <div>Kasteel Ambrée</div>
                        <div className="text-gray-500">6.50 €</div>
                    </li>
                    <li className="flex justify-between border-gray-300">
                        <div>Delirium Rouge</div>
                        <div className="text-gray-500">7.50 €</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}