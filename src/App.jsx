import Home from './pages/Home.jsx'
import OrderPizza from './pages/OrderPizza.jsx'
import Success from './pages/Success.jsx'
import './App.css'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/siparis">
        <OrderPizza/>
      </Route>
      <Route path="/siparisonaylandi">
        <Success/>
      </Route>
    </Switch>
  )
}

export default App;