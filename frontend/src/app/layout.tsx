import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { TaskManagerStoreProvider } from "./_providers/task-manager-store-provider";

export const metadata: Metadata = {
  title: "Kanban task management web app",
  description: "Yatma - Yet another task management app!",
  icons: [{ url: "/images/favicon-32x32.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-light-grey-light-bg dark:bg-dark-grey-dark-bg font-body">
        <TaskManagerStoreProvider>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </TaskManagerStoreProvider>
      </body>
    </html>
  );
}
