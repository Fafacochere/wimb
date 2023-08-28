export default function ResultContent() {

    const beers = [{
        name: 'Le bar de la bière',
        description: 'Description du bar 1',
        image: 'https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80'
    }, {
        name: 'Bar 2',
        description: 'Description du bar 2',
        image: 'https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80'
    }, {
        name: 'Bar 3',
        description: 'Description du bar 3',
        image: 'https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80'
    }, {
        name: 'Bar 4',
        description: 'Description du bar 4',
        image: 'https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80'
    }, {
        name: 'Bar 5',
        description: 'Description du bar 5',
        image: 'https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80'
    }, {
        name: 'Bar 6',
        description: 'Description du bar 6',
        image: 'https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80'
    }, {
        name: 'Bar 7',
        description: 'Description du bar 7',
        image: 'https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80'
    }
    ];

    return <div>
        {
            beers.map((beer, index) => {
                return <div key={index} className="flex items-center space-x-4 p-3 py-4 border-b-2 border-gray-300 cursor-pointer">
                    <img className="w-16 h-16 rounded-md" src={beer.image} alt={beer.name} />
                    <div>
                        <h3 className="text-lg font-semibold">{beer.name}</h3>
                        <p>{beer.description}</p>
                    </div>
                </div>
            })
        }
    
    </div>
}