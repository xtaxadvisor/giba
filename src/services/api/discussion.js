import { db } from '../../lib/firebase';
import { collection, query, where, orderBy, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
export const discussionService = {
    async getThreads(filters) {
        try {
            const threadsCollection = collection(db, 'threads');
            let q = query(threadsCollection);
            if (filters?.category) {
                q = query(q, where('category', '==', filters.category));
            }
            if (filters?.location) {
                q = query(q, where('location', '==', filters.location));
            }
            if (filters?.tags) {
                q = query(q, where('tags', 'array-contains-any', filters.tags));
            }
            // Add sorting based on filter preferences
            if (filters?.sortBy) {
                switch (filters.sortBy) {
                    case 'popular':
                        q = query(q, orderBy('likes', 'desc'));
                        break;
                    case 'unanswered':
                        q = query(q, where('replies', '==', 0));
                        break;
                    case 'recent':
                        q = query(threadsCollection, orderBy('createdAt', 'desc'));
                        break;
                }
            }
            const snapshot = await getDocs(q);
            return snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
        }
        catch (error) {
            console.error('Error fetching threads:', error);
            throw error;
        }
    },
    async createThread(threadData) {
        try {
            const now = new Date().toISOString();
            const thread = {
                ...threadData,
                createdAt: now,
                updatedAt: now,
                likes: 0,
                replies: 0,
                isPinned: false
            };
            const docRef = await addDoc(collection(db, 'threads'), thread);
            return {
                id: docRef.id,
                ...thread
            };
        }
        catch (error) {
            console.error('Error creating thread:', error);
            throw error;
        }
    },
    async updateThread(id, updates) {
        try {
            const threadRef = doc(db, 'threads', id);
            await updateDoc(threadRef, {
                ...updates,
                updatedAt: new Date().toISOString()
            });
        }
        catch (error) {
            console.error('Error updating thread:', error);
            throw error;
        }
    },
    async deleteThread(id) {
        try {
            await deleteDoc(doc(db, 'threads', id));
        }
        catch (error) {
            console.error('Error deleting thread:', error);
            throw error;
        }
    }
};
