const Seperator = ({ className = "", variant = "decorative" }) => {
  if (variant === "normal") {
    return <div className={`mt-4 h-px w-full bg-[rgba(36,29,22,0.66)] ${className}`} aria-hidden="true" />;
  }

  return (
    <div className={`mt-4 flex items-center gap-[0.72rem] ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-[rgba(36,29,22,0.66)]" />
      <span className="h-px flex-1 bg-[repeating-linear-gradient(90deg,rgba(50,40,31,0.6)_0_4px,transparent_4px_9px)]" />
      <span className="text-[1.44rem] leading-none text-[rgba(31,25,18,0.8)]">✦</span>
      <span className="h-px flex-1 bg-[repeating-linear-gradient(90deg,rgba(50,40,31,0.6)_0_4px,transparent_4px_9px)]" />
      <span className="h-px flex-1 bg-[rgba(36,29,22,0.66)]" />
    </div>
  );
};

export default Seperator;
