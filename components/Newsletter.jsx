'use client'

export default function Newsletter() {
    return (
        <section className='bg-yellow-600 p-20 flex justify-evenly'>

            <div className='flex flex-col gap-2'>
            <h3 className='text-white opacity-30 text-2xl'>Lorem ipsum</h3>
            <h2 className='text-white text-3xl'>Lorem ipsum</h2>
            <p className='text-white opacity-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>

            <form className='flex flex-col gap-2 w-1/2'>
                <label className='text-white'>Email</label>
                <input className='p-3 rounded' type="email" name="email" id="email" placeholder='Email' />
                <button className='bg-yellow-500 text-white rounded-3xl h-10 mt-2'>Subscribe</button>
            </form>
        </section>
    )
}