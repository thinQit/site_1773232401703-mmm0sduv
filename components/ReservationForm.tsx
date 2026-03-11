"use client";
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ReservationForm() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: '2' })
  return (
    <form className="grid gap-4 rounded-xl border p-6" method="post" action="/api/reservations">
      <Input name="name" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <Input name="email" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <Input name="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
      <Input name="time" type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required />
      <Input name="guests" type="number" min={1} max={12} value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} required />
      <Button type="submit" className="bg-[#DDA15E] text-black">Send Reservation Request</Button>
    </form>
  )
}
