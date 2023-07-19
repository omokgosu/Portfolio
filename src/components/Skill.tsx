import React from 'react';

interface Skill {
  title: string;
  kind: string[]
}

export default function Skill() {
  
  const Data: Skill[] = [
    {
      title: 'Front-end',
      kind: [
        'ReactJs',
        'NextJs',
        'TypeScript',
        'JavaScript',
        'Redux',
        'jQuery',
        'SCSS',
        'HTML5',
        'CSS3'
      ]
    },
    {
      title: 'design',
      kind: [
        'Figma',
        'illustrator',
        'photoshop'
      ]
    },
    {
      title: 'version',
      kind: [
        'github'
      ]
    }
  ]

  return (
    <section className="Skill">
      <h3>SKILLS</h3>
      <ul>
        <li>
          
        </li>
      </ul>
    </section>
  );
}