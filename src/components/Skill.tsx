import React from 'react';

import '../styles/Skill.css';

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
      <ul className="SkillList">
          {
            Data &&
            Data.map(el => {
              return(
              <li key={el.title}>
                <h4>{el.title}</h4>
                <ul className="SkillContent">
                  {
                    el.kind &&
                    el.kind.map(e =>{
                      return <li key={e}>
                                <img src={`/assets/icons/skill/${el.title}/${e}.svg`} alt={e}/>
                                <span>{e}</span>
                              </li>
                    })
                  }
                </ul>
              </li>
              )
            })
          }
      </ul>
    </section>
  );
}