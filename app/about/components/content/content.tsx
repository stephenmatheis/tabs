'use client';

import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { UpdatePrompts } from '@/components/update-prompts';
import styles from './content.module.scss';

// TODO: Add to prompts

export function Content() {
    return (
        <div className={styles.resume}>
            <UpdatePrompts
                prompts={[
                    {
                        label: 'Experience',
                        type: 'content',
                    },
                    {
                        label: 'Skills',
                        type: 'content',
                    },
                    {
                        label: 'Contact',
                        type: 'content',
                    },
                ]}
            />
            <section className={styles.left}>
                <Skills />
                <Projects printOnly />
                <Contact />
            </section>
            <section className={styles.right}>
                <Experience />
            </section>
        </div>
    );
}