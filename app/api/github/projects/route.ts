import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

const GITHUB_USERNAME = 'Orbasker'; // Your GitHub username
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Your GitHub personal access token

export interface GitHubRepo {
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    created_at: string;
    updated_at: string;
}

export async function GET() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch repositories: ${response.statusText}`);
        }

        const repositories: GitHubRepo[] = await response.json() as GitHubRepo[];
        const projects = repositories.map((repo: GitHubRepo) => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            image: null, // Placeholder for project image if any
        }));

        return NextResponse.json({ projects });
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return NextResponse.json({ error: 'Error fetching repositories' }, { status: 500 });
    }
}
