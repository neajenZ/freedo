import styles from "./skill-list.module.scss";
const Skills = (props) => {
    const { skills } = props;
    return (<div className={styles.skills}>
      <div className={styles.title}>Технологии, навыки</div>
      <div className={styles.items}>
        {skills.map((item, index) => index < 7 && (<div key={item} className={styles.item}>
                <div className={styles.content}>{item}</div>
              </div>))}
        <div className={styles.dots}>...</div>
      </div>
    </div>);
};
export default Skills;
