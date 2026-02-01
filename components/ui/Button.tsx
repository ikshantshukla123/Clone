export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="
        font-heading
        text-[16px]
        text-ink
        border border-ink
        px-btnX py-btnY
        uppercase
        tracking-wide
        inline-flex items-center gap-2
      "
    >
      {children}
    </button>
  );
}
