import Features from "./feature"
import Articles from './articles'

function main() {

  return (
    <div className="text-center flex flex-col px-8 w-100 items-center light-grayish-blue-bg h-100">
      <div className="flex flex-col gap-6 py-20">
        <div className="dark-blue text-4xl">Why choose <br />Easybank?</div>
        <div className="grayish-blue">
          We leverage Open Banking to turn your bank account into your financial hub.
          Control your finances like never before.
        </div>
        <Features />
        <Articles />
      </div>
    </div>
  )
}

export default main