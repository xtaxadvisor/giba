import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../lib/supabase/client"; // Ensure correct import

// ✅ Define Type for a Single Thread
interface Thread {
  id: number;
  title: string;
  content: string;
  isPinned: boolean;
  createdAt: string;
  replies: number;
  likes: number;
  tags: string[];
  author: {
    avatarUrl: string;
    displayName: string;
    location: string;
  };
}

// ✅ Custom Hook for Fetching and Managing Threads
export function useThreads() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Fetch Threads from Supabase
  useEffect(() => {
    async function fetchThreads() {
      setIsLoading(true);
      setError(null);
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
            id: thread.id,
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
        setError("Failed to load threads. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchThreads();
  }, []);

  // ✅ Function to Create a New Thread (Optimized)
  const createThread = useCallback(
    async (title: string, content: string, userId: string) => {
      try {
        const { data, error } = await supabase
          .from("threads")
          .insert([
            {
              title,
              content,
              user_id: userId,
              created_at: new Date().toISOString(),
            },
          ])
          .select("*"); // ✅ Ensure the inserted row is returned

        if (error) throw error;

        if (data && data.length > 0) {
          setThreads((prevThreads) => [data[0], ...prevThreads]);
          return data[0];
        }
      } catch (error) {
        console.error("Error creating thread:", error);
        return null;
      }
    },
    []
  );

  return { threads, isLoading, error, createThread };
}