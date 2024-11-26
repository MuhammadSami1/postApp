export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1100px] flex-col border-l border-r bg-white">
      {children}
    </div>
  );
}
