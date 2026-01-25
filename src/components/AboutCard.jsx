export default function AboutCard({
    title,
    description1,
    description2,
    children,
    className = ""
}) {
    return (
        <div
            className={`
                flex flex-col justify-between items-start text-left
                rounded-2xl shadow-md bg-white
                px-6 py-8
                hover:shadow-lg transition
                h-full
                ${className}
            `}
        >
            <div className="flex-1">
                <h2 className="text-lg font-semibold mb-3">
                    {title}
                </h2>

                <p className="text-gray-600 text-sm mb-3">
                    {description1}
                </p>

                <p className="text-gray-600 text-sm">
                    {description2}
                </p>
            </div>

            {children && (
                <div className="mt-6">
                    {children}
                </div>
            )}
        </div>
    );
}

