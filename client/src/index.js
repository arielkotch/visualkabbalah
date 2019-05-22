import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'router.jsx'

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
       // <Route path='/' render={(props) =>(<Home paths={menuItems} {...props} />)}/>

// more about service workers: https://bit.ly/CRA-PWA
