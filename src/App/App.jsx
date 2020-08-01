import React, {Component} from 'react';
import CartCompany from "../CartCompany/CartCompany";
import stylish from "../App/App.module.css";

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
            <>
                <ul className={stylish.App}>
                    {array.length > 0 && array.map(item => (
                        <li key={item._id} className={stylish.cartComponent}><CartCompany item={item}/></li>
                    ))}

                </ul>
            </>
        );
    }
}

export default App;