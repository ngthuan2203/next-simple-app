import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const HeadNext = Head as any;
  const ScriptN = NextScript as any;
  return (
    <Html translate="no">
      <HeadNext>
      </HeadNext>
      <body>
        <Main />
        <ScriptN />
      </body>
    </Html>
  );
}
