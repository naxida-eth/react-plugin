import { FC, ReactChild, useEffect, useRef, useState } from "react"
import { usePopper } from "react-popper";

import './Popper.css'


interface IPopperProps {
    children: ReactChild
}

const Popper: FC<IPopperProps> = ({
    children
}) => {

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement },
            },
            {
                name: "offset",
                options: { offset: [0, 10] },
            },
        ],
        placement: 'left',
    }
    );

    const ref = useRef(document.createElement("div"));

    useEffect(() => {
        const destination = ref.current;
        document.body.appendChild(destination);
        return () => {
            document.body.removeChild(destination);
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <div style={{
                width: 100,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                background: '#68a3bc',
            }}
                ref={setReferenceElement}>
                {children}

            </div>
            <div className="popover" ref={setPopperElement}
                {...attributes.popper}
                style={{
                    ...styles.popper,
                    background: '#fcd9ff',
                    padding: 5,
                }}>
                react-popper codeing
                <div className="popover-arrow" ref={setArrowElement} style={styles.arrow} />
            </div>
        </div>
    )
}

export default Popper