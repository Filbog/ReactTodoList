import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons';

function Form() {
    return (
        <form>
            <input type='text' className='todo-input'>
                <button className='todo-button' type='submit'></button>
                <FontAwesomeIcon icon={faPlusSquare} />
            </input>
);
        </form>
       
}

export default Form;