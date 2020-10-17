// import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
// 2. Create component
//import Rectangle from './components/Rectangle';
import Pyramid from './components/Pyramid';

/* const App = function() {
    return (
        <Rectangle
            height={150}
            width={300}
        />
    );
}; */
const App = function () {
    return (
        <Pyramid
            levels={30}
            bgImg={'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}>
            This pyramid has background
        </Pyramid>
    );
};

// 3. Display component
ReactDOM.render(<App />, document.getElementById('root'));