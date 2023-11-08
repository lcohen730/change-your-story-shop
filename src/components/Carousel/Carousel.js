import { useState } from 'react';

export default function Carousel({ images }) {
    const [currentIdx, setCurrentIdx] = useState(0);

    const handleNext = () => {
        setCurrentIdx((prevIdx) => {
            prevIdx + 1 === images.length ? 0 : prevIdx + 1
        });
    };

    const handlePrev = () => {
        setCurrentIdx((prevIdx) => {
            prevIdx - 1 < 0 ? images.length - 1 : prevIdx - 1
        });
    };

    return (
        <div className='carousel'>
            <img
                key={currentIdx}
                src={images[currentIdx]}
            />
            <div className='arrows'>
                <div className='left' onClick={handlePrev}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='20'
                        viewBox='0 96 960 960'
                        width='20'
                    >
                        <path d='M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z' />
                    </svg>
                </div>
                <div className='right' onClick={handleNext}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='20'
                        viewBox='0 96 960 960'
                        width='20'
                    >
                        <path d='m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z' />
                    </svg>
                </div>
            </div>
        </div>
    )
}