import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import CartItem from './CartItem'

const fadeIn = {
  hidden: {
    opacity: 0
  }, visible: {
    opacity: 1
  }, exit: {
    opacity: 0
  }
}

const Cart = ({ handleClose }) => {
  return (
    <div>
        <Backdrop handleClose={handleClose}>
            <motion.div 
                onClick={(e) => e.stopPropagation()}
                className='w-[90%] h-fit max-h-[75%] bg-white p-10 m-auto rounded-2xl overflow-auto z-[1] max-w-6xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={fadeIn}
            >
              <div className='flex justify-between'>
                <h1 className='font-bold text-3xl'>Your Cart:</h1>
                <FontAwesomeIcon className='cursor-pointer' icon={faXmark} onClick={handleClose} />
              </div>
              <div className='flex flex-col gap-4 my-4'>
                <CartItem />
                <CartItem />
                <CartItem />
              </div>
              <p>Subtotal: 9 CHF</p>
            </motion.div>
        </Backdrop>
    </div>
  )
}

export default Cart