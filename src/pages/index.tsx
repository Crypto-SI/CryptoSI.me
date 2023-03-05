import { Fragment, FC } from 'react';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import ServiceCard from '../components/pages/home/service-card/service-card.component';
import styles from '../styles/home.module.scss';

import home from '../data/home.data.json';

const Home: FC = () =>
{
    return (
        <Fragment>
            <Head>
                <title>Crypto O.G (2012) &mdash; Advisor & Project Manager</title>
            </Head>

            <section className={styles.home}>
                <h4 className={styles.homeHeadingSecondary}>About me</h4>
                <div className={styles.homeAbout}>
                    <h2 className={styles.homeAboutParagraph}>
                        <p>My name is CryptoSI A.K.A Carl Anthony, and I have been working in the crypto industry as a project manager and advisor since 2012. I am a results-driven professional with extensive experience in leading successful crypto projects from ideation to launch. Over the years, I have developed a keen eye for identifying innovative blockchain solutions that have the potential to disrupt traditional industries and bring about positive change.</p>
                        <p>As a project manager, I am passionate about bringing together diverse teams of developers, designers, marketers, and stakeholders to achieve a common goal. I have a proven track record of delivering projects on time and within budget while ensuring the highest level of quality. I believe in a collaborative and transparent approach, and I always strive to foster a positive and inclusive work culture.</p>
                        <p>As an advisor, I have worked with a variety of companies, from startups to established enterprises, to help them navigate the complex crypto landscape. I have provided strategic guidance on fundraising, marketing, and business development, and I have helped my clients build and strengthen their networks within the industry.</p>
                        <p>My expertise covers a wide range of blockchain technologies, including Bitcoin, Ethereum, and various altcoins. I have a deep understanding of the technical and economic aspects of these systems, and I keep myself up to date with the latest developments and trends in the industry.</p>
                        <p>In addition to my work in the crypto industry, I am a passionate advocate for blockchain education and adoption. I believe that decentralized technologies have the power to create a more equitable and sustainable future, and I am committed to spreading this message to a wider audience.</p>
                        <p>Thank you for visiting my website, and I look forward to connecting with you!</p>
                    </h2>

                </div>

                <h4 className={styles.homeHeadingPrimary}>Services</h4>
                <div className={styles.homeServices}>
                    {
                        home.services.map(service =>
                        {
                            return (
                                <ServiceCard
                                    key={service.id}
                                    title={service.title}
                                    description={service.description}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = async() =>
{
    // const repositories = await axios.get('https://api.github.com/users/climax-solution/repos');
    // const organizations = await axios.get('https://api.github.com/users/climax-solution/orgs');

    // if (!repositories.data || !organizations.data)
    return {
        props:
        {
            repositories: [],
            organizations: []
        },
        revalidate: 86400 // 1 day
    };

    // return {
    //     props:
    //     {
    //         repositories: repositories.data,
    //         organizations: organizations.data
    //     },
    //     revalidate: 86400 // 1 day
    // };
};

export default Home;
