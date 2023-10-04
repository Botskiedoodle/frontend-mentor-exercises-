import OnlineBankingImg from '../../assets/icon-online.svg'
import SimpleBudgetingImg from '../../assets/icon-budgeting.svg'
import FastOnboardingImg from '../../assets/icon-onboarding.svg'
import OpenAPIImg from '../../assets/icon-api.svg'

function Feature({ image, title, text }) {
  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <img src={image} alt={title} />
      <div className="dar-blue text-2xl">
        {title}
      </div>
      <div className="grayish-blue">
        {text}
      </div>
    </div>
  )
}

const featureList = [
  {
    id: 1,
    image: OnlineBankingImg,
    title: 'Online Banking',
    text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world',
  },
  {
    id: 2,
    image: SimpleBudgetingImg,
    title: 'Simple Budgeting',
    text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting limits',
  },
  {
    id: 3,
    image: FastOnboardingImg,
    title: 'Fast Onboarding',
    text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    id: 4,
    image: OpenAPIImg,
    title: 'Open API',
    text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
]

function features() {
  return (
    <div className='light-grayish-blue-bg w-100 lg:px-32 px-8'>
      <div className="dark-blue text-4xl py-8">Why choose Easybank?</div>
      <div className="grayish-blue">
        We leverage Open Banking to turn your bank account into your financial hub.
        Control your finances like never before.
      </div>
      {featureList.map(feature =>
        <Feature
          key={feature.id}
          title={feature.title}
          image={feature.image}
          text={feature.text}
        />
      )}
    </div>

  )



}

export default features


