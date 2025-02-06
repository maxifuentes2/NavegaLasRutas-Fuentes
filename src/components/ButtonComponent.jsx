import './ButtonComponent.css';

export default function ButtonComponent({ text, onClick }) {
    return (
        <button className='botones-header' onClick={onClick}>
            {text}
        </button>
    );
}

