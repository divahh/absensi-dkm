import '@/app/ui/globals.css';

export const metadata = {
    manifest: "/manifest.json",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <meta name="theme-color" content="#1976d2" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Absensi" />
            </head>
            <body>{children}</body>
        </html>
    )
}