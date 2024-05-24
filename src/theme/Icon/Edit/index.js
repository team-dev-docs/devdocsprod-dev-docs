import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
export default function IconEdit({ className, ...restProps }) {
  return (
    <a className="edit-icon">
      Edit This Page
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M9.99837 4.99962H4.99962C4.55771 4.99962 4.13389 5.17517 3.82141 5.48766C3.50892 5.80014 3.33337 6.22396 3.33337 6.66587V14.9971C3.33337 15.439 3.50892 15.8629 3.82141 16.1753C4.13389 16.4878 4.55771 16.6634 4.99962 16.6634H13.3309C13.7728 16.6634 14.1966 16.4878 14.5091 16.1753C14.8216 15.8629 14.9971 15.439 14.9971 14.9971V9.99837M9.16525 10.8315L16.6634 3.33337M16.6634 3.33337H12.4977M16.6634 3.33337V7.499"
          stroke="#A2A1A5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  );
}
