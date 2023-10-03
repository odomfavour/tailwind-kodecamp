

const ShortHero = ({text}) => {
    return (
        <div
        className="w-full bg-shortHero bg-center h-80 grid grid-cols-1 place-items-center">
            <h1
            className="font-bold text-4xl text-white"
            >{text}</h1>
        </div>
    )
}

export default ShortHero