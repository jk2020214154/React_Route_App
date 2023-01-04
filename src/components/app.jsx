import React, { Component } from 'react';
import NavBar from './narbar.jsx';

import Home from './home';
import Linux from './linux';
import Django from './django';
import Web from './web';
import WebContent from './webContent';
import NotFound from './notFound';
import {Routes,Route,Navigate} from 'react-router-dom';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />}   />
                    <Route path="/linux" element={<Linux />}>
                        <Route path="homework" element={<h4>作业的内容</h4>}></Route>
                        <Route path="terminal" element={<h4>终端的内容</h4>}></Route>
                        <Route path="*" element={<h4>其他的内容</h4>}></Route>
                    </Route>
                    <Route path="/django" element={<Django />} />
                    <Route path="/web" element={<Web />} />
                    <Route path="/web/content/:chapter" element={<WebContent />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate replace to="/404" />} />
                
                </Routes>

            </div>
            </React.Fragment>
        );
    }
}
 
export default App;