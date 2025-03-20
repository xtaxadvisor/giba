import { useState, useEffect } from "react.js";
import { supabase } from "../lib/supabase/supabaseClient.js"; 
import type { Thread } from "../types/threads.js"; // ✅ Ensure correct type import

export function useThreads() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchThreads() {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("threads")
          .select(
            `id, title, content, isPinned, created_at, replies, likes, tags, 
             author:users(avatar_url, display_name, location)`
          )
          .order("created_at", { ascending: false });

        if (error) throw error;

        setThreads(
          data.map((thread: any) => ({
            id: String(thread.id), // ✅ Convert to string
            title: thread.title,
            content: thread.content,
            isPinned: thread.isPinned,
            createdAt: thread.created_at,
            replies: thread.replies ?? 0,
            likes: thread.likes ?? 0,
            tags: thread.tags ?? [],
            author: {
              avatarUrl: thread.author?.avatar_url || "",
              displayName: thread.author?.display_name || "Unknown",
              location: thread.author?.location || "Unknown",
            },
          }))
        );
      } catch (error) {
        console.error("Error fetching threads:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchThreads();
  }, []);

  return { threads, isLoading };
}