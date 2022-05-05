import { CSSProperties, FC, ReactNode, useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

import { Switch } from 'antd';

interface IProps {
    src: string | string[]
    style?: CSSProperties
    children: ReactNode
}

const LoadingSkeleton: FC<IProps> = ({
    src,
    children,
    style = {},
}) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    const defautStyle = {
        width: '100%',
        height: '100%',
        lineHeight: 1,
        zIndex: -1,
    }

    useEffect(() => {
        if (typeof src === 'string') {
            const img = new Image();
            img.src = src
            img.decode().then(() => {
                setLoaded(true)
            })
            img.onerror = err => console.log(`${src} 图片加载失败`, err)
        } else if (Array.isArray(src)) {
            const imgPromise: Promise<unknown>[] = []
            src.map((i) => {
                imgPromise.push(new Promise((res, rej) => {
                    const img = new Image();
                    img.src = i
                    img.decode().then(() => {
                        res(i)
                    })
                    img.onerror = (err) => {
                        rej()
                    }
                }))
            })
            Promise.all(imgPromise).then((res) => {
                setLoaded(true)
                if (res.length !== src.length) console.log(`${src} ${res} 图片加载失败`)
            })
        }
    }, [src])

    const onChange = (checked: boolean) => {
        setLoaded(checked)
    }
    return (
        <>
            {
                loaded ? <>{children}</> :
                    <Skeleton
                        baseColor="rgba(79,255,210,.25)"
                        highlightColor='rgba(140,228,210,.25)'
                        style={{
                            ...defautStyle,
                            ...style
                        }} />
            }
            <br />
            <Switch checked={loaded} autoFocus={true} onChange={onChange} />
        </>
    );

};

export default LoadingSkeleton;
