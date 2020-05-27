import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

class Shop extends Component {
    state = { items: [] };

    async componentDidMount() {
        const res = await axios.get("http://localhost:1337/Procucts")

        console.log(res.data);
        this.setState({ items: res.data })
    }

    render() {
        return (
            <div className="card-container">
                {this.state.items.map((item) =>
                    <Card
                        key={item.id}
                        id={item.id}
                        image={"http://localhost:1337" + item.image.url}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                    />
                )}
            </div>
        );
    }
}

export default Shop;