const withAuth = (Component) => {
    const isAuthenticated = true   ;
  return () => {
    if(isAuthenticated) {
        return <Component/>
    }
    else {
        return <p>Please, login first!</p>
    }
  }
}

export default withAuth