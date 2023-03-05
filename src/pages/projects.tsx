import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import data from '../data/projects.data.json';

import ProjectCard from '../components/pages/projects/project-card/project-card.component';

import styles from '../styles/projects.module.scss';

const Projects: NextPage = () =>
{
    return (
        <Fragment>
            <Head>
                <meta name='Classification' content='Portfolio Project'/>
                <meta name='subject' content='Portfolio Project'/>
                <meta name='description' content='Crypto O.G (2012) Project'/>
                <meta name='keywords' content='Crypto O.G (2012), IQ, Quantum, Intelligent, Project'/>
                <meta name='author' content='Crypto O.G (2012)'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://blocklimax.netlify.app/projects'/>
                <meta property='og:title' content='Crypto O.G (2012)'/>
                <meta property='og:description' content='Crypto O.G (2012) Projects'/>
                <meta property='og:image' content='https://blocklimax.netlify.app/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://blocklimax.netlify.app/Projects'/>
                <meta property='twitter:title' content='Crypto O.G (2012)'/>
                <meta property='twitter:description' content='Crypto O.G (2012) Projects'/>

                <title>Crypto O.G (2012) &mdash; Projects</title>
            </Head>

            <section className={styles.projects}>
                <h2 className={styles.projectsHeading}>Projects</h2>

                <div className={styles.projectsCards}>
                    {
                        data.cards.map(card =>
                        {
                            return (
                                <ProjectCard
                                    key={card.id}
                                    image={card.image}
                                    alt={card.title}
                                    title={card.title}
                                    description={card.description}
                                    link={card.link}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </Fragment>
    );
};

export default Projects;
