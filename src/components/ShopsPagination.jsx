import React from 'react'
import { Pagination } from 'react-bootstrap'

const ShopsPagination = ({links, active , getShops}) => {
  return (
    <>
    <Pagination>
      {links
      .filter( (_,index) => index !== 0 && index !== 8)     
      
      .map(( link ,index ) => {      
        return (
          <Pagination.Item key={index} active={parseInt(link.label) === active} onClick={() => getShops(link.label)}>
           <span dangerouslySetInnerHTML={{__html:link.label}}></span>
          </Pagination.Item>  
        )
      })}
     
    </Pagination>    
    </>
  )
}

export default ShopsPagination