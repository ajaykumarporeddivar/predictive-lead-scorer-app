import { USERS, ACCOUNTS, LEADS, STATS } from '@/lib/data';

export async function GET(): Promise<Response> {
  const entityName = 'leads';
  const data = LEADS;
  return new Response(JSON.stringify({
    ok: true,
    data: {
      [entityName]: data,
      stats: STATS,
      total: data.length,
    },
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  return new Response(JSON.stringify({
    ok: true,
    message: 'Demo mode — data not persisted',
    received: body,
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
  })
}