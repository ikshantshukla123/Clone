export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-375 mx-auto px-[4vw]">
      {children}
    </div>
  );
}
