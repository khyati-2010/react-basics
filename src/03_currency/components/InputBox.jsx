import React, { useId } from "react";

function InputBox({
    label,
    amt,
    onAmtChange,
    OnCurrChange,
    currOptions = [],
    curr = "usd",
    className = '',
}) {
    const amtId = useId()
    return (
        <div className="bg-white p-3 rounded-lg text-sm flex">
            <div className="w-1/2">
                <label htmlFor={amtId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amtId}
                    className="outline-none w-full bg-transparent py-1.5 text-blue-600"
                    type="number"
                    placeholder="Amount"
                    value={amt}
                    onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-blue-600"
                    value={curr}
                    onChange={(e) => OnCurrChange && OnCurrChange(e.target.value)}
                >
                    {currOptions.map((currency) => (
                        <option
                            value={currency}
                            key={currency}
                        >
                            {currency}
                        </option>
                    )
                    )}
                </select>
            </div>
        </div>
    )
}

export default InputBox;