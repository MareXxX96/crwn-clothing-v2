import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import SignIn from './routes/sign-in/sign-in.component'
import Shop from './routes/shop/shop.component'; 
import CartPage from './routes/cartPage/cartPage.component';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='sign-in' element={<SignIn />}/>
        <Route path='shop/*' element={<Shop />}/>
        <Route path='cart' element={<CartPage />}/>
      </Route>
    </Routes>
  )
}

export default App