"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryTunisia_I extends PropsCountryComponent {}

export default function ComponentCountryTunisia(
  props: PropsComponentCountryTunisia_I
): JSX.Element {
  return (
    <g
      onClick={() => !props.active && props.onSelect("tunisia")}
      className={`${!props.active ? "cursor-pointer" : ""} group`}
    >
      <title>Tunísia</title>
      <path
        d="M277.248 20.7029L269.944 23.1372C269.018 23.4457 268.297 24.1802 268.006 25.1114L266.566 29.7099C266.386 30.2861 266.442 30.9105 266.723 31.4452L267.837 33.5685C268.125 34.1168 267.727 34.7746 267.108 34.7746C266.653 34.7746 266.285 35.1433 266.285 35.598V45.7204C266.285 46.5079 265.979 47.2645 265.432 47.8309L257.853 55.6757C257.306 56.2421 257 56.9987 257 57.7861V61.6842C257 62.3096 257.193 62.9199 257.553 63.4315L262.53 70.5086C262.89 71.0203 263.083 71.6305 263.083 72.256V72.7559C263.083 73.657 263.483 74.5116 264.175 75.0887L269.785 79.7665C270.413 80.29 270.803 81.0444 270.868 81.8592L271.875 94.5602C272.075 97.0827 275.019 98.1886 276.649 96.2526C278.642 93.8844 280.645 91.0726 281.672 88.4746C281.887 87.9315 282.212 87.4346 282.661 87.0618L292.279 79.0877C292.858 78.608 293.238 77.931 293.347 77.1874L294.137 71.7611C294.329 70.4489 293.639 69.1734 292.475 68.5376C286.314 65.1716 283.112 61.4 281.778 58.2692C281.066 56.5967 282.724 55.0619 284.209 54.0139C286.975 52.0626 289.097 47.5353 290.355 43.7902C290.902 42.1636 289.765 40.5903 288.305 39.6889C284.841 37.5506 285.807 33.4331 288.012 29.6131C288.807 28.2355 287.156 26.1022 285.71 26.7649C285.085 27.0511 284.345 26.8574 283.941 26.3017L280.665 21.7978C279.886 20.7273 278.504 20.2844 277.248 20.7029Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M277.248 20.7029L269.944 23.1372C269.018 23.4457 268.297 24.1802 268.006 25.1114L266.566 29.7099C266.386 30.2861 266.442 30.9105 266.723 31.4452L267.837 33.5685C268.125 34.1168 267.727 34.7746 267.108 34.7746C266.653 34.7746 266.285 35.1433 266.285 35.598V45.7204C266.285 46.5079 265.979 47.2645 265.432 47.8309L257.853 55.6757C257.306 56.2421 257 56.9987 257 57.7861V61.6842C257 62.3096 257.193 62.9199 257.553 63.4315L262.53 70.5086C262.89 71.0203 263.083 71.6305 263.083 72.256V72.7559C263.083 73.657 263.483 74.5116 264.175 75.0887L269.785 79.7665C270.413 80.29 270.803 81.0444 270.868 81.8592L271.875 94.5602C272.075 97.0827 275.019 98.1886 276.649 96.2526C278.642 93.8844 280.645 91.0726 281.672 88.4746C281.887 87.9315 282.212 87.4346 282.661 87.0618L292.279 79.0877C292.858 78.608 293.238 77.931 293.347 77.1874L294.137 71.7611C294.329 70.4489 293.639 69.1734 292.475 68.5376C286.314 65.1716 283.112 61.4 281.778 58.2692C281.066 56.5967 282.724 55.0619 284.209 54.0139C286.975 52.0626 289.097 47.5353 290.355 43.7902C290.902 42.1636 289.765 40.5903 288.305 39.6889C284.841 37.5506 285.807 33.4331 288.012 29.6131C288.807 28.2355 287.156 26.1022 285.71 26.7649C285.085 27.0511 284.345 26.8574 283.941 26.3017L280.665 21.7978C279.886 20.7273 278.504 20.2844 277.248 20.7029Z"
        stroke="#F3F9F7"
      />
      {!props.active && (
        <>
          <rect x="272" y="35" width="29" height="29" fill="url(#pattern18)" />
          <defs>
            <pattern
              id="pattern18"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image18_317_273" transform="scale(0.0344828)" />
            </pattern>
            <image
              id="image18_317_273"
              width="29"
              height="29"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQoSURBVHgBxVdvbBRFFP/N3vb+cW2v6alQbakS7loUQm2qiWhpDegHi2gEgn4gxtAGLQ2JsYmQmCJoAqYf1KA1SoL/IiWoiUExGlMR8T+VIjFXrobeYdKS2vZqetdr73Z3fDOlhy232xNK/CWbeTvz5v3mzbz3dhb4H8CyUTqFUq8Ljk0MrIaDL+fATTQxR4yR3EtyRAFr14EvytEdvirSP7Co2IC6gwxvpMeLLEAGPyfdxjKc7bXQyYxuBLZRs5ueXFwBFODlLix7ZgMO61mRBuHfR1vZiKsG67GDrb4FwYgl6Vn4D3CwxzFHoK0OK+BVAYQGp/qUGYQtc0koQF6Vks1DM/omEUTZUgb+G64ROIzmcvS0ziANBOmlzGqikpcLZ101cu6uhK14PngsgfEjHUie+BX6+X6rqYJoZAwTN1cgPCJJKVJrqemwmuSovRPeAy+CeS8PZp5KId76NmJ791uZIG/58+UI7VQvrmILt1B2b16HvNZmKSfeP4JE+1HpmeLzwvnQKjgfXgXP9nowjxujz71qaocCaAs1O6c8HaamIJOirWQBfD+2S3n4kW1I/dAFpSCPSBrgWn8/QET6+T6oi0qkTnTD05j48jtTYhXaYkUEkBmhgOfZzWBuJ2IvvCEJxSIKv3kX7ob10Pv/AstR04RSv/kJWEGH7T6RMgutlBwr7wAfjWPszcPy3fVYnSQWiL9+EMnjJymQOqFF+mRfTtVt6XET3CBIfWajTFWh3Hg9Uqe7wTVN9tmrK8H/HkXy2075DD/YiPGPv4K6sCg9T11s7ocBLFBghYsJxdyuS32aDpY/GcFKvke2+oWh6fOSmqlJG5imUNImzBR4SgMfGaUzKyaCSaLk96dka7+nEupSP3ydH2Le1ken5ak+MGRKqoMPKDbwX2CBxMHPpGeu+nXyfaztELRzf0p53pMb5YLsd1Wkz1ELRaCZf9UEepUAes6JamGmEXvlPXmGuTsa4Fx7LwySo2ubkPjgU1HMYfQNEEn4kv5L1gWCPD1tE0ITCqn8seWZlHhsDMaFQTjX1MoiYCspgjEYlbmonfwdxtAIVasqMKcDsT1vpaPcBOElCG2XoUK5WkPF/msrbfuKCuS3tWRMB7ETsT37EW9rtzJBcalsDSD4WrrgU1USpDWYBY66lXCsuB3K/ELw+DhSP5/B+CcdcttnQZg+cbXiDpUmDaG82oBxDFle1v4r6CbSFED3PiGn89SP4HFayW5cA1DAfTRFOI1UgFxvoaYNc4twCvb6f3dcVpHo6vgUebwLcwAqeScMJGuW4UzUklRAeExn0EBiP64QFBh7XZhYvQS9kQxj5qBUKoX86PJNyDrA+FG6/e3yo+cnmC9odgzgOs8gCh6gX4c1ZPRWCowi2iKfARYlA5QrvItMHUtg4h1xB5rN3j8hdWpMxx0JGgAAAABJRU5ErkJggg=="
            />
          </defs>
        </>
      )}
    </g>
  );
}
