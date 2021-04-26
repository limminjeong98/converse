import React, { useState } from 'react'
import {Typography, Button, Form, Input, Select } from 'antd';
import FileUpload from '../../utils/FileUpload';
// import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';
import SizeList from '../../utils/SizeList'
import SizeItem from '../../utils/SizeItem'
// const { Title } = Typography;
const { TextArea } = Input;

const Categories = [
    { key: 1, value: "Sneakers" },
    { key: 2, value: "Mule" }
]

const { Option } = Select;


function UploadShoesPage(props) {

    
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [ProductType, setProductType] = useState("shoes")
    const [Price, setPrice] = useState(0)
    const [Category, setCategory] = useState(1)
    const [Sizes, setSizes] = useState([])
    const [Images, setImages] = useState([])
    const [Colors, setColors] = useState([])
    const [NewSize, setNewSize] = useState([])
    const [NewColor, setNewColor] = useState([])
    

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }
    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }
    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }
    
    const categoryChangeHandler = (value) => {
        setCategory(value)
        console.log('value', value)
        // console.log('event',event);
        // console.log('event.currentTarget.value',event.currentTarget.value);
        // setCategory(value);
    }
    const updateSize = (event) => {
        setNewSize(event.currentTarget.value)
    }
    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const updateColor = (event) => {
        setNewColor(event.currentTarget.value)
    }
    const sizesHandler = (event) => {
        setSizes([...Sizes, NewSize])
        alert("사이즈가 추가되었습니다.")
        setNewSize("");
    }
    const colorsHandler = (event) => {
        setColors([...Colors, NewColor])
        alert("색상이 추가되었습니다.")
        setNewColor("");

    }
    

    // size 삭제할 때
    const handleRemoveSize = (size) => {
        const currentIndex = Sizes.indexOf(size)
        let newSizes = [...Sizes]
        newSizes.splice(currentIndex, 1)
        setSizes(newSizes)
        alert("사이즈가 삭제되었습니다.")
    }
     // color 삭제할 때
    const handleRemoveColor = (color) => {
        const currentIndex = Colors.indexOf(color)
        let newColors = [...Colors]
        newColors.splice(currentIndex, 1)
        setColors(newColors)
        alert("색상이 삭제되었습니다.")
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // 확인버튼을 누를때 페이지가 자동적으로 refresh되지 않도록
        
        if(!Title || !Description || !Price || !Category || !Sizes  || !Images || !Colors){
            return alert("모든 값을 넣어주셔야 합니다.")
        }

        const body = {
            // 로그인된 사람의 ID
            writer: props.user.userData._id,
            title: Title,
            description: Description,
            productType: ProductType,
            price: Price,
            category: Category,
            sizes: Sizes,
            images: Images,
            colors: Colors

        }
        Axios.post("/api/product", body)
            .then(response => {
                if(response.data.success){
                    alert("상품 업로드에 성공했습니다.")
                    props.history.push('/')
                }else{
                    alert("상품 업로드에 실패했습니다.")
                }
            })
    }
    return (
        <div style={{backgroundColor: 'white'}}>
        <div style={{maxWidth: '700px', margin: '2rem auto' }}>
            {/* <div style={{ textAlign: 'center', marginBottom: '2rem', color: 'white' }}>
                Shoes Product Upload
            </div> */}

            <div style={{ textAlign: 'center', padding: '2rem', color: '#707070', fontSize: '1.5rem' }}>
                신발 상품 업로드
            </div>
            <br />
            <br />
            {/* DropZone */}

            <FileUpload refreshFunction={updateImages}/>
            <Form onSubmit={submitHandler}>
                
                <div style={{ padding: '1rem 0rem' }}>
                    이름
                </div>
                <Input onChange={titleChangeHandler} value={Title}/>
                <br />
                <br />
                <div style={{ padding: '1rem 0rem' }}>
                    설명
                </div>
                <TextArea onChange={descriptionChangeHandler} value={Description} />
                <br />
                <br />
                <div style={{ padding: '1rem 0rem' }}>
                    가격
                </div>
                <Input type="number" onChange={priceChangeHandler} value={Price}/>
                <br />
                <br />
                <div style={{ padding: '1rem 0rem' }}>
                    카테고리
                </div>
                <Select defaultValue="Select" onChange={categoryChangeHandler} value={Category} style={{ width: '8rem'}}>
                    {/* <option></option> */}
                    {Categories.map(item => (
                        <Option key={item.key} value={item.key}>{item.value}</Option>
                    ))}
                </Select>
                <br />
                <br />

                
                <div style={{ padding: '1rem 0rem' }}>
                    사이즈
                </div>
                <SizeList list={Sizes} ondelete={handleRemoveSize}/>
                <Input name="size" onChange={updateSize} value={NewSize}/>
                <div style={{ padding: '1rem 0rem' }}>
                <Button onClick={sizesHandler}>사이즈 추가</Button>
                </div>
                <br />
                <br />
                
                <div style={{ padding: '1rem 0rem' }}>
                    색상
                </div>
                <SizeList list={Colors} ondelete={handleRemoveColor}/>
                <Input name="color" onChange={updateColor} value={NewColor}/>
                <div style={{ padding: '1rem 0rem' }}>
                <Button onClick={colorsHandler}>색상 추가</Button>
                </div>
                

                <br />
                <br />
                <Button type="submit" onClick={submitHandler}>
                    확인
                </Button>
                <br />
                <br />
                <br />
                <br />
                <br />
            </Form>
            </div>
        </div>
    )
}

export default UploadShoesPage
