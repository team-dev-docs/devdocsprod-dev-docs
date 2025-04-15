import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { IconFileDescription } from "@tabler/icons-react";
import aiConfig from "@site/ai.json";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import Markdown from "react-markdown";
import BrowserOnly from '@docusaurus/BrowserOnly';
import { AUTH_CONFIG } from "../config/auth.ts"

function DocSummaryContent({ content }) {
  if (!aiConfig.github_features) {
    return null;
  }
  //
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const getSummary = async () => {
    const token = localStorage.getItem("github_token");
    if (!token) {
      alert("Please sign in to use the summarization feature");
      return;
    }

    setLoading(true);
    try {
      const htmlContent = document.querySelector(".markdown")?.outerHTML;
      

      const page = await unified()
        .use(rehypeParse) // Parse HTML content to a syntax tree
        .use(rehypeRemark) // Turn HTML syntax tree to markdown syntax tree
        .use(remarkGfm)
        .use(remarkStringify) // Serialize markdown syntax tree
        .process(htmlContent);

      let pageContent = String(page);

      //setSummary(markdownContent);

      const myHeaders = new Headers();
      myHeaders.append("X-GitHub-Token", token);
      myHeaders.append("Content-Type", "application/json");

      

      const raw = JSON.stringify({
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that can summarize documentation pages into bullet point format.  Please do not include any other text in your response.",
          },
          {
            role: "user",
            content: `Can you create bullet point summary of this documentation page, and return it in markdown format with no other text: ${pageContent}`,
          },
        ],
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      let data = await fetch(
        `${AUTH_CONFIG.interactiveDocsBaseUrl}/copilot/chat/completions`,
        requestOptions
      );
      let aiData = await data.json();
      
      setSummary(aiData.choices[0].message.content);
      setLoading(false);
      // Rest of your code...
    } catch (error) {
      console.error("Summarization error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="my-4">
      <Button
        onClick={getSummary}
        disabled={loading}
        variant="outline"
        type="button"
        className="flex items-center gap-2"
      >
        <IconFileDescription className="w-4 h-4" />
        {loading ? "Generating Summary..." : "Get Summary"}
      </Button>

      {summary && (
        <Card className="mt-4">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Summary</h3>
            <Markdown>{summary}</Markdown>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default function DocSummary(props) {
  return (
    <BrowserOnly>
      {() => <DocSummaryContent {...props} />}
    </BrowserOnly>
  );
}
