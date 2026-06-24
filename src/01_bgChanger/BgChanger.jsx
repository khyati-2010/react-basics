function BgChanger() {
    const [color, setColor] = useState("skyBlue")

    return (
        <>
            <div className="w-full h-screen duration-200"
                style={{ backgroundColor: color }}></div>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3.5 shadow-lg bg-white rounded-4xl h-full p-3 m-2">
                    <button
                        onClick={() => setColor("red")}
                        className="px-4 py-2 rounded-4xl outline-none"
                        style={{ backgroundColor: "red" }}>
                        Red
                    </button>
                    <button
                        onClick={() => setColor("black")}
                        className="px-4 py-2 rounded-4xl outline-none text-white"
                        style={{ backgroundColor: "black" }}>
                        black
                    </button>
                    <button
                        onClick={() => setColor("yellow")}
                        className="px-4 py-2 rounded-4xl outline-none"
                        style={{ backgroundColor: "yellow" }}>
                        yellow
                    </button>
                    <button
                        onClick={() => setColor("purple")}
                        className="px-4 py-2 rounded-4xl outline-none"
                        style={{ backgroundColor: "purple" }}>
                        purple
                    </button>
                    <button
                        onClick={() => setColor("skyBlue")}
                        className="px-4 py-2 rounded-4xl outline-none"
                        style={{ backgroundColor: "skyBlue" }}>
                        Blue
                    </button>
                    <button
                        onClick={() => setColor("green")}
                        className="px-4 py-2 rounded-4xl outline-none"
                        style={{ backgroundColor: "green" }}>
                        green
                    </button>
                    <button
                        onClick={() => setColor("orange")}
                        className="px-4 py-2 rounded-4xl outline-none"
                        style={{ backgroundColor: "orange" }}>
                        orange
                    </button>
                    <button
                        onClick={() => setColor("white")}
                        className="px-4 py-2 rounded-4xl"
                        style={{ backgroundColor: "white" }}>
                        white
                    </button>
                </div>
            </div>
        </>
    )
}

export default BgChanger;