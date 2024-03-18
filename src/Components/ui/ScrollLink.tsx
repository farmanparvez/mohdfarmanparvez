// "use client"
// import { Link } from 'react-scroll';
// import React, { useRef } from 'react';

// type ScrollLinkProps = {
//   children: React.ReactNode;
//   to?: string;
//   activeClassName?: string;
//   spy?: boolean;
//   smooth?: boolean;
//   offset?: number;
//   duration?: number;
// };

// export default function ScrollLink({
//   children,
//   to,
//   activeClassName,
//   spy,
//   smooth,
//   offset,
//   duration,
// }: ScrollLinkProps) {
//   const target = useRef(null);

//   return (
//     <Link
//       to={to}
//       spy={spy}
//       smooth={smooth}
//       offset={offset}
//       duration={duration}
//       className={activeClassName}
//       containerId="scroll-container" // Replace with your actual container ID
//       ref={target}
//     >
//       {children}
//     </Link>
//   );
// }
