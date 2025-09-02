export default function Card({ title, description, children }) {
    return (
        <div className="text-center rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        {children && <div>{children}</div>}

        </div>
    );
}

