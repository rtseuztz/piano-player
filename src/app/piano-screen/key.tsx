"use client"

import { useRef } from "react";

const Key = (
    { keyName }: {
    keyName: string
}): JSX.Element => {
    const noteRef = useRef<SVGSVGElement>(null);
    function playNote() {
        const audio = new Audio(`audio/${keyName}.mp3`)
        audio.play()
    }
    return (
        <div className="hover:cursor-pointer" onClick={playNote}>
            <svg width="60" height="200" ref={noteRef}>
                <rect width="60" height="200" fill="white" />
            </svg>
        </div>

    )
}
export default Key