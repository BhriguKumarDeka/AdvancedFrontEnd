import {useState} from 'react';
import apiClient from '../../core/api/client';
import Button from '../../components/ui/Button';

export default function DashboardPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async()=>{
    setLoading(true);
    try{
      const res = await apiClient.get('/posts?_limit=5');
      setData(res.data);
    } catch (err) {
      console.error('Failed to fetch dashboard data', err);
    } finally {
      setLoading(false);
    }
  };

  return(
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h2 className = "text-2xl font-bold">Lab Analytics</h2>
        <Button onClick = {fetchData} isLoading={loading}>
          Refresh Data
        </Button>
      </header>

      <div className="grid gap-4">
        {data.map(post =>(
          <div key={post.id} 
          className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
            <h3 className="font-medium text-zinc-100">{post.title}</h3>
            <p className="text-sm text-zinc-500 mt-1">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}