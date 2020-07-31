import React, {Component} from 'react';

class App extends Component {
    state = {
        array: []
    };

    componentDidMount() {
        this.getFetchListClient();
    }

    getFetchListClient = async () => {
        try {
            await fetch("https://craft-server.herokuapp.com/list", {
                method: "GET",
            }).then(data => data.json())
                .then(result => {
                    this.setState({
                        array: result.users
                    })
                })
                .catch()
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const {array} = this.state;
        return (
            <ul>
                {array.length > 0 && array.map(item => (
                <li>{item._id}</li>
                ))}
            </ul>
        );
    }
}

export default App;