import { ComponentProps } from 'react';

interface AdminContentWrapperHeaderComponentProps
  extends ComponentProps<'header'> {
  title: string;
  children?: React.ReactNode;
}

export function AdminContentWrapperHeaderComponent({
  title,
  children,
}: AdminContentWrapperHeaderComponentProps): JSX.Element {
  return (
    <header className="grid p-5">
      <h1 className="mb-3 border-b border-base-14 pb-2 font-semibold uppercase tracking-wide text-base-white">
        {title}
      </h1>
      {children}
    </header>
  );
}

interface AdminContentWrapperSectionComponentProps
  extends ComponentProps<'section'> {
  children: React.ReactNode;
}

export function AdminContentWrapperSectionComponent({
  children,
}: AdminContentWrapperSectionComponentProps): JSX.Element {
  return <section className="grid px-5 pb-5">{children}</section>;
}
