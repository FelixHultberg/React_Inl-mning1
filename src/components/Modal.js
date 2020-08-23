import React, { useEffect, useState, useRef } from "react";


function Modal() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="App">
            <button onClick={() => setIsOpen(!isOpen)}> toggle modal</button>
            {isOpen ? (
                <div className="modal">
                    <form>
                        <h2>Contact form</h2><br />
                        <h3>name</h3>
                        <input type="text" /> <br /> <br />
                        <h3>Last Name</h3>
                        <input type="email" /> <br /> <br />
                        <h3>E-mail</h3>
                        <input type="text" value="" /> <br /> <br />
                        <input type="file" />

                    </form>
                </div>
            ) : null}
        </div>
    )




};




export default Modal;