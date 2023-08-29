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
      <h4>SKILLS</h4>
      <ul className="SkillList">
          {
            Data &&
            Data.map(el => {
              return(
              <li key={el.title}>
                <h5>{el.title}</h5>
                <ul className="SkillContent">
                  {
                    el.kind &&
                    el.kind.map(e =>{
                      return <li key={e}>
                                <img src={process.env.PUBLIC_URL+`/assets/icons/skill/${el.title}/${e}.svg`} alt={e}/>
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