import { USERS, ACCOUNTS, LEADS } from '@/lib/data';

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || '';
  const type = url.searchParams.get('type');
  const results = [];

  const entities = [...USERS, ...ACCOUNTS, ...LEADS];

  if (query.trim() === '') {
    results = entities.slice(0, 5);
  } else {
    for (const entity of entities) {
      if (entity.name.toLowerCase().includes(query.toLowerCase()) ||
        entity.title.toLowerCase().includes(query.toLowerCase())) {
        results.push(entity);
      }
    }
  }

  const maxResults = 20;
  const total = results.length;
  results = results.slice(0, maxResults);

  return new Response(JSON.stringify({
    ok: true,
    data: {
      results,
      total,
      query,
    },
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}