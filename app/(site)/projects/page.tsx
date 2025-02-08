import { fetchPageBlocks, fetchPages } from "@/lib/notion";
import { SplitLayout } from "@/components/split-layout";
import { ArticleCards } from "@/components/article-expand";
import { ContactForm } from "@/components/contact-form";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { calculateReadingTime } from "@/lib/reading-time-client";

export const metadata = {
  title: `My Projects`,
  description: "Find my recent projects and blog posts on this page.",
};

export default async function Project() {
  const posts = await fetchPages();
  const enhancedPosts = await Promise.all(
    posts.map(async (post: { id: string }) => {
      const blocks = await fetchPageBlocks(post.id);
      const text = blocks
        .map((block: { paragraph: { rich_text: { plain_text: any }[] } }) => {
          if ("paragraph" in block && block.paragraph?.rich_text?.[0]) {
            return block.paragraph.rich_text[0].plain_text;
          }
          return "";
        })
        .join(" ");

      return {
        ...post,
        readingTime: calculateReadingTime(text),
      };
    })
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <SplitLayout section="PROJECTS">
        <div className="flex p-3 gap-3">
          <Card className="w-1/2">
            <CardTitle className="flex flex-col space-y-1.5 p-6">
              Email List Cleaner
            </CardTitle>
            <CardContent>Coming soon</CardContent>
          </Card>
          <Card className="w-1/2">
            <CardTitle className="flex flex-col space-y-1.5 p-6">
              Bulk Email Sender
            </CardTitle>
            <CardContent>Coming soon</CardContent>
          </Card>
        </div>
      </SplitLayout>

      <SplitLayout section="POSTS">
        <ArticleCards posts={enhancedPosts} />
      </SplitLayout>

      <SplitLayout section="CONTACT">
        <ContactForm />
      </SplitLayout>
    </div>
  );
}
