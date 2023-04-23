import { Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { ThumbsUp } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment ({ content, onDeletComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeletComment(content);
    }

    function handleLikeComment () {
        setLikeCount((state)=>{
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Lzdev7.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='21 de abril ás 12:48' dateTime="2023-04-2023 12:46:60">Cerca de há 1hr atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>

                    </header>


                    <p>{content }</p>
                </div>


                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}