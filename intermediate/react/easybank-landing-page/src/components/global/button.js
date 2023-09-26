function button(props) {
  return (
    <div className='
    text-white 
    lg:block 
    hidden
    py-2 px-8 
    bg-gradient-to-r  from-green-500 to-blue-400
    rounded-3xl
    w-44
    '>
      {props.children}
    </div>
  )
}

export default button;