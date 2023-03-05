import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { toggleAside, toggleFilter } from '../../../redux/features/header/header-slice';

import aside from '../../../data/aside.data.json';

import { FaEllipsisV } from 'react-icons/fa';
import { BsDiscord, BsGithub, BsInstagram, BsLinkedin, BsMedium, BsTwitter, BsYoutube } from 'react-icons/bs';

import styles from './aside.module.scss';
import { FC } from 'react';

const Aside:FC = () =>
{

    const asideOpen = useAppSelector(state => state.header.asideOpen);
    const dispatch = useAppDispatch();

    const handleToggleClick = () =>
    {
        dispatch(toggleAside());
        dispatch(toggleFilter());
    };

    return (
        <aside className={classnames(styles.aside, { [styles.asideActive]: asideOpen })}>
            <span className={styles.asideToggleUi} onClick={handleToggleClick}>
                <FaEllipsisV />
            </span>
            <div className={styles.asideUser}>
                <span className={styles.asideUserImageContainer}>
                    <Image
                        className={styles.asideUserImage}
                        src='/images/avatar.png'
                        alt='Crypto O.G (2012)'
                        width={150}
                        height={150}
                    />
                    <span className={styles.asideUserImageContainerStatus} />
                </span>

                <div className={styles.asideUserInfoContainer}>
                    <Link href='/' className={styles.asideUserName}>
                        Crypto O.G (2012)
                    </Link>
                    <span className={styles.asideUserTitle}>Advisor</span>
                    <span className={styles.asideUserTitle}>Project Manager</span>
                </div>
            </div>

            <div className={styles.asideInformation}>

                <ul className={styles.asideInformationPersonalList}>
                    <li className={styles.asideInformationPersonalListItem}>
                        <span>Residence:</span>
                        <span>United Kingdom</span>
                    </li>
                    <li className={styles.asideInformationPersonalListItem}>
                        <span>City:</span>
                        <span>London</span>
                    </li>
                    <li className={styles.asideInformationPersonalListItem}>
                        <span>Age:</span>
                        <span>{new Date().getFullYear() - 1982}</span>
                    </li>
                </ul>

                <div className={styles.aside__divider} />

                <div className={styles.aside__divider} />

                <div className={styles.asideInformationSkills}>
                    {
                        aside.skills.map(skill =>
                        {
                            return (
                                <div className={styles.asideInformationSkillsBar} key={skill.id}>
                                    <div className={styles.asideInformationSkillsBarInfo}>
                                        <span>{skill.name}</span>
                                        <span>{skill.progress}</span>
                                    </div>
                                    <div className={styles.asideInformationSkillsBarProgress}>
                                        <span className={styles.asideInformationSkillsBarProgressActive} style={{ width: skill.progressActive }} />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>

            <div className={styles.asideFooter}>
                <a href='https://www.instagram.com/cryptosi.eth/'>
                    <BsInstagram />
                </a>
                <a href='https://discord.bidify.org'>
                    <BsDiscord />
                </a>
                <a href='https://twitter.com/Crypto_SI/'>
                    <BsTwitter />
                </a>
                <a href='https://github.com/Crypto-SI/'>
                    <BsGithub />
                </a>
                <a href='https://www.linkedin.com/in/carl-anthony-bsc-a8535167/'>
                    <BsLinkedin />
                </a>
                <a href='https://www.youtube.com/channel/UCcOzf3f6ZWVlIu-6qQpjudA'>
                    <BsYoutube />
                </a>
                <a href='https://medium.com/@cryptosixxx'>
                    <BsMedium />
                </a>
            </div>
        </aside>
    );
};

export default Aside;
