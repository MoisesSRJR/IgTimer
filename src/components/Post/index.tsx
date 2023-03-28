import { CommentForm, Content, MainContainer } from './styles'

export function Post () {
    return (
        <MainContainer>
            <header>
                <div className='author'>
                    <img src='https://github.com/MoisesSRJR.png' />
                    <div className='authorInfo'>
                        <strong>Moises junior</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='27 de março de 2023' dateTime='2023-03-27'>Publicado há 1h</time>
            </header>
            <Content>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>
                    👉{' '}
                    <a href=''>jane.design/doctorcare</a>
                </p>
                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw </a>{' '}
                    <a href=''>#rocketseat</a>{' '}
                </p>
            </Content>
            <CommentForm>
                <form>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                        placeholder='Deixe um comentario'
                    />
                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                </form>
            </CommentForm>
        </MainContainer>
    )
}
