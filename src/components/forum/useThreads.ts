import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase/client"; // Ensure correct import

// If the module does not exist, create it at the specified path
// Create a file at /Users/xtaxadvisors/Desktop/giba/src/supabaseClient.ts with the following content:

// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

// export const supabase = createClient(supabaseUrl, supabaseKey);

export function useThreads() {
  const [threads, setThreads] = useState<
    {
      id: number;
      title: string;
      content: string;
      isPinned: boolean;
      createdAt: string; // Use string because Supabase returns timestamps as strings
      replies: number;
      likes: number;
      tags: string[];
      author: {
        avatarUrl: string;
        displayName: string;
        location: string;
      };
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Fetch Threads from Supabase
  useEffect(() => {
    async function fetchThreads() {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("threads")
        .select("id, title, content, isPinned, created_at, replies, likes, tags, author:users(avatar_url, display_name, location)")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching threads:", error.message);
      } else {
        setThreads(
          data.map((thread: any) => ({
            id: thread.id,
            title: thread.title,
            content: thread.content,
            isPinned: thread.isPinned,
            createdAt: thread.created_at,
            replies: thread.replies,
            likes: thread.likes,
            tags: thread.tags || [],
            author: {
              avatarUrl: thread.author?.avatar_url || "",
              displayName: thread.author?.display_name || "Unknown",
              location: thread.author?.location || "Unknown",
            },
          }))
        );
      }
      setIsLoading(false);
    }

    fetchThreads();
  }, []);

  // ✅ Function to Create a Thread
  async function createThread(title: string, content: string, userId: string) {
    const { data, error } = await supabase.from("threads").insert([
      {
        title,
        content,
        user_id: userId,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Error creating thread:", error.message);
      return null;
    }

    // Refresh the thread list after creation
    if (data) {
      setThreads((prevThreads) => [data[0], ...prevThreads]);
    }
    return data ? data[0] : null;
  }

  return { threads, isLoading, createThread };
}