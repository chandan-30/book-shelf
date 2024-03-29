import React from 'react';
import './styles/card.css';
import { useState } from 'react';
import { changeStatus } from '../store/book';
import { useDispatch } from 'react-redux';

const Card = ({book}) => {

    const [read, toggleRead] = useState(book.is_read); // State to toggle read status.
    const dispatch = useDispatch();
    if ( !book ) return; // Returning null if book prop is not provided.

    const clickHandler = () => { // Function to handle click event on button.
        toggleRead(!read);
        dispatch(changeStatus(book.id)); // Dispatching action to change book status.
    }
  return (
    <div className='card'>
        <div className='card--img'>
            <img src={book.cover} alt="Book Cover" />
        </div>
        <div className='card--details'>
            <ul>
                <li>{book.title}</li>
                <li>{book.author.join(', ')}</li>
                <li>{book.year}</li>
            </ul>
            <button className={read ? 'btn btn-success': 'btn btn-outline-danger'} onClick={clickHandler}>{read ? 'read':'unread'}</button>
        </div>
    </div>
  )
}

export default Card;