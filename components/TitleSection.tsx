export default function TitleSection({title}: {title: string}) {
    return (
        <div className="w-full p-6">
            <h2 className="text-2xl font-semibold text-blue-600">{title}</h2>
        </div>
    )
}