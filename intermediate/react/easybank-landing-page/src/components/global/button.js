function button(props) {
  return (
    <div className='
    text-white 

    py-2 px-8 
    bg-gradient-to-r  from-green-500 to-blue-400
    rounded-3xl
    w-44
    cursor-pointer
    '>
      {props.children}
    </div>
  )
}

export default button;