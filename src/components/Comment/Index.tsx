import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from '../Avatar/Index'

import { CommentBox, CommentContainer, Content } from './styles'

export function Comment () {
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
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        Muito bom Devon, parabéns!! 👏👏
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
