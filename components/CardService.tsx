export default function CardService({ title, description }: { title: string, description: string }) {
    return (
        <div className="p-6 flex flex-col items-center border-[0.1px] border-opacity-20 border-blue-400">
            <div className="bg-blue-500 rounded-full overflow-hidden w-[60px] h-[60px]">

            </div>
            <h3 className="font-semibold text-xl text-center mt-4">{title}</h3>
            <p className="font-medium text-md text-center mt-3">{description}</p>
        </div>
    )
}