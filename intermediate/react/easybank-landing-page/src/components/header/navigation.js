function Navigation() {
  return (
    <div className='lg:flex flex-row hidden gap-12 items-center grayish-blue'>
      <div className="cursor-pointer">
        Home
      </div>
      <div className="cursor-pointer">
        About
      </div>
      <div className="cursor-pointer">
        Contact
      </div>
      <div className="cursor-pointer">
        Blog
      </div>
      <div>
        Careers
      </div>
    </div>
  );
}

export default Navigation;