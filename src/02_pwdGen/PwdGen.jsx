import { useState, useCallback, useEffect, useRef } from "react";

function PwdGen() {
    const [password, setPassword] = useState("")
    const [length, setLength] = useState(8)
    const [num, setNum] = useState(false)
    const [char, setChar] = useState(false)
    const passwordRef = useRef(null)

    const pwdFxn = useCallback(() => {
        let p = ""
        let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (num) s += "0123456789"
        if (char) s += "!@#%&*_-+;:.,/?"
        for (let i = 0; i < length; i++) {
            let c = s.charAt(Math.floor(Math.random() * s.length))
            p += c;
        }
        setPassword(p)
    }, [length, num, char])

    const copyToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 25);
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        pwdFxn()
    }, [pwdFxn])

    return (
        <div className="bg-black w-full h-screen flex justify-center items-center">
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
            <h1 className="text-white text-center my-3">Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                    type="text"
                    value={password}
                    className="outline-none w-full py-1 px-3 bg-gray-600"
                    placeholder="Password"
                    readOnly
                    ref={passwordRef}
                />
                <button
                    onClick={copyToClipboard}
                    className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
                >COPY</button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input
                        type="range"
                        min={8}
                        max={25}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e) => { setLength(e.target.value) }}
                    />
                    <label> Length: {length}</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={num}
                        onChange={() => {
                            setNum((prev) => !prev);
                        }}
                    />
                    <label>Numbers</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={char}
                        onChange={() => {
                            setChar((prev) => !prev);
                        }}
                    />
                    <label>Characters</label>
                </div>
            </div>

        </div>
        </div>
    )
}

export default PwdGen;