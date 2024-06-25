import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import { Footer } from './../components/footer/index';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-8">
        {children}
      </main>
      <div className="container mx-auto max-w-7xl">
     <Footer/>
      </div>
    </div>
  );
}
