import { fetchPages } from "@/lib/notion";
import { SplitLayout } from "@/components/split-layout";
import { ArticleCards } from "@/components/article-expand";
import { ContactForm } from "@/components/contact-form";
import { Card, CardTitle, CardContent } from "@/components/ui/card";

interface Post {
  id: string;
  properties: any;
  cover: {
    type: string;
    external: {
      url: string;
    };
  };
  [key: string]: any;
}

interface Posts {
  results: Post[];
}

export default async function Project() {
  try {
    const rawPosts = await fetchPages();
    const posts: Posts = {
      results: rawPosts.results.map((post: any) => ({
        ...post,
        cover:
          post.cover?.type === "external"
            ? post.cover
            : { external: { url: "" } },
      })),
    };

    return (
      <div>
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
          <ArticleCards posts={posts} />
        </SplitLayout>
        <SplitLayout section="CONTACT">
          <ContactForm />
        </SplitLayout>
      </div>
    );
  } catch (error) {
    console.log("Detailed error:", error);
    throw error;
  }
}
