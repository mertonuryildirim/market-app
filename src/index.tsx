import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import App from './App';
import './index.css';
import rootReducer from './store';

//apply middleware içerisine saga koy.
const store = createStore(rootReducer, applyMiddleware());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
