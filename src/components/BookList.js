import React, { Component } from 'react';

class BookList extends Component {

    render() {
        return (
            <div className="book-list">
                <ul>
                    <li>The Way of Kings</li>
                    <li>The Name of the Wind</li>
                    <li>The final empire</li>
                </ul>
            </div>
        );
    }
}

export default BookList;