export default function ProjectComponent({ imgPath, title, link, description }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center rounded-2xl shadow-md p-4 bg-white hover:shadow-lg hover:scale-105 transition-all h-full gap-4"
        >
            {imgPath && (
                <img
                    src={imgPath}
                    alt={title}
                    className="w-40 h-40 object-contain flex-shrink-0"
                />
            )}

            <div className="flex flex-col justify-center text-center flex-1">
                <h2 className="text-lg font-semibold">
                    {title}
                </h2>
                <p className="text-sm text-gray-600">
                    {description}
                </p>
            </div>
        </a>
    );
}

