import { Breadcrumb } from "@/components/breadcrumb";
import "./styles.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container max-w-2xl mx-auto px-4 py-16 ">
      <Breadcrumb />
      {children}
    </main>
  );
}
