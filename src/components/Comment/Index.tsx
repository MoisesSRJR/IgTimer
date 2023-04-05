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

    function handleDeleteComment() {
        onDeleteComment(comentarys)
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
                    <button>
                        <ThumbsUp />
                        Aplaudir
                        <span>28</span>
                    </button>
                </footer>
            </CommentBox>
        </CommentContainer>
    )
}
