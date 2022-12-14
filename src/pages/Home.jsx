import styles from '../css/Home.module.css';
import Button from '../components/Button';
import {Link} from 'react-router-dom';

function Home() {

return (
    <div id={styles["homeBanner"]}>
        <div className={styles.content}>
            <div>
                <h1>Welcome to the Velvet Room</h1>
                <h2>"This place exists between dream and reality, mind and matter."
                    —Igor</h2>
            </div>
            <p>Hey everyone, this is my first project in React, please ignore this horrible layout, I'm working on
                it. </p>
            <p>Feel free to interact and please give me some feedbacks :)</p>
            <div className={styles.compendium}>
                <p>Click here to see your demons, they missed you!</p>
                <Link to="/compendium">
                    <Button text="Compendium"/>
                </Link>
            </div>
        </div>
        <div>
            <img src="https://static.wikia.nocookie.net/megamitensei/images/e/e9/PQ2_Margaret.png"
                 alt=""/>
        </div>
    </div>
)
}

export default Home;
