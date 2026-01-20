export default function Card({ title, description1, description2, children, className=""}) {
    return (

        <div className="flex flex-col justify-between align-items text-left rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition h-full">
            <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 text-sm mb-2">{description1}</p>
                <p className="text-gray-600 text-sm mb-2">{description2}</p>
            </div>
            
            
            {children && <div classsName="mt-4">{children}</div>}
            
        </div>
    );
}

