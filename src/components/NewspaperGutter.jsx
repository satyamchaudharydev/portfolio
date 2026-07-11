export default function NewspaperGutter({ className }) {
  return (
    <div
      className={`newspaper-gutter z-0 pointer-events-none absolute bottom-0 left-0 top-0 opacity-40 hidden min-[720px]:block ${className || ""}`}
      aria-hidden="true"
    />
  );
}
