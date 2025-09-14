import { useState } from 'react'
export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [status, setStatus] = useState('')
  const handle = e => setForm(prev=>({...prev,[e.target.name]: e.target.value}))
  const submit = async (e) =>{
    e.preventDefault(); setStatus('sending')
    try{
      const res = await fetch('/api/contact',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(form)
      })
      if(res.ok) setStatus('sent')
      else setStatus('error')
    }catch(err){ setStatus('error') }
  }
  return (
    <section className='py-24'>
      <div className='container'>
        <h2 className='text-3xl font-bold'>Contact</h2>
        <p className='text-slate-400 mt-2'>Get in touch — we usually respond within 48 hours.</p>

        <div className='mt-8 grid md:grid-cols-2 gap-8'>
          <form onSubmit={submit} className='space-y-4'>
            <input name='name' value={form.name} onChange={handle} placeholder='Your name' className='p-3 rounded-md w-full' required />
            <input name='email' value={form.email} onChange={handle} placeholder='Email' className='p-3 rounded-md w-full' required />
            <textarea name='message' value={form.message} onChange={handle} placeholder='Message' className='p-3 rounded-md w-full h-40' required />
            <button type='submit' className='px-4 py-2 rounded-md bg-slate-900 text-white'>Send message</button>
            <div className='text-sm mt-2'>
              {status==='sending' ? 'Sending…' : status==='sent' ? 'Message sent — we will reply soon.' : status==='error' ? 'There was an error. Please try again.' : ''}
            </div>
          </form>

          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Other ways to reach us</h3>
            <p>Email: <a href='mailto:hftprimemarketing@gmail.com' className='text-sky-600'>hftprimemarketing@gmail.com</a></p>
            <p>WhatsApp: <a href='https://wa.me/0000000000?text=Hello%20HFT%20Prime%20Marketing' target='_blank' rel='noreferrer' className='text-sky-600'>Chat on WhatsApp</a> (dummy number — update in code)</p>
            <p className='text-sm text-slate-400'>Or use the form — messages are sent to our support inbox.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
