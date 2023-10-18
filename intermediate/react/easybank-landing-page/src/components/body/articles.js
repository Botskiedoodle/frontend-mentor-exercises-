import ReceiveMoneyImg from '../../assets/image-currency.jpg'
import TreatYourselfImg from '../../assets/image-restaurant.jpg'
import PlaneImg from '../../assets/image-plane.jpg'
import ConfettiImg from '../../assets/image-confetti.jpg'



function Article({ image, author, title, text }) {
  return (
    <div className='rounded-lg bg-white text-left'>
      <div>
        <img src={image} alt={title} className='rounded-t-lg w-screen ' />
      </div>
      <div className='flex flex-col gap-4 p-6'>
        <div className='text-xs grayish-blue'>
          By {author}
        </div>
        <div className='text-xl dark-blue '>
          {title}
        </div>
        <div className='grayish-blue'>
          {text}
        </div>
      </div>

    </div>
  )
}

const articleList = [
  {
    id: 1,
    image: ReceiveMoneyImg,
    author: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    text: `The world is getting smaller and we're becoming more mobile.
    So why should you be forced to only receive money in a single...`
  },
  {
    id: 2,
    image: TreatYourselfImg,
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    text: `Our simple budgeting allows you to separate out your spending and set realistic limits each month. That means you...`
  },
  {
    id: 3,
    image: PlaneImg,
    author: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    text: `We want you to enjoy your travels. This is why we don't charge any fees
    on purchases while you're abroad. We'll even show you ...`
  },
  {
    id: 4,
    image: ConfettiImg,
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    text: `After a lot of hard work by the whole team, we're excited to launch our 
    closed beta. It's easy to request an invite through the site...`
  }
]

function Articles() {
  return (
    <div className='lg:text-left very-light-gray-bg lg:px-32 px-8 pb-8'>
      <div className="dark-blue text-4xl py-8">
        Latest Articles
      </div>
      <div className='flex flex-col lg:flex-row gap-6 '>
        {articleList.map(article =>
          <Article
            key={article.id}
            image={article.image}
            title={article.title}
            author={article.author}
            text={article.text}
          />
        )}
      </div>


    </div>
  )


}

export default Articles