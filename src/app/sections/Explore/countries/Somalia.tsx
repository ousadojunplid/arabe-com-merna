"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountrySomalia_I extends PropsCountryComponent {}

export default function ComponentCountrySomalia(
  props: PropsComponentCountrySomalia_I
): JSX.Element {
  return (
    <g
      clip-path="url(#clip3_317_273)"
      onClick={() => !props.active && props.onSelect("somalia")}
      className={`${!props.active ? "cursor-pointer" : ""} group`}
    >
      <title>Somália</title>
      <path
        d="M631.808 289.017L627.62 274.961C627.547 274.716 627.375 274.513 627.145 274.401C626.798 274.232 626.382 274.3 626.106 274.572L622.862 277.77C622.568 278.059 622.172 278.222 621.759 278.222H620.656C619.686 278.222 619.228 279.462 619.837 280.215C620.264 280.742 620.024 281.45 619.481 281.857C614.769 285.382 616.039 293.238 617.468 297.282C617.559 297.539 617.694 297.785 617.856 298.004C634.175 320.107 654.155 321.89 667.653 318.568C670.657 317.828 674.07 321.531 672.568 324.235L655.97 354.107C655.326 355.265 654.006 355.846 652.684 355.75C636.785 354.596 619.7 374.922 612.454 386.336C612.151 386.813 612 387.359 612 387.924V409.092C612 410.77 613.36 412.129 615.037 412.129H628.875C629.278 412.129 629.658 412.06 630.026 411.896C660.311 398.45 708.89 313.571 707.811 268.789C707.772 267.2 706.445 266 704.856 266H703.107C702.433 266 701.765 266.235 701.23 266.647C664.26 295.095 641.088 294.749 633.077 290.632C632.44 290.305 632.012 289.703 631.808 289.017Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M631.808 289.017L627.62 274.961C627.547 274.716 627.375 274.513 627.145 274.401C626.798 274.232 626.382 274.3 626.106 274.572L622.862 277.77C622.568 278.059 622.172 278.222 621.759 278.222H620.656C619.686 278.222 619.228 279.462 619.837 280.215C620.264 280.742 620.024 281.45 619.481 281.857C614.769 285.382 616.039 293.238 617.468 297.282C617.559 297.539 617.694 297.785 617.856 298.004C634.175 320.107 654.155 321.89 667.653 318.568C670.657 317.828 674.07 321.531 672.568 324.235L655.97 354.107C655.326 355.265 654.006 355.846 652.684 355.75C636.785 354.596 619.7 374.922 612.454 386.336C612.151 386.813 612 387.359 612 387.924V409.092C612 410.77 613.36 412.129 615.037 412.129H628.875C629.278 412.129 629.658 412.06 630.026 411.896C660.311 398.45 708.89 313.571 707.811 268.789C707.772 267.2 706.445 266 704.856 266H703.107C702.433 266 701.765 266.235 701.23 266.647C664.26 295.095 641.088 294.749 633.077 290.632C632.44 290.305 632.012 289.703 631.808 289.017Z"
        stroke="#F3F9F7"
      />

      {!props.active && (
        <>
          <rect x="674" y="331" width="29" height="29" fill="url(#pattern16)" />
          <defs>
            <pattern
              id="pattern16"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image16_317_273" transform="scale(0.0344828)" />
            </pattern>
            <image
              id="image16_317_273"
              width="29"
              height="29"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQiSURBVHgBpZZtbBRFGMf/O7t3vSvt0VbqVTG0WG3RxEhNEQ1X7WlKNb4kNsHgB4IStKAmBD+Q+EEimGhMjKAJJWJNaI0ffMOXmGgjKgSJmpj2+kJMKJjDVM/alh71bnu7szvD7JY77nq391J+TbM7zz37/GeemXlmJJRAZ+9YjcLMwFzcqLHaiow5ZsxPnXwpcKqUOFIhh019Y6suxo1dlPIuDjQs/p2aGhjXVZngV42aHw7uCR4tFNNRtP3AUJWk4KDBsBUF0AwVJjOSzTDnbF8+8Zyij/aOPTan0n7OUYUiYJwhQWMZNq9LPlZbJu38YueG/wqKdvSE9iYo34cS0agYLTcybESMmhosGHo5GHYU7egZ3p6g7H0sAYNR6MZ8lt1NpPOyV1r38/Nts2mdWUDMYYPo1WEsEZkoOe064400wd9Jt6VEPV75W5NDQZHULnNltCXrTyI5fQ2Tbwm+e/qRDNEnesc2xzVzDYpkdY0HG5urs+wExPEb3WRvX/UTTKu0GyXQ0bQc99/syxYlsuM3CYM1tb5xqt32e+jwUAM42lEC99T70LjCA3/lohRLJO937nJssUW5RO5DCdRXl9n/Fg/eUtQ2TqHprMt6KqpmtjoVprbVPtT53Bm22/3e1PsDty4HZTzVFpUIs6qKb/6YEu88V8iqxz8YvFFxy8pNumnmcsDvEzFsu9uPrjuuy/m7taB23FuXao/8E8OrAxEnQRtVU1cpHNwxR/OU4dDpCM5OzWPbOj+uXzSH6Xw6PI0jv0UQS2jIR/QS9Yh9yWZQgO/PRjEaiWN/Z729gDJ6rjO8MvAXQn/HwBhHMRBxZMWLcfz3f2rttSx7uZvg3HSy/LGCcZrrKmcIAw+hCG7wuXCbv9x+p6J0TYpOJNnYvDBDhcYpy4R/9EzrKGmsWfYjimDtygr7aY24+7Pz2P3Vn/jhXNS2BRp8V0Tzy4pdfMJ+9m9dM1JRJodRgIdF2ft8dEYIjuPCbAKTMYrXj0/YC62p1gsRw9ozeWPohtF/RRyIa7Qvn3OFW8bXZy6iRwjEtMx5OyY6sv2TcSHsEeep6RxEki74XFVfpkQJIwcVIk06+cd0E8fHo47xrJQPTsTt4uCEz6W8d2J3SzQlajUYw1O4Bqz5ZA4jFUkPb97gfivZTlXok7vW/iRSsB9LhLHcgoRIESauLN2tranlnlV0Ow8NH1EN9ixKxLqqWFeWdLgEkUFxR9oTzNiWWWfRwAt3PkcgvYYSsOYy7Qq6YBMprfXIgcWCOUUtRKr31lS6NonXMIqAMj1jj4pFeZTFWcvAi4EzufwL3vDbDgw9DVlcuB0OemvxJGjcTqU4DvqqKzwff7dj/S/5YhYUTdIubhjclFpECVhPDe63bIrMuKrHR3xeDN21YmXozScbLxUT6zIEVrgq3mf63gAAAABJRU5ErkJggg=="
            />
          </defs>
        </>
      )}
    </g>
  );
}
