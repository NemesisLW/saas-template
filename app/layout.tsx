import ClientProvider from "@/components/Providers/ClientProvider";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import FirebaseAuthProvider from "@/components/Providers/FirebaseAuthProvider";

export const metadata = {
  title: "SaaS Template",
  description: "Starter Repo for App Ideas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <FirebaseAuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
            </ThemeProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProvider>
  );
}
