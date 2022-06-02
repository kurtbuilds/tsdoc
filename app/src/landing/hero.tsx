export function Hero() {
    return <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-50"/>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                    <img className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                        alt="People working on laptops"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"/>
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block text-white">
                            An app like you've
                        </span>
                        <span className="block text-indigo-200">
                            never seen before
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
}