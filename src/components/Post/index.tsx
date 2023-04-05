import { ChangeEvent, FormEvent, useState } from "react";
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Index'
import { Comment } from '../Comment/Index'

import { CommentForm, CommentList, Content, MainContainer } from './styles'

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
    const [newCommentText, setNewCommentText] = useState('')

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

    const isNewCommentEmpty = newCommentText.length === 0;

    function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setComment([...comment, newCommentText.toString()]);
        setNewCommentText('')
    }

    function handleNewCommentChange (event: ChangeEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity('')
        setNewCommentText(event?.target.value)
    }

    function handleNewCommentInvalid (event: ChangeEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment (commentToDelete: string) {
        const commentsWithouDeleteOne = comment.filter(comment => {
            return comment !== commentToDelete;
        })
        setComment(commentsWithouDeleteOne);
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
                {_content.map(item => {
                    if (item.type === 'paragraph') {
                        return <p key={item.content}>{item.content}</p>;
                    } else {
                        return <a key={item.content} href='#'>{item.content}</a>;
                    }
                })}
            </Content>
            <CommentForm>
                <form onSubmit={handleCreateNewComment}>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                        name='comment'
                        placeholder='Deixe um comentario'
                        value={newCommentText}
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewCommentInvalid}
                        required
                    />
                    <footer>
                        <button
                            type='submit'
                            disabled={isNewCommentEmpty}
                        >
                            Publicar
                        </button>
                    </footer>
                </form>
            </CommentForm>
            <CommentList>
                {comment.map(comments => {
                    return (
                        <Comment
                            key={comments}
                            comentarys={comments}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </CommentList>
        </MainContainer>
    )
}
