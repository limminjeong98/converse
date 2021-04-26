import React from 'react'
import { Icon, Col, Card, Row, Carousel } from 'antd';

function ImageSlider(props) {
    return (
        <div>
            <Carousel autoplay >
                {props.images.map((image, index) => (
                    // <div style={{ position: 'relative', paddingTop: '100%', overflow: 'hidden'}}>
                    <div key={index} style={{  }}>
                        <img style={{ width: '20rem', height: '15rem', objectFit: 'cover'  }}
                            src={`http://localhost:5000/${image}`} />
                    </div>
                    // {/* <div key={index} style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', WebkitTransform: 'translate(50%, 50%)', msTransform: 'translate(50%, 50%)', transform: 'translate(50%, 50%)' }}>
                    //     <img style={{ position: 'absolute', top: '0', left: '0', maxWidth: '100%', height: '100%'  }}
                    //         src={`http://localhost:5000/${image}`} />
                    // </div> */}
                    // </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider
