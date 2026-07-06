import { useState } from 'react'
import { supabase, isAllowedEmail, ALLOWED_EMAIL_DOMAIN } from '../lib/supabase'

export default function LoginPage() {
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')

  async function handleSignIn(e) {
    e.preventDefault()
    setError('')
    setInfo('')
    if (!isAllowedEmail(email)) {
      setError('Only @' + ALLOWED_EMAIL_DOMAIN + ' email addresses are allowed.')
      return
    }
    setBusy(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })
    setBusy(false)
    if (error) setError(error.message)
  }

  async function handleSignUp(e) {
    e.preventDefault()
    setError('')
    setInfo('')
    if (!isAllowedEmail(email)) {
      setError('Only @' + ALLOWED_EMAIL_DOMAIN + ' email addresses are allowed.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    setBusy(true)
    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo: window.location.origin + '/',
      },
    })
    setBusy(false)
    if (error) setError(error.message)
    else setInfo('Check your Cashmere school email for a verification link.')
  }

  async function handleReset() {
    setError('')
    setInfo('')
    if (!isAllowedEmail(email)) {
      setError('Enter your @' + ALLOWED_EMAIL_DOMAIN + ' email first, then click Reset password.')
      return
    }
    setBusy(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: window.location.origin + '/',
    })
    setBusy(false)
    if (error) setError(error.message)
    else setInfo('Password reset email sent (check your inbox).')
  }

  const isSignUp = mode === 'signup'
  const submit = isSignUp ? handleSignUp : handleSignIn

  return (
    <div style={styles.centered}>
      <form style={styles.card} onSubmit={submit}>
        <h2 style={{ marginTop: 0 }}>Maths with Ms Tan</h2>
        <p style={styles.subtitle}>Sign in with your Cashmere school email.</p>

        <label style={styles.label}>
          School email
          <input
            style={styles.input}
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={'yourname@' + ALLOWED_EMAIL_DOMAIN}
            required
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            style={styles.input}
            type="password"
            autoComplete={isSignUp ? 'new-password' : 'current-password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={isSignUp ? 8 : undefined}
            required
          />
        </label>

        {error && <p style={styles.error}>{error}</p>}
        {info && <p style={styles.info}>{info}</p>}

        <button type="submit" style={styles.primary} disabled={busy}>
          {busy ? 'Please wait...' : isSignUp ? 'Create account' : 'Sign in'}
        </button>

        <div style={styles.row}>
          <button
            type="button"
            style={styles.link}
            onClick={() => {
              setMode(isSignUp ? 'signin' : 'signup')
              setError('')
              setInfo('')
            }}
          >
            {isSignUp ? 'Already have an account? Sign in' : 'New here? Create an account'}
          </button>
          {!isSignUp && (
            <button type="button" style={styles.link} onClick={handleReset}>
              Forgot password?
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

const styles = {
  centered: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    background: 'linear-gradient(135deg, #f5f7ff 0%, #eef2ff 100%)',
  },
  card: {
    width: '100%',
    maxWidth: 420,
    background: '#fff',
    padding: '2rem',
    borderRadius: 12,
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
  },
  subtitle: { margin: 0, color: '#666', fontSize: '0.95rem' },
  label: { display: 'flex', flexDirection: 'column', gap: 4, fontSize: '0.9rem' },
  input: {
    padding: '0.6rem 0.75rem',
    borderRadius: 8,
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  primary: {
    padding: '0.7rem 1rem',
    background: '#4a6bd0',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 600,
  },
  row: { display: 'flex', justifyContent: 'space-between', gap: 8, marginTop: '0.4rem' },
  link: {
    background: 'transparent',
    color: '#4a6bd0',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    fontSize: '0.85rem',
    textDecoration: 'underline',
  },
  error: { color: '#c0392b', margin: 0, fontSize: '0.9rem' },
  info: { color: '#1e7c46', margin: 0, fontSize: '0.9rem' },
}
