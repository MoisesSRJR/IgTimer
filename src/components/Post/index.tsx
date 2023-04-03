import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Index'
import { Comment } from '../Comment/Index'

import { CommentForm, CommentList, Content, MainContainer } from './styles'
import { useState } from 'react'

interface PostProps {
    image: string;
    name: string;
    role: string;
    date: Date;
    _content: {
        type: string;
        content: string;
    }[];
}

export function Post({ image, name, role, _content, date }: PostProps) {
    const [comment, setComment] = useState(['Esse post é demais'])

    const dateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date)

    const publishedDateNow = formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true
    })

    

    function handleCreateNewComment() {
        event?.preventDefault()
        setComment([...comment, (comment.length + 1).toString()]);
    }

    return (
        <MainContainer>
            <header>
                <div className='author'>
                    <Avatar
                        image={image}
                    />
                    <div className='authorInfo'>
                        <strong>{name}</strong>
                        <span>{role}</span>
                    </div>
                </div>
                <time title={dateFormatted} dateTime={date.toISOString()}>{publishedDateNow}</time>
            </header>
            <Content>
                {_content.map((item, index) => {
                    if (item.type === 'paragraph') {
                        return <p key={index}>{item.content}</p>;
                    } else {
                        return <a key={index} href='#'>{item.content}</a>;
                    }
                })}
            </Content>
            <CommentForm>
                <form onSubmit={handleCreateNewComment}>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                        placeholder='Deixe um comentario'
                    />
                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                </form>
            </CommentForm>
            <CommentList>
                {comment.map(comments => {
                    return <Comment comentarys={comments} />
                })}
            </CommentList>
        </MainContainer>
    )
}
