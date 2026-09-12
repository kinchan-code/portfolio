interface SectionHeadingProps {
  id: string;
  children: React.ReactNode;
}

export function SectionHeading({ id, children }: Readonly<SectionHeadingProps>) {
  return (
    <h2
      id={id}
      className="text-lg font-bold uppercase tracking-wide lg:pl-6"
    >
      {children}
    </h2>
  );
}
