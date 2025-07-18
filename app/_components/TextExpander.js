'use client';

import { useState } from 'react';

function TextExpander({ children }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayText = isExpanded
        ? children
        : children.split(' ').slice(0, 40).join(' ') + '...';

    return (
        <span>
            {displayText}{' '}
            <button
                className='dark:text-gray-300 text-gray-700 border-b 
                border-gray-400 leading-3 cursor-pointer pb-1'
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? 'Show less' : 'Show more'}
            </button>
        </span>
    );
}

export default TextExpander;