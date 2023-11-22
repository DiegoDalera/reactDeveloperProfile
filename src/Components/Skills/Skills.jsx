import "./Skills.css";
import Card from "./Card";
import skillsData from "./skillsData.json";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <h2>Mis Skills</h2>
      </div>

      {skillsData.map((skill, index) => (
        <Card
          key={index}
          link={skill.link}
          icono={skill.icono}
          titulo={skill.titulo}
          descripcion={skill.descripcion}
        />
      ))}
    </div>
  );
};

export default Skills;
