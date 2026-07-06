import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import LoginPage from './LoginPage'

export default function AuthGate({ children }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <div style={styles.centered}>
        <p>Loading...</p>
      </div>
    )
  }

  if (!session) {
    return <LoginPage />
  }

  const user = session.user
  const verified = !!user.email_confirmed_at || !!user.confirmed_at

  if (!verified) {
    return (
      <div style={styles.centered}>
        <div style={styles.card}>
          <h2 style={{ marginTop: 0 }}>Verify your email</h2>
          <p>
            We sent a verification link to <strong>{user.email}</strong>. Please
            click the link in that email to activate your account, then reload this
            page.
          </p>
          <button style={styles.button} onClick={() => window.location.reload()}>
            I've verified, reload
          </button>
          <button
            style={{ ...styles.button, background: '#eee', color: '#333', marginLeft: 8 }}
            onClick={() => supabase.auth.signOut()}
          >
            Sign out
          </button>
        </div>
      </div>
    )
  }

  return children
}

const styles = {
  centered: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
  },
  card: {
    maxWidth: 480,
    background: '#fff',
    padding: '2rem',
    borderRadius: 12,
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },
  button: {
    padding: '0.6rem 1.2rem',
    background: '#4a6bd0',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: '1rem',
  },
}
