import styles from "./comment-form.module.scss";
import { useState } from "react";
const Stars = () => {
    const [active, setActive] = useState([
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: false },
        { id: 5, active: false },
    ]);
    return (<div className={styles.main}>
      <input id="1" className={styles.input} type="checkbox" checked={active[0].active}/>
      <label htmlFor="1" className={styles.label} onChange={() => setActive([...active, { id: 1, active: !active[0].active }])}></label>
      <input id="2" className={styles.input} type="checkbox" checked={active[1].active}/>
      <label htmlFor="2" className={styles.label} onClick={() => setActive([...active, { id: 2, active: !active[1].active }])}></label>
      <input id="3" className={styles.input} type="checkbox" checked={active[2].active}/>
      <label htmlFor="3" className={styles.label} onClick={() => setActive([...active, { id: 3, active: !active[2].active }])}></label>
      <input id="4" className={styles.input} type="checkbox" checked={active[3].active}/>
      <label htmlFor="4" className={styles.label} onClick={() => setActive([...active, { id: 4, active: !active[3].active }])}></label>
      <input id="5" className={styles.input} type="checkbox" checked={active[4].active}/>
      <label htmlFor="5" className={styles.label} onClick={() => setActive([...active, { id: 5, active: !active[4].active }])}></label>
    </div>);
};
export default Stars;
