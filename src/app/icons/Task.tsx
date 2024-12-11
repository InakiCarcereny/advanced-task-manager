import React from 'react';
import type { SVGProps } from 'react';

export function Task(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.5 2h-.585A1.5 1.5 0 0 0 9.5 1h-3a1.5 1.5 0 0 0-1.415 1H4.5A1.5 1.5 0 0 0 3 3.5v10A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 11.5 2m-5 0h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m.852 8.354l-1.5 1.5a.496.496 0 0 1-.706 0l-.5-.5a.5.5 0 0 1 .707-.707l.146.146l1.146-1.146a.5.5 0 0 1 .707.707m0-4l-1.5 1.5a.496.496 0 0 1-.706 0l-.5-.5a.5.5 0 0 1 .707-.707l.146.146l1.146-1.146a.5.5 0 0 1 .707.707M10.5 11H9a.5.5 0 0 1 0-1h1.5a.5.5 0 0 1 0 1m0-4H9a.5.5 0 0 1 0-1h1.5a.5.5 0 0 1 0 1"
      ></path>
    </svg>
  );
}