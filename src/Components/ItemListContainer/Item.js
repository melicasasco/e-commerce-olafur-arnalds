import React, { useEffect} from 'react';
import './Item.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Item(props) {
    useEffect(() => {
        AOS.init({duration: 2000});
      }, []);
    return (
        <div  data-aos='fade-down' className='container'>
           <div className='card-container'>
                <div className='image-container'>
                    <img src={props.imgUrl} alt=''></img>
                </div>
                <div className='card-content'>
                    <div className='card-name'>
                        <h4>{props.name}</h4>
                    </div>
                </div>
                <div className='card-body'>
                    <p>{props.category}</p>
                </div>
                <div className='button'>
                </div>
            </div>
        </div>
    )
}

export default Item;

