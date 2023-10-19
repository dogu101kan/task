import { useCallback, useState } from "react";

export default function useOpen(initialState){
    const [isOpen, setOpen] = useState(initialState);
    const toggle = useCallback(()=>{
        setOpen((a)=>!a);
    }, [setOpen])

    return { isOpen, toggle };
}