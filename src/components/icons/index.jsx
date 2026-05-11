export function TweetIcon({ className = "", title, ...props }) {
  return (
    <svg
      viewBox="0 0 50 50"
      className={className}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M50.0625 10.4375C48.2148 11.2578 46.2344 11.8086 44.1523 12.0586C46.2773 10.7852 47.9102 8.76953 48.6758 6.37109C46.6914 7.54688 44.4844 8.40234 42.1445 8.86328C40.2695 6.86328 37.5977 5.61719 34.6406 5.61719C28.9609 5.61719 24.3555 10.2188 24.3555 15.8984C24.3555 16.7031 24.4492 17.4883 24.625 18.2422C16.0781 17.8125 8.50391 13.7188 3.42969 7.49609C2.54297 9.01953 2.03906 10.7852 2.03906 12.668C2.03906 16.2344 3.85156 19.3828 6.61328 21.2305C4.92578 21.1758 3.33984 20.7109 1.95312 19.9414C1.95312 19.9844 1.95312 20.0273 1.95312 20.0703C1.95312 25.0547 5.5 29.207 10.1992 30.1562C9.33984 30.3906 8.42969 30.5156 7.49219 30.5156C6.82812 30.5156 6.18359 30.4531 5.55469 30.3281C6.86719 34.4102 10.6641 37.3906 15.1602 37.4727C11.6445 40.2305 7.21094 41.8711 2.39062 41.8711C1.55859 41.8711 0.742188 41.8242 -0.0585938 41.7266C4.48828 44.6484 9.89453 46.3477 15.7031 46.3477C34.6172 46.3477 44.9609 30.6797 44.9609 17.0938C44.9609 16.6484 44.9492 16.1992 44.9336 15.7617C46.9414 14.3125 48.6836 12.5 50.0625 10.4375Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function RoughRoundedRectIcon({
  className = "",
  stroke = "#17120F",
  ...props
}) {
  return (
    <svg
      viewBox="0 0 640 180"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M18 18 C82 10, 168 15, 238 13 C328 10, 428 16, 622 14 C627 46, 624 86, 626 122 C628 150, 622 163, 612 166 C512 172, 392 164, 308 168 C212 172, 96 166, 20 168 C13 134, 18 82, 15 48 C13 30, 14 22, 18 18Z"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M22 20 C96 16, 170 20, 250 18 C348 15, 482 19, 618 18 C620 52, 617 96, 620 132 C622 152, 615 162, 604 164 C488 166, 380 160, 288 164 C196 168, 84 160, 24 164 C19 122, 22 78, 20 42 C19 30, 20 24, 22 20Z"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M28 22 C110 16, 198 25, 286 20 C390 15, 506 24, 610 20"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.55"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M28 162 C126 156, 218 166, 326 161 C430 156, 520 166, 604 161"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.6"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M17 32 C12 58, 20 86, 16 112 C13 134, 16 150, 21 164"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M620 26 C627 56, 618 88, 623 118 C627 142, 620 158, 610 166"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function RibbonEndIcon({
  className = "",
  side = "left",
  fill = "currentColor",
  ...props
}) {
  const isRight = side === "right";

  return (
    <svg
      viewBox="0 0 64 84"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d={
          isRight
            ? "M10 8 L44 0 L40 18 L64 42 L40 66 L44 84 L10 76 L18 42 Z"
            : "M54 8 L20 0 L24 18 L0 42 L24 66 L20 84 L54 76 L46 42 Z"
        }
        fill={fill}
      />
    </svg>
  );
}
