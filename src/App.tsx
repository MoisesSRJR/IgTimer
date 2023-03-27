import { Header } from "./components/Header/Index";
import { Sidebar } from "./components/Sidebar/Index";
import "./styles/global.css";

function App() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Sidebar />
                <main>
                    <p>post</p>
                </main>
            </div>
        </>
    );
}

export default App;
