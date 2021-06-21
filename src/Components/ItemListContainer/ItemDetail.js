import React from 'react'

function ItemDetail(props) {
    console.log(props)
    return (
        <div>
            <div className='container itemDescription'>
                <div className='card-container'>
                    <div className='image-container'>
                        <img src={props.imagenUrl} alt=''></img>
                    </div>
                    <div className='card-content'>
                        <div className='card-name'>
                            <h4>{props.name}</h4>
                        </div>
                    </div>
                    <div className='card-body'>
                        <p>{props.category}</p>
                    </div>
                    <div className='card-body'>
                       <p style={{padding: '20px'}}>{props.price}€</p>
                    </div>
                </div>
                <div>
                    <h2>About</h2>
                <p style={{padding: '20px', textAlign: 'justify', marginRight: '200px' }}>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
