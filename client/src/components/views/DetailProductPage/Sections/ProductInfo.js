import React, {useState} from 'react'
import { Button, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../_actions/user_actions';
const { Option } = Select;

function ProductInfo(props) {

    
    const sizes = props.detail.sizes
    const colors = props.detail.colors

    const [Size, setSize] = useState('')
    const [Color, setColor] = useState('')

    const SizechangeHandler = value => {
        
        setSize(value.toString())
        
        
    }

    const ColorchangeHandler = value => {
        
        setColor(value.toString())
        
        
    }

    const sizeChangeHandler = (event) => {
        // event.preventDefault();
        // event.stopPropagation();
        setSize(event.currentTarget.value.toString())
        // event.stopImmediatePropagation();
    }

    const colorChangeHandler = (event) => {
        setColor(event.currentTarget.value.toString())
    }

    const SelectSize = () => {
        if(props.detail.price != null){
            
            return (
                <div>
                    {/* {sizes[0]} */}
                <Select defaultValue="SIZE" style={{ width: 120 }} name="size" onChange={SizechangeHandler}>    
                {/* <select name="size" onChange={sizeChangeHandler}> */}
                {Object.values(sizes).map(
                    item=>
                    <option value={item}>{item}</option>
                )}
                {/* {Object.values(sizes).map(
                    (item, index)=> (
                        <Option value={item} key={index}>{item}</Option>
                    )
                )} */}
                {/* </select> */}
                </Select>
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
                    {/* defaultValue={colors[0]} */}
                <Select defaultValue="COLOR" style={{ width: 120 }} name="color" onChange={ColorchangeHandler}> 
                {/* <select name="color" onChange={colorChangeHandler}> */}
                {Object.values(colors).map(
                    item=>
                    <option value={item}>{item}</option>
                )}
                {/* {Object.values(colors).map(
                    (item, index)=> (
                        <Option value={item} key={index}>{item}</Option>
                    )
                )} */}
                {/* </select> */}
                </Select>
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
