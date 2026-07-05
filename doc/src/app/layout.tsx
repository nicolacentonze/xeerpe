import { Builder } from "xeerpe"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const xeerpeBackground = new Builder()
      .linearGradient({ from: 'rgba(0,255,140,0.08)', to: 'transparent', direction: 'to right', size: '1px', backgroundSize: '32px 32px' })
      .linearGradient({ from: 'rgba(0,255,140,0.08)', to: 'transparent', direction: 'to bottom', size: '1px', backgroundSize: '32px 32px' })
      .radialGradient({ from: 'rgba(0,255,140,0.12)', to: 'transparent', size: 'closest-side'})
      .linearGradient({ from: '#050705', to: '#0a0f0a', angle: '135deg' })
      .toStyle()

  return (
    <html lang="en" style={{height: '100%', width: '100%', ...xeerpeBackground
    }}>
      <body>{children}</body>
    </html>
  );
}