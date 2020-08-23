
import React, { Component } from "react";

import axios from "axios";



class Adminform extends Component {

    state = {
        image: " "
    }
    eventChange(e) {
        console.log(e.target.files[0])
        this.setState({ image: e.target.files[0] })
    }


    async onSubmitToApi(e) {
        e.preventDefault();


        //console.log(e.target.elements.file.files[0])
        //this.setState({title: e.target.elements.title.value})


        const res = await axios.post("http://localhost:1337/procucts", {

            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            price: e.target.elements.price.value
        })
        console.log(res)

        const data = new FormData();

        data.append("files", this.state.image)
        data.append("ref", "procucts")
        data.append("refId", res.data.id)
        data.append("field", "image")


        /*  data.append('ref', 'product')
         data.append('refId', resPic.data.id)
         data.append('field',"image" )     
     */
        //console.log(data)
        const resPic = await axios.post("http://localhost:1337/upload", data)

        console.log(resPic)


    }

    render() {
        return (
            <div className="form-container" >
                <form onSubmit={this.onSubmitToApi.bind(this)}>
                    <label htmlFor="name">Product name:</label><br />
                    <input type="text" name="title" /><br />
                    <label htmlFor="name">Description:</label><br />
                    <input type="text" name="description" /><br />
                    <label htmlFor="name">Price:</label><br />
                    <input type="number" name="price" /><br />
                    <label htmlFor="name">Product image:</label><br />
                    <input type="file" name="file" onChange={this.eventChange.bind(this)} /><br />

                    <button>Spara</button>
                    {this.state.title}
                </form>

            </div>
        )
    }
}

export default Adminform; 