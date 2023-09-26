import EasyBankLogo from '../../assets/logo.svg'
import HamburgerLogo from '../../assets/icon-hamburger.svg'
import Navigation from './navigation'
import Button from '../global/button'




function header() {
  return (
    <div className='flex flex-row justify-between w-100 p-6 align-center lg:justify-around bg-white relative z-20'>
      <img src={EasyBankLogo} alt='easybank logo' className="object-contain" />
      <Navigation />
      <img src={HamburgerLogo} className='pr-4 lg:hidden' alt='hamburger' />
      <Button >Request Invite</Button>
    </div>
  )
}

export default header;