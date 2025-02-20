import React from "react";

const CrossButton = () => {
    return (
        <svg
            width={30}
            height={45}
            viewBox="0 0 30 45"
            cursor="pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width="29.5367"
                height="44.9574"
                rx="14.7683"
                fill="#E16449"
            />
            <path
                d="M10.0574 26.9574L19.4789 18"
                stroke="white"
                strokeWidth={2}
            />
            <path
                d="M10 18.0613L19.5367 26.896"
                stroke="white"
                strokeWidth={2}
            />
        </svg>
    );
};

export default CrossButton;
