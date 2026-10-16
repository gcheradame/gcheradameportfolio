import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Gregory Cheradame | Enterprise Architecture & SAP',description:'Enterprise architecture, SAP transformation and systems integration portfolio of Gregory Cheradame.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
