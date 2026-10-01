import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";
import { useState } from "react"

function Currency() {

    const [amt, setAmt] = useState(0);
    const [from, setFrom] = useState("usd");
    const [converted, setConverted] = useState(0);
    const [to, setTo] = useState("inr");

    const currInfo = useCurrencyInfo(from)
    const options = Object.keys(currInfo || {})

    function swap() {
        setFrom(to)
        setTo(from)
        setAmt(converted)
        setConverted(amt)
    }

    function convert() {
        setConverted(amt * currInfo[to])
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/36603729/pexels-photo-36603729.jpeg?_gl=1*attsqb*_ga*MTgwMTYwNjA3Mi4xNzgyNjM0ODI0*_ga_8JE65Q40S6*czE3ODI3MzY4NjckbzUkZzEkdDE3ODI3MzY5MTMkajE0JGwwJGgw')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amt={amt}
                                onAmtChange={(amt) => setAmt(amt)}
                                OnCurrChange={(from) => setFrom(from)}
                                currOptions={options}
                                curr={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                SWAP
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="to"
                                amt={converted}
                                onAmtChange={(converted) => setConverted(converted)}
                                OnCurrChange={(to) => setTo(to)}
                                currOptions={options}
                                curr={to}

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>)
}

export default Currency;