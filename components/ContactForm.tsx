"use client";
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  return (
    <form className="grid gap-4 rounded-xl border p-6" method="post" action="/api/contact">
      <Input name="name" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <Input name="email" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <textarea name="message" className="min-h-28 rounded-md border p-3" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
      <Button type="submit" className="bg-[#722F37]">Send Message</Button>
    </form>
  )
}
