//For JavaScript

import { useEffect, useRef } from "react";
import './animation.css';

export const Animation = ({ children, startedVis }) => {
    const child = useRef(null)
    useEffect(() => {
        if (startedVis) {
            child.current.classList.add('vis');
            child.current.classList.remove('none-vis')
        } else {
            child.current.classList.add('none-vis')
        }
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function handleScroll(event) {
        const target = event.target;
        const docElem = target.documentElement;

        if (docElem.scrollHeight - (docElem.scrollTop + window.innerWidth) < 100) {
            child.current.classList.remove('none-vis')
            child.current.classList.add('vis');
        } else {
            child.current.classList.add('none-vis')
        }
    }

    return (
        <>
            <div ref={child}>{children}</div>
        </>
    )
}
