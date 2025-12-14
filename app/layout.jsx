
import './globals.css';

export const metadata = {
  title: 'Neeraj Kumar | Full Stack Developer',
  description: 'Professional Full Stack Developer Portfolio'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
