import HeroImage from '../../assets/image-mockups.png'
import HeroBackgroundMobile from '../../assets/bg-intro-mobile.svg'
import Button from '../global/button'
import HeroBackgroundDesktop from '../../assets/bg-intro-desktop.svg'


function hero() {
  return (
    <div>
      <div className='lg:hidden'>
        <img src={HeroBackgroundMobile} alt="" className='w-screen absolute z-15 -mt-10' />
        <div className='absolute -mt-44 z-5 w-screen flex justify-center contain-fit'>
          <img src={HeroImage} alt="" />
        </div>
      </div>
      <div className='hidden lg:flex flex-row text-left h-screen items-center -mt-28 overflow-x-hidden justify-center'>
        <div className='left-64'>
          <div className='flex flex-col w-[40em] p-8 gap-6'>
            <div className='dark-blue text-7xl'>
              Next generation digital banking
            </div>
            <div className='grayish-blue'>
              Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
              saving, budgeting, investing, and much more.
            </div>
            <div>
              <Button>Request Invite</Button>
            </div>
          </div>

        </div>
        <div className='relative bottom-24 left-64' >
          <img src={HeroBackgroundDesktop} alt="" className='hero-background-desktop' />
        </div>
        <div className='absolute left-[64em]'>
          <img src={HeroImage} alt="" className='image' />
        </div>
      </div>

    </div>
  )
}

export default hero;