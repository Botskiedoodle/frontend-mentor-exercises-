import EasyBankLogo from '../../assets/logo-footer.svg'
import FBLogo from '../../assets/icon-facebook.svg'
import YTLogo from '../../assets/icon-youtube.svg'
import TweeterLogo from '../../assets/icon-twitter.svg'
import PinterestLogo from '../../assets/icon-pinterest.svg'
import IGLogo from '../../assets/icon-instagram.svg'
import Button from '../global/button'

function footer() {
  return (
    // dark-blue-bg
    <div className='w-100 flex flex-col items-center dark-blue-bg '>
      <div className='flex flex-col  pt-4' >
        <div className='flex flex-col items-center py-2 ' >
          <div className='py-4'>
            <img src={EasyBankLogo} />
          </div>
          <div className='pt-4'>
            <div className='flex gap-4'>
              <img src={FBLogo} alt="Facebook" />
              <img src={YTLogo} alt="Youtube" />
              <img src={TweeterLogo} alt="Tweeter" />
              <img src={PinterestLogo} alt="Pinterest" />
              <img src={IGLogo} alt="Instagram" />
            </div>
          </div>
        </div>

        <div className='text-center text-white flex flex-col py-4' >
          <div className='flex flex-col'>
            <div className='py-1.5'>About Us</div>
            <div className='py-1.5'>Contact</div>
            <div className='py-1.5'>Blog</div>
          </div>
          <div className='flex flex-col'>
            <div className='py-1.5'>Careers</div>
            <div className='py-1.5'>Support</div>
            <div className='py-1.5'>Privacy Policy</div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center  pb-6'>
        <div className='py-4'>
          <Button>Request Invite</Button>
        </div>
        <div className='grayish-blue py-4'>
          @ Easybank. All Rights Reserved
        </div>
      </div>

    </div>
  )
}

export default footer