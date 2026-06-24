import { useState, useCallback } from "react";

function PwdGen(){
    const [password, setPassword] = useState("")
    const [length, setLength] = useState(8)
    const [num, setNum] = useState(false)
    const [char, setChar] = useState(false)

    const pwdFxn = useCallback(() => {
        const p = ""
        const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(num) s += "0123456789"
        if(char) s += "!@#%&*_-+;:.,/?"
        for(const i=0; i<length; i++){
            const c = s.charAt(Math.floor(Math.random()*s.length)+1)
            p += c;
        }
        setPassword(p)
    }, [password, length, num, char])

    
}

export default PwdGen;