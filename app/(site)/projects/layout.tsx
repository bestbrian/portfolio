import { Breadcrumb } from "@/components/breadcrumb";
import "./styles.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="py-16">
      <Breadcrumb />
      {children}
    </main>
  );
}
