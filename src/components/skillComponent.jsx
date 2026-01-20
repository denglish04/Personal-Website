export default function SkillComponent({ imgPath, title, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center rounded-2xl shadow-md p-4 bg-white hover:shadow-lg hover:scale-105 transition-all h-full"
        >
            {imgPath && (
                <img
                    src={imgPath}
                    alt={title}
                    className="w-16 h-16 object-contain mb-3"
                />
            )}

            <h2 className="text-lg font-semibold">
                {title}
            </h2>
        </a>
    );
}

