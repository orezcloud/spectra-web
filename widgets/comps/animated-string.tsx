import React, {useEffect, useState} from 'react';


function AnimatedString({text, opacity, delay, speed}: {text: string, opacity?: number, delay?: number, speed?: number}) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isStart, setIsStart] = useState(false);


    useEffect(() => {
        if (currentIndex > text.length || !isStart) {
            return;
        }
        const interval = setInterval(() => {
            if (currentIndex >= text.length) {
                return;
            }
            setDisplayedText((prevDisplayedText) => prevDisplayedText + text[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);

            if (currentIndex >= text.length) {
                clearInterval(interval);
            }
        }, speed || 120);

        return () => clearInterval(interval);

    }, [currentIndex, text, isStart, delay]);

    useEffect(() => {
        if (isStart) {
            return;
        }
        setTimeout(() => {
            setIsStart(true);
        }, delay || 4);
    }, [isStart, delay, text]);

    useEffect(() => {
        // initial state
        setDisplayedText('');
        setCurrentIndex(0);
        setIsStart(false);
    }, [text]);


    return <div className={'animated-string'} style={{
        opacity: opacity || 1,
    }}>{displayedText}</div>;
}

export default AnimatedString;

export function AnimatedText({text, opacity, delay}: {text: string, opacity?: number, delay?: number}) {
    return (
        <>
            <AnimatedString text={text} opacity={opacity || .6} speed={85}/>
            <div className={'position-absolute'} style={{top: 0}}>
                <AnimatedString text={text} opacity={1} delay={delay || 130} speed={90}/>
            </div>
        </>
    );
}
