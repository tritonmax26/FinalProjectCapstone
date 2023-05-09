import React from 'react'
import { Pagination } from 'react-bootstrap'


const ProductsPagination = ({links,active,getProducts}) => {
  return (
    <>
    <Pagination>
      {links
      .filter( (_,index) => index !== 0 && index !== links.length -1) 

      .map(( link ,index ) => {      
        return (
          <Pagination.Item key={index} active={parseInt(link.label) === active} onClick={() => getProducts(link.label)}>
           <span dangerouslySetInnerHTML={{__html:link.label}}></span>
          </Pagination.Item>  
        )
      })}
     
    </Pagination>   

    </>
  )
}

export default ProductsPagination