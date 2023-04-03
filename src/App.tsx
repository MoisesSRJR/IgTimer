import { Header } from "./components/Header/Index";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar/Index";

import "./styles/global.css";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/MoisesSRJR.png',
            name: 'Moisés junior',
            role: 'Dev front-end Pleno'
        },
        content: [
            { type: 'paragraph', content: 'Fala Amigos 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2023-03-29 20:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/maykbrito.png',
            name: 'Mayk Brito',
            role: 'Educator @Rocketseat'
        },
        content: [
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2023-03-28 10:00:00'),
    },
];


function App() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                image={post.author.avatarUrl}
                                name={post.author.name}
                                role={post.author.role}
                                date={post.publishedAt}
                                _content={post.content}
                            />
                        )
                    })}
                </main>
            </div>
        </>
    );
}

export default App;
