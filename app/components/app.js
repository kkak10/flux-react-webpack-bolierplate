let React = require('react'),
    ReactDOM = require('react-dom');

class MyComponent extends React.Component {
    render() {
        return <div>Hello {this.props.name}!!</div>;
    }
}

ReactDOM.render(<MyComponent name='good'/>, document.querySelector('body'));