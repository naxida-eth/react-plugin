import { useMedia } from 'react-media'
import { GLOBAL_MEDIA_QUERIES } from '../const';

const PMedia = () => {
    const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

    const getNowMedia = () => {
        if (matches.large) {
            return 'large'
        } else if (matches.medium) {
            return 'medium'
        } else if (matches.small) {
            return 'small'
        }
    }

    return <>
        now media?  {getNowMedia()}
    </>
}

export default PMedia