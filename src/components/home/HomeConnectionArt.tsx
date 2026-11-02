import { HOME_CONNECTION_ART } from "../../constants/home-connection-art";

/**
 * Decorative "across the world" graphic behind the introduction copy: dashed
 * routes from a home point to distant points, drawn with theme tokens only.
 * Purely presentational; hidden from assistive technology and on small screens.
 */
export function HomeConnectionArt() {
  const { viewBox, origin, routes } = HOME_CONNECTION_ART;
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -right-8 -top-10 hidden h-72 w-[26rem] text-brand-accent opacity-40 lg:block"
      fill="none"
      viewBox={viewBox}
    >
      {routes.map((route) => (
        <path
          className="animate-connection-route stroke-current"
          d={route.path}
          key={route.id}
          strokeDasharray="4 6"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      ))}
      {routes.map((route) => (
        <g key={`${route.id}-point`}>
          <circle className="animate-connection-pulse fill-accent" cx={route.x} cy={route.y} r="7" />
          <circle className="fill-brand" cx={route.x} cy={route.y} r="3" />
        </g>
      ))}
      <circle className="fill-accent/60" cx={origin.x} cy={origin.y} r="10" />
      <circle className="fill-brand" cx={origin.x} cy={origin.y} r="4.5" />
    </svg>
  );
}
