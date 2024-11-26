import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { TitleComponent } from '@/components';

const config = {
  h1: ({ children }) => (
    <TitleComponent
      className="mb-7 text-primary-3 lg:text-h1-md"
      tag="h1"
      hasBarDecorator={false}
      hasDotDecorator={false}
    >
      {children}
    </TitleComponent>
  ),
  h2: ({ children }) => (
    <TitleComponent
      className="mb-7 text-primary-3 lg:text-h2-md"
      tag="h2"
      hasBarDecorator={false}
      hasDotDecorator={false}
    >
      {children}
    </TitleComponent>
  ),
  h3: ({ children }) => (
    <TitleComponent
      className="mb-7 text-primary-3 lg:text-h3-md"
      tag="h3"
      hasBarDecorator={false}
      hasDotDecorator={false}
    >
      {children}
    </TitleComponent>
  ),
  h4: ({ children }) => (
    <TitleComponent
      className="mb-7 text-primary-3 lg:text-h3-md"
      tag="h4"
      hasBarDecorator={false}
      hasDotDecorator={false}
    >
      {children}
    </TitleComponent>
  ),
  h5: ({ children }) => (
    <TitleComponent
      className="mb-7 text-primary-3 lg:text-h3-md"
      tag="h5"
      hasBarDecorator={false}
      hasDotDecorator={false}
    >
      {children}
    </TitleComponent>
  ),
  h6: ({ children }) => (
    <TitleComponent
      className="mb-7 text-primary-3 lg:text-h3-md"
      tag="h6"
      hasBarDecorator={false}
      hasDotDecorator={false}
    >
      {children}
    </TitleComponent>
  ),
  ul: ({ children }) => (
    <ul className="mb-7 list-disc pl-5 text-base-white">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-7 list-decimal pl-5 text-base-white">{children}</ol>
  ),
  li: ({ children }) => <li className="mb-2">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mb-7 border-l-4 border-primary-3 pl-4 text-lg italic text-base-7">
      {children}
    </blockquote>
  ),
  img: ({ alt, src }) => (
    <Image
      className="my-7 h-auto max-w-full rounded-lg"
      src={src}
      alt={alt}
      width={980}
      height={768}
    />
  ),
  a: ({ href, children }) => (
    <a
      className="text-primary-5 hover:underline"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="rounded bg-base-14 p-1">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="block w-full overflow-auto rounded-lg bg-base-16 p-4 text-base-white">
      {children}
    </pre>
  ),
};

interface ContentRendererComponentProps {
  content: string;
}

export function ContentRendererComponent({
  content,
}: ContentRendererComponentProps): JSX.Element {
  return <ReactMarkdown components={config}>{content}</ReactMarkdown>;
}
