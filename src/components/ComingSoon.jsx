import logo from '../assets/Images/undraw_coming-soon_7lvi.svg'
export default function ComingSoon() {
    return (
          <section className='font-sans'>
            <div className='flex items-center h-screen justify-center'>
        <h1 className='text-blue-500 font-semibold text-2xl'>Coming Soon...</h1>
        <img src={logo} alt="" className='w-28 h-28 md:w-48 md:h-48 animate-pulse'/>
        </div>
        
          </section>
        
    )
}