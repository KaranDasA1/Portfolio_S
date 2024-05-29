import React, { useState, useEffect } from "react";
function Typing({
    text, // Change to lowercase 'text'
    typingSpeed = 100,
    deletingSpeed = 50
}) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0); // Define index state

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (displayedText.length < text[index].length) { // Change to lowercase 'text'
                    setDisplayedText(prev => prev + text[index].charAt(displayedText.length)); // Change to lowercase 'text'
                } else {
                    setTimeout(() => setIsDeleting(true), typingSpeed); // Use typingSpeed instead of duration
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(prev => prev.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setIndex(prev => (prev + 1) % text.length); // Change to lowercase 'text'
                }
            }
        };

        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index, text, typingSpeed, deletingSpeed]); 

    return (
        <div className="typing-effect">
            {displayedText}
            <span className="caret"></span>
        </div>
    );
}

export default Typing;
