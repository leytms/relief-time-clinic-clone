export default function FeatureCards({ title, description }) {
    return (
        <div className="p-6 border rounded">
            <h4 className="font-semibold">{title}</h4>
            <p className="mt-2 text-sm">{description}</p>
        </div>
    )

}