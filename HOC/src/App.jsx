// import AuthDashboard from "./Dashboard"
import Dashboard from "./Dashboard"
import withAuth from "./utils/withAuth"
import withDarkMode from "./utils/withDarkMode"

function App() {

  const AuthDashboard = withDarkMode(withAuth(Dashboard))
  const info = {
    name:"Sid",
    age:23
  }

  return (
    <>
      <h1>Sid</h1>
      <AuthDashboard  info={info}/>
    </>
  )
}

export default App
