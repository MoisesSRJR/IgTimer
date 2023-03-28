import { Header } from "./components/Header/Index";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar/Index";

import "./styles/global.css";

function App() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Sidebar />
                <main>
                    <Post />
                    <Post />
                </main>
            </div>
        </>
    );
}

export default App;
