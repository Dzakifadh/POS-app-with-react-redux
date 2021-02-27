import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addCart } from '../store/actions/product'

const Card = styled.div`
  width: 17%;
  height: 12rem;
  cursor: pointer;
`
const CardImg = styled.img`
  width: 100%;
  height: 85%;
  object-fit: cover;
`
const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductCard = ({ item }) => {
  const dispatch = useDispatch()
  const addToCart = (id) => {
    dispatch(addCart(id))
  }

  return (
    <Card onClick={() => addToCart(item.id)}>
      <CardImg src={item.image.default} alt={item.name}></CardImg>
      <NamePrice>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </NamePrice>
    </Card>
  )
}

export default ProductCard

/*

Waktu Mulai - Akhir Pendaftaran

VOL 1 = 04/04/2019 20:59:06 -  31/05/2019 04:30:27 => 193 pendaftar
VOL 2 = 03/07/2019 13:27:57 - 29/07/2019 22:50:12 => 436 pendaftar
VOL 3 = 29/09/2019 05:58:14 - 21/10/2019 09:34:03 => 343 pendaftar

TOATAL PENDAFTAR = 972
JUMLAH MEMBER DI GRUP TELEGRAM FLAT = 365

*/
