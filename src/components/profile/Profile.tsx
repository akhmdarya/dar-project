import React from 'react';
import styles from './Profile.module.scss';

type Props = {
    username: string;
    avatar: string;
}

const Profile: React.FC<Props> = ({username, avatar}) => {
    return (
        <div className={styles.header_profile}>
            <img className={styles.profile_img} src={avatar} /> 
            {username}
        </div>
    )
}

export default Profile;
