"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import './style.css'

const ImageAnimation = () => {

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="700"
        viewBox="0 0 543 563"
        fill="none"
      >
        <g filter="url(#filter0_f_579_14)">
          <path
            // className="glowing-path"
            d="M408.381 146.694L290.783 103.427C278.337 98.8577 264.637 98.8577 252.191 103.427L134.593 146.694C113.896 154.309 100 173.714 100 194.962V248.289C100 341.742 161.269 426.564 252.564 459.414C258.659 461.614 265.068 462.705 271.477 462.705C277.887 462.705 284.354 461.595 290.509 459.376C381.726 426.564 442.994 341.723 442.994 248.27V194.943C442.994 173.677 429.098 154.271 408.401 146.675L408.381 146.694Z"
            fill="#5C5CFF"
          />
        </g>
        <g filter="url(#filter1_i_579_14)">
          <path
            className="color-graded-path"
            d="M392.568 184.431L288.569 144.579C277.563 140.371 265.447 140.371 254.441 144.579L150.442 184.431C132.139 191.445 119.85 209.319 119.85 228.889V278.007C119.85 364.083 174.033 442.21 254.77 472.467C260.161 474.493 265.828 475.498 271.496 475.498C277.164 475.498 282.884 474.476 288.327 472.432C368.995 442.21 423.178 364.066 423.178 277.989V228.872C423.178 209.284 410.889 191.41 392.585 184.414L392.568 184.431Z"
            fill="#2E2EFE"
          />
        </g>


        <svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feFlood result="flood" flood-color="white" flood-opacity="1" />
              <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in" />
              <feMorphology in="mask" result="dilated" operator="dilate" radius="1" />
              <feGaussianBlur in="dilated" result="blurred" stdDeviation="2" />
              <feMerge>
                <feMergeNode in="blurred" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            class="mainPath"
            d="M204.998 445.219C214.998 452.879 240.497 470.198 273.997 475.694C307.496 471.198 333.696 446.118 336.496 445.718"
          />
        </svg>



        <svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feFlood result="flood" flood-color="white" flood-opacity="1" />
              {/* <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in" /> */}
              <feMorphology in="mask" result="dilated" operator="dilate" radius="1" />
              <feGaussianBlur in="dilated" result="blurred" stdDeviation="5" />
              <feMerge>
                <feMergeNode in="blurred" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            className="mainPath"
            d="M392.21 185.365L392.816 185.597L392.83 185.583C410.413 192.59 422.178 209.914 422.178 228.872V277.989C422.178 363.649 368.254 441.42 287.976 471.496L287.975 471.496C282.645 473.497 277.045 474.498 271.496 474.498C265.947 474.498 260.398 473.514 255.122 471.531L255.121 471.53C174.773 441.42 120.85 363.666 120.85 278.007V228.889C120.85 209.733 132.883 192.231 150.8 185.365L254.798 145.513C265.574 141.393 277.436 141.393 288.212 145.513L392.21 185.365Z"
            stroke="white"
            stroke-width="2.5"
            fill="none"
            filter="url(#glow)"
            stroke-dasharray="140 350"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="200; -10000"
              dur="90s"
              repeatCount="indefinite"
            />
          </path>


        </svg>







        <path
          d="M293.692 336.771L302.926 354.792H282.727L273.493 336.771L251.417 293.52L229.342 336.771L220.108 354.792H199.908L209.142 336.771L251.417 253.874L293.692 336.771Z"
          fill="white"
        />
        <path
          d="M329.67 354.792H311.634V253.874H329.67V354.792Z"
          fill="white"
        />

        <defs>
          <filter
            id="filter0_f_579_14"
            x="0"
            y="0"
            width="542.994"
            height="562.704"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_579_14"
            />
          </filter>
          <filter
            id="filter1_i_579_14"
            x="119.85"
            y="141.423"
            width="303.328"
            height="338.075"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="9.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_579_14"
            />
          </filter>
          <linearGradient
            id="paint0_linear_579_14"
            x1="196.499"
            y1="200.917"
            x2="314.352"
            y2="416.821"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E0E0E0" />
            <stop offset="0.5" stop-color="#757575" />
            <stop offset="1" stop-color="#222222" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_579_14"
            x1="204.998"
            y1="444.719"
            x2="332.106"
            y2="421.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0" />
            <stop offset="0.5" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_579_14"
            x1="181.998"
            y1="174.738"
            x2="280.982"
            y2="143.718"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0" />
            <stop offset="0.517464" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ImageAnimation;
