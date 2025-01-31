import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import Image from "next/image";
import { SplitLayout } from "@/components/split-layout";
import { ArticleCards } from "@/components/article-expand";
import { ContactForm } from "@/components/contact-form";

export default async function Project() {
  try {
    const posts = await fetchPages();

    console.log("The posts loaded are: ", posts);
    console.log("The post cover object is: ", posts.results[1]?.cover);

    console.log("Finding thumbnail of a post: ", posts.results[1]);
    return (
      <div>
        <SplitLayout section="POSTS">
          <ArticleCards posts={posts} className="max-w-2xl" />
        </SplitLayout>
        <section id="contact">
          <SplitLayout section="CONTACT">
            <ContactForm />
          </SplitLayout>
        </section>
      </div>
    );
  } catch (error) {
    console.log("Detailed error:", error);
    throw error;
  }
}
