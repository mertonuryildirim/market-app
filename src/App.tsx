import './app.css';
import Basket from './components/basket/Basket';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
    return (
        <div className="app">
            {/* Header */}
            <Header />

            {/* App Body */}
            <div className="app-body">
                {/* Sidebar */}
                <Sidebar />

                {/* Feed */}
                <Feed />

                {/* Widgets */}
                <Basket />
            </div>
        </div>
    );
}

export default App;
