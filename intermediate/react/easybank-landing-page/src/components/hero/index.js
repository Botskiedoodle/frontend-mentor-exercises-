import HeroImage from '../../assets/image-mockups.png'
import HeroBackgroundMobile from '../../assets/bg-intro-mobile.svg'
import Button from '../global/button'
// import HeroBackgroundDesktop from '../../assets/bg-intro-desktop.svg'

function hero() {
  return (
    <div className=''>
      <div className='w-100 flex justify-center'>
        <img src={HeroBackgroundMobile} alt="" className='w-screen relative z-15 -mt-12' />
        <div className='absolute -mt-44 z-5 w-100 flex justify-center'>
          <img src={HeroImage} alt="" />
        </div>
      </div>

      <div className='flex flex-col gap-8 text-center w-100 px-14 items-center pb-20' >
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

      </div>
    </div>
  )
}

export default hero