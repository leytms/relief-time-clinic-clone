export default function FeatureCards({ title, description, icon }) {
    return (
        <div className="p-6 border rounded">
            <h4 className="font-semibold">{title}</h4>
            <p className="mt-2 text-sm">{description}</p>
            <h5 className="mt-2 text-2xl">{icon}</h5>
            
        </div>
    )

}