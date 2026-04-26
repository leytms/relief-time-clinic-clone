export default function FeatureCards({ title, description, icon }) {
    return (
        <div className="p-6 border rounded">
            <div className="flex gap-3 items-center">
              <h5 className="mt-2 text-2xl">{icon}</h5> 
              <h4 className="font-semibold">{title}</h4> 
            </div>
            <h4 className="font-semibold">{title}</h4>
            
            
            
        </div>
    )

}