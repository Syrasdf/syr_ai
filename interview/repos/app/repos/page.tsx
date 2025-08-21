import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { type Repo } from "@/app/types/repo";

export default async function ReposPage() {
  // 在服务器端获取数据
  // const result = await fetch('/api/repos')
  // const repos = result.json();
  // console.log(repos);
  const response = await fetch('https://api.github.com/users/Syrasdf/repos', { cache: 'no-store' });
  const repos: Repo[] = await response.json();
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Github Repos</h1>
      <Card>
        <CardHeader>
          <CardTitle>Repos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {repos.map((repo) => (
              <div key={repo.id} className="p-3 border rounded">
                <div className="flex items-center justify-between">
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="font-medium">{repo.name}</a>
                  <span className="text-sm text-gray-500">★ {repo.stargazers_count}</span>
                </div>
                {repo.description && (
                  <p className="text-sm text-gray-600 mt-1">{repo.description}</p>
                )}
                <div className="text-xs text-gray-500 mt-1">
                  {repo.language || 'Unknown'} · Updated {new Date(repo.updated_at).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  )
}