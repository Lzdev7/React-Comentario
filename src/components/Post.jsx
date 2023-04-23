import { format,formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';



export function Post({ author, publishedAt , content }) {

    const [coments, setComments] = useState([
        'Post muito Bacana, hein?!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
        locale:ptBr,
    })
   
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })

    function handleCreatNewComment(){
        event.preventDefault();

        setComments([...coments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório.');
    }

    function handeNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }
    
    function deletComment(commentToDelete){
        const commentsWithoutDeletOne = coments.filter(coments=>{
            return coments != commentToDelete;
        })

        setComments(commentsWithoutDeletOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted}  dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                    </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type ==='paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreatNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback </strong>

                <textarea
                    name="coment"
                    placeholder='Deixe um comentário'  
                    value={newCommentText}
                    onChange={handeNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required={true}
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>


           <div className={styles.commentList}>
                {coments.map(coments =>{
                    return <Comment key={coments} content={coments} onDeletComment={deletComment}/>
                })}
           </div>
        </article>
    )
}