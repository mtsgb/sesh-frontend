// Rename file to EventsGridModel.tsx if it contains JSX
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Post } from './EventsGridType';


export default function EventsGridModel() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const API_BASE = (globalThis as any).process?.env?.REACT_APP_API_URL ?? 'http://localhost:1337';

    useEffect(() => {
        let mounted = true;

        async function load() {
            try {
                const res = await axios.get(`${API_BASE}/api/posts?populate=cover`);
                if (!mounted) return;
                setPosts(res.data?.data ?? []);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                if (!mounted) return;
                setError(err.message ?? 'Erro ao carregar posts');
            } finally {
                if (mounted) setLoading(false);
            }
        }

        load();
        return () => { mounted = false; };
    }, [API_BASE]);

    return {
        posts,
        loading,
        error,
    };
}