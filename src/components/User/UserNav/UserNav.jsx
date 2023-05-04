import React,{useContext} from 'react'
import LanguageContext from '../../../context/LanguageContext'
import './UserNav.css'

const UserNav = () => {
    const {texts} =useContext(LanguageContext)
  return (
    <div>UserNav</div>
  )
}

export default UserNav