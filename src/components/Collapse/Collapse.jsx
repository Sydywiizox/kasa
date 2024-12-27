import './Collapse.scss';
import { useState } from 'react';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className='collapse__header'>
                {title}
                <button
                    className="collapse__button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
                </button>
            </div>
            <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
                {children}
            </div>
        </div>
    );
}

export default Collapse;