import { CSSProperties, FC, ReactNode } from "react";

import { useClampText } from 'use-clamp-text'

interface IClampText {
    style?: CSSProperties
    children: ReactNode
}

const ClampText: FC<IClampText> = ({
}) => {
    const [ref, { noClamp, clampedText, key }] = useClampText({
        text: '123123',
        lines: 3,
        ellipsis: 12.5,
    });
    return <>
        ClampText....
    </>
}

export default ClampText