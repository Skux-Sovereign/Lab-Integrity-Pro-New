'use client'

import { useEffect, useState } from 'react'
import styles from './contact.module.css'
import Icon from '../components/Icon'
import { CONTACT_EMAIL } from '../lib/site'
import { INTERESTS, interestLabel, prefillFromParams } from './interest'

const FORMSPREE_URL = 'https://formspree.io/f/manrkqoe'

const EMPTY = { name: '', email: '', company: '', phone: '', service: '', message: '' }
type FormData = typeof EMPTY
type Errors = Partial<Record<keyof FormData, string>>

function validate(data: FormData): Errors {
  const errors: Errors = {}
  if (!data.name.trim()) errors.name = 'Name is required'
  else if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters'

  if (!data.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email address'

  if (data.phone && !/^[\d\s\-+().]+$/.test(data.phone)) errors.phone = 'Please enter a valid phone number'

  if (!data.message.trim()) errors.message = 'Message is required'
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters'
  return errors
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Prefill from links such as /contact?interest=automation
  useEffect(() => {
    const { service, message } = prefillFromParams(new URLSearchParams(window.location.search))
    if (service || message) setData((d) => ({ ...d, service: service || d.service, message: message || d.message }))
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setData((d) => ({ ...d, [name]: value }))
    if (errors[name as keyof FormData]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      document.getElementById(first)?.focus()
      return
    }

    setIsSubmitting(true)
    setStatus('idle')
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          service: data.service ? interestLabel(data.service) : '',
          _subject: `Lab Integrity Pro: ${data.service ? interestLabel(data.service) : 'General inquiry'}`,
        }),
      })
      if (response.ok) {
        setStatus('success')
        setData(EMPTY)
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const field = (name: keyof FormData) => ({
    id: name,
    name,
    value: data[name],
    onChange,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  const errorText = (name: keyof FormData) =>
    errors[name] ? (
      <span id={`${name}-error`} className={styles.error}>
        {errors[name]}
      </span>
    ) : null

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <Icon name="check" size={22} />
        </span>
        <h2 className="display-3">Thank you. Your message is on its way.</h2>
        <p className="body-2">We’ll reply within 24 hours to set up a time for your consultation.</p>
        <button type="button" className="button button-secondary" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {status === 'error' && (
        <p className={styles.alert} role="alert">
          Something went wrong sending your message. Please try again or email us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}

      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="name">Name *</label>
          <input type="text" autoComplete="name" placeholder="Jane Smith" {...field('name')} />
          {errorText('name')}
        </div>
        <div className={styles.group}>
          <label htmlFor="email">Work email *</label>
          <input type="email" autoComplete="email" placeholder="jane@company.com" {...field('email')} />
          {errorText('email')}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="company">Company</label>
          <input type="text" autoComplete="organization" placeholder="Company name" {...field('company')} />
        </div>
        <div className={styles.group}>
          <label htmlFor="phone">Phone</label>
          <input type="tel" autoComplete="tel" placeholder="(555) 123-4567" {...field('phone')} />
          {errorText('phone')}
        </div>
      </div>

      <div className={styles.group}>
        <label htmlFor="service">What would you like to discuss?</label>
        <select {...field('service')}>
          <option value="">Choose a topic…</option>
          {INTERESTS.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.group}>
        <label htmlFor="message">Message *</label>
        <textarea
          rows={6}
          placeholder="A few lines about your lab, your review process and what you’d like to improve."
          {...field('message')}
        />
        {errorText('message')}
      </div>

      <button type="submit" className={`button button-primary button-lg ${styles.submit}`} disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Book a consultation'}
      </button>
    </form>
  )
}
