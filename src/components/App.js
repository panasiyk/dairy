import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsCard from './ItemsCard'
import CommentsCard from './CommentsCard'
import '../App.css';
const App =() =>
            <div className="row">
                <div className={'bg-dark col-2'} style={{height: '100vh'}}>
                    <div className={'left-bar container align-self-center p-4'}>
                        <p className="dairy col text-light">DAIRY APP</p>
                        <div className="comment col text-muted">Comment with no sense</div>
                    </div>
                </div>
                <div className={'col-10'}>
                    <div className={'justify-content-around row pt-5'}>
                        <div className={'col-5'}><ItemsCard/></div>
                        <div className={'col-5'}><CommentsCard/></div>
                    </div>
                </div>
            </div>;

export default App;

