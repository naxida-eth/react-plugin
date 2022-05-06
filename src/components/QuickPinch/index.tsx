import { CSSProperties, FC, useCallback, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

interface QProps {
    src: string,
    style?: CSSProperties,
}

const QuickPinch: FC<QProps> = ({
    src,
    style = {}
}) => {
    const imgRef = useRef<HTMLImageElement>();
    const onUpdate = useCallback(({ x, y, scale }) => {
        console.log(imgRef);
        const { current } = imgRef;
        if (current) {
            const value = make3dTransformValue({ x, y, scale });
            current.style.setProperty("transform", value);
        }
    }, []);

    return (
        <QuickPinchZoom onUpdate={onUpdate}>
            <img style={style} ref={imgRef} src={src} />
        </QuickPinchZoom>
    );
};

export default QuickPinch;