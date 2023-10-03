import EasyBankLogo from '../../assets/logo.svg'
import HamburgerLogo from '../../assets/icon-hamburger.svg'
import Navigation from './navigation'
import Button from '../global/button'




function header() {
  return (
    <div className='flex flex-row justify-between w-100 py-6 lg:px-24 align-center bg-white relative z-20'>
      <img src={EasyBankLogo} alt='easybank logo' className="object-contain pl-4 lg:p-0" />
      <Navigation />
      <img src={HamburgerLogo} className='pr-4 lg:hidden' alt='hamburger' />
      <div className='hidden lg:block'>
        <Button>Request Invite</Button>
      </div>

    </div>
  )
}

export default header;