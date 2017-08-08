const GreeterMessage = React.createClass({
    render: function () {
        const name = this.props.name;
        return(
            <div>
                <h1>Hello{name}</h1>
                <p>a paragraph</p>
            </div>
        )
    }
});
const GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        const name = this.refs.name.value;
        if (name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
            </form>
        );
    }
});
const Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'default message'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name
        };
    },
    handleNewName: function (e) {
        this.setState({
           name: name
        });
    },
    render: function () {
        const name = this.state.name;
        const message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
                <GreeterMessage name={name}/>
                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        );
    }
});
const firstName = 'defaultName';
const myMessage = 'this is a default message!';
ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);