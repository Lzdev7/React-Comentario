import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine} from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1" alt="" />
            <div className={styles.profile }>

                <Avatar src="https://github.com/Lzdev7.png"/>

                <strong>Luiz Henrique</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}