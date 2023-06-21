import React, {FC} from 'react';
import { IMessageAttachment } from '../../types/messageTypes';

import styles from './MediaBlock.module.css';

const MediaBlock: FC<IMessageAttachment> = ({type, url}) => {
    
    if (type === 'video') {
        return <video controls className={styles.media}>
                    <source
                    src={url}
                    type="video/mp4"
                    
                    />
                </video> 
    }

    return <img src={url} alt="media-news" className={styles.media}/>
};

export default MediaBlock;