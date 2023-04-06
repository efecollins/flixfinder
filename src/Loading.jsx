import React, { useState, useEffect } from 'react';
import "./Loading.css"

function Loading() {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        window.addEventListener("load", () => setShowLoader(false))
    }, []);
    return (
        showLoader && (
            <div className="loading">
                <div className="loading-text">
                    <span className="loading-text-words">f</span>
                    <span className="loading-text-words">l</span>
                    <span className="loading-text-words">i</span>
                    <span className="loading-text-words">x</span>
                    <span className="loading-text-words red">F</span>
                    <span className="loading-text-words red">I</span>
                    <span className="loading-text-words red">N</span>
                    <span className="loading-text-words red">D</span>
                    <span className="loading-text-words red">E</span>
                    <span className="loading-text-words red">R</span>
                </div>
            </div>
        )
    )
}
export default Loading;
