import { Fragment, FormEvent, useState  } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';

import { BsPerson, BsEnvelope, BsTextParagraph } from 'react-icons/bs';

import styles from '../styles/contact.module.scss';

const Contact: NextPage = () =>
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const sendMessageHandler = async(e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();

        setSuccess(false);
        const response = await axios.post('/api/contact', { name, email, message }, { headers: { 'Content-Type': 'application/json' } });

        if (response.status === 200)
        {
            setName('');
            setEmail('');
            setMessage('');
            setSuccess(true);
        }
    };

    return (
        <Fragment>
            <Head>
                <meta name='Classification' content='Contact'/>
                <meta name='subject' content='Contact'/>
                <meta name='description' content='Crypto O.G (2012) Contact'/>
                <meta name='keywords' content='Crypto O.G (2012), IQ, Quantum, Intelligent, Contact'/>
                <meta name='author' content='Crypto O.G (2012)'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://blocklimax.netlify.app/contact'/>
                <meta property='og:title' content='Crypto O.G (2012)'/>
                <meta property='og:description' content='Crypto O.G (2012) Contact'/>
                <meta property='og:image' content='https://blocklimax.netlify.app/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://blocklimax.netlify.app/contact'/>
                <meta property='twitter:title' content='Crypto O.G (2012)'/>
                <meta property='twitter:description' content='Crypto O.G (2012) Contact'/>

                <title>Crypto O.G (2012) &mdash; Contact with me</title>
            </Head>

            <section className={styles.contact}>
                <h4 className={styles.contactHeading}>Contact Information</h4>
                <div className={styles.contactCards}>
                    <div className={styles.contactCardsCard}>
                        <ul className={styles.contactCardsCardList}>
                            <li className={styles.contactCardsCardListItem}>
                                <span>Residence:</span>
                                <span>United Kingdom</span>
                            </li>
                            <li className={styles.contactCardsCardListItem}>
                                <span>City:</span>
                                <span>London</span>
                            </li>
                            <li className={styles.contactCardsCardListItem}>
                                <span>Age:</span>
                                <span>{new Date().getFullYear() - 1982}</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contactCardsCard}>
                        <ul className={styles.contactCardsCardList}>
                            <li className={styles.contactCardsCardListItem}>
                                <span>Email:</span>
                                <a href="mailto:blocklimax@Gmail.com">cryptosi@protonmail.com</a>
                            </li>
                            <li className={styles.contactCardsCardListItem}>
                                <span>Discord:</span>
                                <span>Cryptosi.eth#4286</span>
                            </li>
                            <li className={styles.contactCardsCardListItem}>
                                <span>Telegram:</span>
                                <span>@Crypto_si</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Contact;
