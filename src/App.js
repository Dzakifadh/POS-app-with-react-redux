import { useSelector } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import './App.css'
import CartItem from './components/CartItem'
import Header from './components/Header'
import ListMenu from './components/ListMenu'
import ProductCard from './components/ProductCard'
import * as theme from './styled/theme'

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 92vh;
`
const MenuContainer = styled.div`
  width: 15%;
  padding: 0.5rem 0;
  padding-right: 0.5rem;
`
const ProductContainer = styled.div`
  width: 60%;
  height: 100%;
  background: ${(props) => props.theme.light};
  border-left: 1px solid #f7f7f7;
  border-right: 1px solid #f7f7f7;
  padding: 0.5rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const CartContainer = styled.div`
  width: 25%;
  padding: 0.5rem 0.5rem;
`
function App() {
  const products = useSelector((state) => state.product.products)
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <MenuContainer>
          <ListMenu />
        </MenuContainer>
        <ProductContainer>
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </ProductContainer>
        <CartContainer>
          <CartItem />
        </CartContainer>
      </Container>
    </ThemeProvider>
  )
}

export default App
