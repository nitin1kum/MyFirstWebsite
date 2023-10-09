import React, { useEffect, useState } from 'react'
import {FaArrowUp} from 'react-icons/fa'

const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false)
    const goToTop=()=>{
            window.scrollTo({
                top:0,
                left: 0,
                behavior: "smooth"
            })
    }
    const arrowVisiblity=()=>{
        let top=document.body.scrollTop || document.documentElement.scrollTop
        if(top>200){
            setIsVisible(true)
        }
        else{
            setIsVisible(false)
        }
    }
    useEffect(() => {
      window.addEventListener("scroll",arrowVisiblity)
      return() =>{
        window.removeEventListener("scroll",arrowVisiblity)
      }
    }, [])
    
  return (
    <div>
        {isVisible && <div onClick={goToTop} className='arrow-up-container' >
        <FaArrowUp className='arrow-up'/>
    </div>}
    </div>
  )
}

export default TopButton