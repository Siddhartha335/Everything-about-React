const blog = async() => {

  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("done")
    }, 1000)
  }) 

  return (
    <h1>My blog page</h1>
  )
}

export default blog