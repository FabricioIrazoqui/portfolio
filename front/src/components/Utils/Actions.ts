import { useState } from "react";

export const useFlipState = () => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const handleFlip = () => setIsFlipped(!isFlipped);
    return {isFlipped, setIsFlipped, handleFlip}
}

export const Flipped = (isFlipped: boolean, styleA: string, styleB: string): string => {
    return isFlipped ? styleB : styleA;
};



export const useSelectState = () => {
    const [select, setSelect] = useState<string | null>("initial");
    const handleSelect = (item: string) =>
        setSelect(item === select ? null : item);
return { select, setSelect, handleSelect}
}

export const Select = (selectedState: string | null, currentState: string, style: string): string => {
    return selectedState === currentState ? style : "";
}




