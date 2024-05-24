const withDarkMode = (Component) => {
    const styles = {
        backgroundColor:"black",
        color:"white"
    }
  return ()=> {
    return <div style={styles}><Component /></div>
  }
}

export default withDarkMode