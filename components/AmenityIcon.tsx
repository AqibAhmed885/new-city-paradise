type IconName =
  | "shield"
  | "bolt"
  | "road"
  | "drop"
  | "flame"
  | "signal"
  | "store"
  | "book"
  | "cross"
  | "spark";

export default function AmenityIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    shield: <path d="M12 3 5 6v5c0 4.8 2.9 8.4 7 10 4.1-1.6 7-5.2 7-10V6l-7-3Zm-3 9 2 2 4-4" />,
    bolt: <path d="m13 2-7 12h6l-1 8 7-13h-6l1-7Z" />,
    road: <path d="m9 22 2-20m4 20-2-20M4 22 9 2m11 20L15 2M12 5v3m0 3v3m0 3v3" />,
    drop: <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Zm-3 13a3 3 0 0 0 3 3" />,
    flame: <path d="M12 22a7 7 0 0 0 7-7c0-5-4-7-4-11-3 2-5 5-4 9-2-1-3-3-3-4-2 2-3 4-3 6a7 7 0 0 0 7 7Z" />,
    signal: <path d="M5 12.6a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 20h.01M2 9a15 15 0 0 1 20 0" />,
    store: <path d="M4 10v10h16V10M3 10l2-6h14l2 6M3 10a3 3 0 0 0 5 2 3 3 0 0 0 4 0 3 3 0 0 0 4 0 3 3 0 0 0 5-2M9 20v-5h6v5" />,
    book: <path d="M4 5a3 3 0 0 1 3-2h5v17H7a3 3 0 0 0-3 2V5Zm16 0a3 3 0 0 0-3-2h-5v17h5a3 3 0 0 1 3 2V5Z" />,
    cross: <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z" />,
    spark: <path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Zm7 14 .5 2.5L22 19l-2.5.5L19 22l-.5-2.5L16 19l2.5-.5L19 16Z" />,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
