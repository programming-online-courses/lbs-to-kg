import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
  title: string;
}

const App = (props: Props) => {
  return <h1>{props.title}</h1>
}

ReactDOM.render(
  <App title={'hello world'}/>,
  document.getElementById('app')
);

