export default function Card({ title, description, children, className=""}) {
    return (

        <div className="flex flex-col justify-between align-items text-center rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition h-full">
            <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
            
            
            {children && <div classsName="mt-4">{children}</div>}
            
        </div>
    );
}

