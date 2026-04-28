export default function FeatureCards({ title, description, icon, button, featured }) {
    return (
        <div 
          className={`
            p-6 border rounded transition hover:shadow-lg hover:-translate-y-1
            ${featured ? "border-blue-500" : "border-gray200"}
            `}
        >    
            
            <div className="flex gap-3 items-center">
              <span className="text-2xl">{icon}</span> 
              <h4 className="font-semibold">{title}</h4> 
            </div>
            {featured && (
                <span className="text-xs px-2 py-1 rounded bg-grey-300">
                    New
                </span>
            )}
            <p className="mt-2 text-sm">{description}</p>
            <button className="mt-4 text-sm font-medium">{button}</button>
        </div>
    )

}