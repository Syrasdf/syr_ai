import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = await fetch('https://api.github.com/users/octocat/repos');
  const data = await response.json();
  return NextResponse.json(data.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
  })));
}


export async function POST(request: Request) {
  const data = await request.json();
  const newRepo = {
    id: data.id,
    name: data.name,
    description: data.description,
    url: data.html_url,
  }
  return NextResponse.json(newRepo);
}
