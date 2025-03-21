/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
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
          data.map((thread: { id: any; title: any; content: any; isPinned: any; created_at: any; replies: any; likes: any; tags: any; author: { avatar_url: any; display_name: any; location: any; } | null | { avatar_url: any; display_name: any; location: any; }[] }) => ({
            id: String(thread.id), // ✅ Convert to string
            title: thread.title,
            content: thread.content,
            isPinned: thread.isPinned,
            createdAt: thread.created_at, // ✅ Map 'created_at' to 'createdAt'
            replies: thread.replies ?? 0,
            likes: thread.likes ?? 0,
            tags: thread.tags ?? [],
            author: Array.isArray(thread.author) && thread.author.length > 0
              ? {
                  avatarUrl: thread.author[0]?.avatar_url ?? "",
                  displayName: thread.author[0]?.display_name || "Unknown",
                  location: thread.author[0]?.location ?? "Unknown",
                }
              : thread.author
              ? {
                  avatarUrl: !Array.isArray(thread.author) && thread.author ? thread.author.avatar_url || "" : "",
                  displayName: !Array.isArray(thread.author) && thread.author ? thread.author.display_name || "Unknown" : "Unknown",
                  location: !Array.isArray(thread.author) && thread.author ? thread.author.location || "Unknown" : "Unknown",
                }
              : {
                  avatarUrl: "",
                  displayName: "Unknown",
                  location: "Unknown",
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