import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "../lib/utils"
const inter = Inter({ subsets: ["latin"] })
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
export const metadata: Metadata = {
  title: "DMV Translator System",
  description: "System to translate DMV documents",
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={
//           (inter.className,
//           cn("min-h-screen bg-background font-sans antialiased"))
//         }
//       >
//         <Header />
//         {children}
//       </body>
//     </html>
//   )
// }

// export default function RootLayout({ children }: RootLayoutProps) {
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
