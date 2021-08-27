import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import TodoListMain from './components/TodoListMain';
import Counter from './Others/Counter';
import Counter2 from './Others/Counter2';

const Routes = () => {
    return (<Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/todolist'>
        <TodoListMain/>
      </Route>
      <Route path='/counter'>
        <Counter />
      </Route>
      <Route path='/counter2'>
        <Counter2 />
      </Route>
    </Switch>
    );
};

export default Routes;