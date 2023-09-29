import HeroImage from '../../assets/image-mockups.png'
import HeroBackgroundMobile from '../../assets/bg-intro-mobile.svg'
import Button from '../global/button'
import HeroBackgroundDesktop from '../../assets/bg-intro-desktop.svg'

function hero() {
  return (
    <div className='lg:px-24'>
      <div className='lg:hidden w-100 flex justify-center'>
        <img src={HeroBackgroundMobile} alt="" className='w-screen absolute z-15 -mt-10' />
        <div className='absolute -mt-44 z-5 w-100 flex justify-center'>
          <img src={HeroImage} alt="" />
        </div>
      </div>

      <div className='hidden lg:flex flex-row h-screen w-100 '>
        <div className='flex flex-col gap-6 my-32' >
          <div className='dark-blue text-6xl w-[8em] '>
            Next generation <br /> digital banking
          </div>
          <div className='w-96'>
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
            budgeting, investing, and much more.
          </div>
          <div>
            <Button>Request Invite</Button>
          </div>
        </div>
        <div className='' >
          <img src={HeroBackgroundDesktop} alt="" />
        </div>
      </div>

      {/* <div className='hidden lg:block absolute top-0'>

        <div className=''>
          <img src={HeroImage} alt="" />
        </div>
      </div> */}
    </div>
  )
}

export default hero;