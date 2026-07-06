// Vercel serverless function example.
// Runs at /api/hello on the Vercel deployment.
//
// Required env vars in Vercel Project Settings > Environment Variables:
//   SUPABASE_URL              = https://YOUR-PROJECT.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY = (secret, from Supabase Project Settings > API)
//   ALLOWED_ORIGIN            = https://mathwithmstan.pages.dev  (or your custom domain)

import { createClient } from '@supabase/supabase-js'

function withCors(res, origin) {
  const allowed = process.env.ALLOWED_ORIGIN || ''
  if (allowed && origin === allowed) {
    res.setHeader('Access-Control-Allow-Origin', allowed)
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  }
}

export default async function handler(req, res) {
  withCors(res, req.headers.origin)
  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  const authHeader = req.headers.authorization || ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null
  if (!token) {
    res.status(401).json({ error: 'Missing bearer token' })
    return
  }

  // Server-side Supabase client with the service_role key.
  // NEVER expose SUPABASE_SERVICE_ROLE_KEY to the browser.
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { data: userData, error: userErr } = await supabase.auth.getUser(token)
  if (userErr || !userData?.user) {
    res.status(401).json({ error: 'Invalid session' })
    return
  }
  const email = userData.user.email || ''
  if (!email.toLowerCase().endsWith('@cashmere.school.nz')) {
    res.status(403).json({ error: 'Not a Cashmere account' })
    return
  }

  res.status(200).json({
    ok: true,
    message: 'Hello ' + email,
    userId: userData.user.id,
  })
}
