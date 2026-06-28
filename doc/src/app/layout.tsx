export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ background: "#2e2e2e" }}>
      <body>{children}</body>
    </html>
  );
}