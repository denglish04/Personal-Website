export default function ExternalComponent({ imgPath, link}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center bg-white hover:scale-105 transition-all h-full"
        >
            {imgPath && (
                <img
                    src={imgPath}
                    className="w-10 h-10 object-contain flex-shrink-0 p-1"
                />
            )}
        </a>
    );
}

