import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from './Button'

const Box = styled.div`
  position: fixed;
  bottom: 0;
  width: 20rem;
  height: 8rem;
  box-shadow: 1px 1px 10px 1px #ccc;
  padding: 0.4rem;
  margin-left: -0.4rem;
`
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
`
const Pay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  input[type='number'] {
    border: none;
    border-bottom: 1px solid #000;
    font-weight: bold;
    text-align: right;
    &:focus {
      outline: none;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`
const Change = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`
const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const CalculateBox = () => {
  // const dispatch = useDispatch()
  // const carts = useSelector(state => state.product.carts)
  // const total = carts.reduce((totalPrice, current) => totalPrice + current.price, 0)
  // const [pay, setPay] = useState("")
  // const [change, setChange] = useState("")
  // const handleChange = e => {
  //   setPay(e.target.value)
  // }
  // const calculateChange = () => {
  //   if(pay > total){
  //     setChange(pay-total)
  //   }
  // }
  // const reset = () => {
  //   dispatch(resetCart())
  //   setChange("")
  //   setPay("")
  // }
  return (
    <Box>
      <Total>
        <h4>Total</h4>
        {/* <p>{total}</p> */}
        <p>234</p>
      </Total>
      <Pay>
        <p>Jumlah Bayar</p>
        {/* <input type="number" value={pay} onChange={handleChange} /> */}
        <input type='text' />
      </Pay>
      <Change>
        <p>Kembalian</p>
        {/* <p>{change}</p> */}
        <p>345.678</p>
      </Change>
      <BtnBox>
        <Button text='reset' />
        <Button primary text='selesai' />
      </BtnBox>
    </Box>
  )
}

export default CalculateBox
