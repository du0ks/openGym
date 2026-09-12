import { useStore, hasData } from '../store/useStore.js'
import { useUI } from '../store/useUI.js'
import { emailLogin, emailRegister } from '../lib/api.js'
import { t } from '../lib/i18n.js'
import { DEMO, REPO } from '../lib/demo.js'
import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import { Button, TextField } from '../components/ui.jsx'

export default function Login() {
  const { setUser, pushState, pullState, setGuest } = useStore()
  const [mode, setMode] = useState('signin')   // 'signin' | 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)

  const go = async () => {
    if (!email.trim() || !password) { useUI.getState().toast(t('Enter your email and password')); return }
    setBusy(true)
    try {
      const u = mode === 'signup' ? await emailRegister(email, password) : await emailLogin(email, password)
      setUser(u)
      if (mode === 'signup' && hasData(useStore.getState().S)) {
        await pushState(); useUI.getState().toast(t('Account created — data from this device moved into it'))
      } else {
        await pullState(); useUI.getState().toast(mode === 'signup' ? t('Welcome, {0}', u.name) : t('Welcome back, {0}', u.name))
      }
    } catch (e) { useUI.getState().toast(e.message || t('Something went wrong')) }
    setBusy(false)
  }

  const head = <>
    <div style={{ fontSize: 54, display: 'flex', justifyContent: 'center', color: 'var(--acc)' }}><Icon name="dumbbell" /></div>
    <h1 style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-.028em', margin: '10px 0 4px' }}>openGym</h1>
  </>
  const wrap = { display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '78vh', textAlign: 'center' }

  // Demo build: no backend to sign in against — the only way in is the local guest profile.
  if (DEMO) return (
    <div className="narrow" style={wrap}>
      {head}
      <div className="muted" style={{ marginBottom: 30 }}>{t('Live demo — everything stays in this browser.')}</div>
      <Button variant="primary" icon="sparkles" onClick={() => setGuest(true)}>{t('Start the demo')}</Button>
      <div className="card small muted" style={{ textAlign: 'left', marginTop: 16 }}>
        {t('This demo runs entirely in your browser on example data — nothing is sent anywhere. Account sign-in and sync across your devices come with the openGym server, which you get by self-hosting it.')}
      </div>
      <div className="dim small" style={{ marginTop: 22, lineHeight: 1.6 }}>
        <a href={REPO} target="_blank" rel="noopener">{t('Self-host it in a minute →')}</a>
      </div>
    </div>
  )

  return (
    <div className="narrow" style={wrap}>
      {head}
      <div className="muted" style={{ marginBottom: 34 }}>{t('Your workouts. Your weights. Your profile.')}</div>
      <TextField type="email" autoComplete="email" placeholder={t('Email')} value={email} onChange={e => setEmail(e.target.value)} />
      <div style={{ height: 10 }} />
      <TextField type="password" autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
        placeholder={t('Password')} value={password} onChange={e => setPassword(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && go()} />
      <div style={{ height: 14 }} />
      <Button variant="primary" disabled={busy} onClick={go}>{mode === 'signup' ? t('Create account') : t('Sign in')}</Button>
      <div style={{ height: 10 }} />
      <Button variant="ghost" className="dim" onClick={() => setMode(m => (m === 'signup' ? 'signin' : 'signup'))}>
        {mode === 'signup' ? t('Already have an account? Sign in') : t('New here? Create an account')}
      </Button>
      <div style={{ height: 10 }} />
      <Button variant="ghost" className="dim" onClick={() => setGuest(true)}>{t('Continue without account')}</Button>
      <div className="dim small" style={{ marginTop: 26, lineHeight: 1.5 }}>{t('Each account keeps its own plan, workouts & body weight.')}</div>
    </div>
  )
}
