import React, {useState} from 'react'
import { Button, Select} from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../_actions/user_actions';


function ProductInfo(props) {

    
    const sizes = props.detail.sizes
    const colors = props.detail.colors

    const [Size, setSize] = useState('')
    const [Color, setColor] = useState('')

    const SelectSize = () => {
        if(props.detail.price != null){
            return (
                <div>
                <select name="Size" onChange={SelectSize}>
                {Object.values(sizes).map(
                    item=> (
                        <option value={item}>{item}</option>
                    )
                )}
                </select>
                </div> 
            )

        }else{
            return (
                <div></div>
            )
        }
    }

    const SelectColor = () => {
        if(props.detail.price != null){
            return (
                <div>
                <select name="color" onChange={SelectColor}>
                {Object.values(colors).map(
                    item=>
                    <option value={item}>{item}</option>
                )}
                </select>
                </div> 
            )
        }else{
            return (
                <div></div>
            )
        }
    }

    
    const dispatch = useDispatch();


    const clickHandler = () => {
        //필요한 정보를 Cart 필드에다가 넣어 준다.
        dispatch(addToCart(props.detail._id, Size, Color))
        alert("장바구니에 추가되었습니다.")
        console.log("사이즈: ", Size , "컬러:", Color)
    }
    
    return (
        <div>
            {/* <Descriptions label="Title" title={props.detail.title} layout="vertical">
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions> */}
            <h1>{props.detail.title}</h1>
            <h2>색상</h2>
            <SelectColor />
            <h2>사이즈</h2>
            <SelectSize />
            <h3>{`${props.detail.price}원`}</h3>
            <p>{props.detail.description}</p>
            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    Add to Cart
                </Button>
            </div>


        </div>
    )
}

export default ProductInfo
