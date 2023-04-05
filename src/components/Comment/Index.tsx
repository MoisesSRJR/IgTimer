import { useState } from 'react';
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from '../Avatar/Index'

import { CommentBox, CommentContainer, Content } from './styles'

interface CommentProps {
    name?: string;
    date?: Date;
    comentarys?: string;
    onDeleteComment: any;
}

export function Comment ({ name, date, comentarys, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(comentarys)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <CommentContainer>
            <Avatar
                hasBorder={false}
                image='https://github.com/MoisesSRJR.png'
            />
            <CommentBox>
                <Content>
                    <header>
                        <div className='authorAndTime'>
                            <strong>Moisés Junior</strong>
                            <time title='27 de março de 2023' dateTime='2023-03-27'>cerca de 1hr atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        {comentarys}
                    </p>
                </Content>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </CommentBox>
        </CommentContainer>
    )
}
