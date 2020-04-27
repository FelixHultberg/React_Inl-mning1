import React from 'react';

const Bookings = () => {
    return (
        <div className="bookings">
            <h1>Booking Page</h1>
            <form>
                <label htmlFor="name">Your name:</label><br />
                <input type="text" id="name" name="name" /><br />
                <label htmlFor="time">Booking time:</label><br />
                <input type="text" id="time" name="time" /><br />
                <label htmlFor="number">Your phone number:</label><br />
                <input type="tel" id="number" name="number" /><br />
            </form>
            <br />
            <button>Confirm</button>
        </div>

    );
}

export default Bookings;