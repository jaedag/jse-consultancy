
export default function ServiceCard({heading, description}: {heading: string, description: string}) {
    return (
        <div className="max-w-sm md:max-w-[500px] md:w-[300px]  mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{heading}</h2>
                <p className="text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    )
}