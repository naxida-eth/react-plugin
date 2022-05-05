import { CSSProperties, FC, ReactNode, useEffect, useState } from "react";

import { CSSTransition } from 'react-transition-group'

import './Transition.css'

interface IProps {
    show?: boolean,
    style?: CSSProperties
    children: ReactNode
}

const Transition: FC<IProps> = ({
    show = false,
    children,
    style = {},
}) => {
    const [inTransition, setInTransition] = useState<boolean>(false);
    useEffect(() => {
        !show && setInTransition(true);
    }, [])
    return (
        <>
            <CSSTransition
                in={show ? show : inTransition}
                timeout={400}
                classNames={'transition'}
            >
                <div style={{
                    ...{
                        width: 100,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        background: '#68a3bc',
                    },
                    ...style
                }}>
                    {children}
                </div>
            </CSSTransition>
        </>
    );

};

export default Transition;
