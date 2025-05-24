//For TypeScript

import { FC, ReactNode, RefObject, useEffect, useRef } from "react";
import './animation.css';

interface FadeProps {
    children: ReactNode,
    startedVis: boolean,
}
export const Animation: FC<FadeProps> = ({ children, startedVis }) => {
    const child = useRef<HTMLElement | null>(null)
    useEffect(() => {
        if (startedVis) {
            child.current?.classList.add('vis');
            child.current?.classList.remove('none-vis')
        } else {
            child.current?.classList.add('none-vis')
        }
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function handleScroll(event: Event) {
        const target = event.target as Document;
        const docElem = target.documentElement;

        if (docElem.scrollHeight - (docElem.scrollTop + window.innerWidth) < 100) {
            child.current?.classList.remove('none-vis')
            child.current?.classList.add('vis');
        } else {
            child.current?.classList.add('none-vis')
        }
    }

    return (
        <>
            <div ref={child as RefObject<HTMLDivElement>}>{children}</div>
        </>
    )
}
