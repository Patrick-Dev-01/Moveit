import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/50811398?s=400&u=3514cf1cd5473f5069eeee07e3c60fbfd05e2035&v=4" alt="Patrick Rodrigues"/>
            <div>
                <strong>Patrick Rodrigues</strong>
               
                <p>
                    <img src="icons/level.svg" alt="Nivel"/>
                    Level { level }
                </p>
            </div>
        </div>
    )
}