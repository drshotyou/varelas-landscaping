import '~/styles/globals.css';
import { Quattrocento } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const quattrocentoFont = Quattrocento({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Varelas Landscaping',
  description: 'Landscaping services for your outdoor space',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${quattrocentoFont.className}`}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Landscaping services for your outdoor space" />
        <meta name="keywords" content="landscaping, garden, outdoor space, lawn care" />
        <meta name="author" content="Varelas Landscaping" />
        <link rel="icon" href="/favicon.ico" />
        <title>Varelas Landscaping</title>

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Varelas Landscaping" />
        <meta property="og:description" content="Landscaping services for your outdoor space" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.varelaslandscaping.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Varelas Landscaping" />
        <meta name="twitter:description" content="Landscaping services for your outdoor space" />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Head>
      <body className="scrollbar-thin">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-primary text-base-100 w-full">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </label>
              </div>
              <div className="mx-2 flex-1 px-2 text-xl md:text-2xl lg:text-4xl">Varela&apos;s Landscaping</div>
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                  <li>
                    <Link href="https://www.facebook.com/varela.s.landscaping.2024" target="_blank">
                      <div className="flex flex-row justify-center items-center w-full">
                        <Image src="/logo/logo-facebook-white.svg" width={48} height={48} alt="facebook logo" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/varelaslanscapingllc/" target="_blank">
                      <div className="flex flex-row justify-center items-center w-full">
                        <Image src="/logo/logo-instagram-white.svg" width={48} height={48} alt="instagram logo" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <div className="flex flex-row justify-center items-center w-full">
                        <Image src="/logo/google-logo-white.svg" width={48} height={48} alt="Google logo" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Page content here */}
            {children}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              <h2 className="text-3xl text-primary mb-4 text-center">Social Media Platforms</h2>
              <li>
                <Link href="https://www.facebook.com/varela.s.landscaping.2024" target="_blank">
                  <div className="flex flex-row justify-center items-center w-full">
                    <Image src="/logo/logo-facebook.svg" width={48} height={48} alt="facebook logo" />
                    <h3 className="ml-4 text-primary text-2xl"> Facebook </h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/varelaslanscapingllc/" target="_blank">
                  <div className="flex flex-row justify-center items-center w-full">
                    <Image src="/logo/logo-instagram.svg" width={48} height={48} alt="instagram logo" />
                    <h3 className="ml-4 text-primary text-2xl"> Instagram </h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="">
                  <div className="flex flex-row justify-center items-center w-full">
                    <Image src="/logo/google.svg" width={48} height={48} alt="Google logo" />
                    <h3 className="ml-4 text-primary text-2xl">Google</h3>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
