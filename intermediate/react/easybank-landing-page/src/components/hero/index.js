import HeroImage from '../../assets/image-mockups.png'
import HeroBackgroundMobile from '../../assets/bg-intro-mobile.svg'
import Button from '../global/button'
import HeroBackgroundDesktop from '../../assets/bg-intro-desktop.svg'

function hero() {
  return (

    <div className='lg:flex items-center  lg:flex-row-reverse'>

      {/* <div className='w-100 flex justify-center border border-black '>
        <img src={HeroBackgroundMobile} alt="" className='w-screen relative z-15 -mt-12 lg:hidden' />
        <img src={HeroBackgroundDesktop} alt="" className='w-100 z-15 hidden lg:block' />
        <div className='absolute -mt-44 z-5 flex justify-center lg:block lg:-right-36'>
          <img src={HeroImage} alt="" className='' />
        </div>
      </div>
      <div className='flex flex-col gap-8 text-center w-100 px-14 items-center pb-20 lg:items-start lg:text-left lg:pl-32 border border-black' >
        <div className='dark-blue text-5xl '>
          Next generation digital banking
        </div>
        <div className='grayish-blue'>
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
          budgeting, investing, and much more.
        </div>
        <div>
          <Button>Request Invite</Button>
        </div>
      </div> */}

      <div className='w-full flex justify-center relative '>
        <img src={HeroBackgroundMobile} alt="" className='w-full h-auto -mt-12 lg:hidden' />
        <img src={HeroBackgroundDesktop} alt="" className='w-full h-auto hidden lg:block' />
        <div className='absolute  z-5 flex justify-center w-full h-full lg:block lg:ml-36 lg:-mt-32 '>
          <img src={HeroImage} alt="" className='' />
        </div>
      </div>
      <div className='flex flex-col gap-8 text-center w-full px-4 items-center pb-20 lg:items-start lg:text-left lg:pl-32 '>
        <div className='dark-blue text-5xl'>
          Next generation digital banking
        </div>
        <div className='grayish-blue'>
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
          budgeting, investing, and much more.
        </div>
        <div>
          <Button>Request Invite</Button>
        </div>
      </div>



    </div>
  )
}

export default hero