import React, { useState } from 'react'
import {Typography, Button, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';
// import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';
import SizeList from '../../utils/SizeList'
import SizeItem from '../../utils/SizeItem'
// const { Title } = Typography;
const { TextArea } = Input;

const Categories = [
    { key: 1, value: "Outer" },
    { key: 2, value: "Top" },
    { key: 3, value: "Bottom" },
    { key: 4, value: "Shoes" },
    { key: 5, value: "Bag" }
]




function UploadProductPage(props) {

    

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
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
    const categoryChangeHandler = (event) => {
        setCategory(event.currentTarget.value)
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
            price: Price,
<<<<<<< HEAD
            images: Images,
            continents: Continent
        }

        Axios.post('/api/product', body)
            .then(response => {
                if (response.data.success) {
                    alert('상품 업로드에 성공 했습니다.')
                    props.history.push('/')
                } else {
                    alert('상품 업로드에 실패 했습니다.')
                }
            })
    }


    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2> 여행 상품 업로드</h2>
            </div>

            <Form onSubmit={submitHandler}>
                {/* DropZone */}
=======
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
        <div style={{maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2>상품 업로드</h2>
                {/* <Title level={2}>여행 상품 업로드</Title> */}
            </div>


            <Form onSubmit={submitHandler}>
                {/* DropZone */}

>>>>>>> a60bc97e8de03e84e7b052e780b2dd2a7eb7f62e
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>이름</label>
<<<<<<< HEAD
                <Input onChange={titleChangeHandler} value={Title} />
=======
                <Input onChange={titleChangeHandler} value={Title}/>
>>>>>>> a60bc97e8de03e84e7b052e780b2dd2a7eb7f62e
                <br />
                <br />
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description} />
                <br />
                <br />
                <label>가격($)</label>
<<<<<<< HEAD
                <Input type="number" onChange={priceChangeHandler} value={Price} />
                <br />
                <br />
                <select onChange={continentChangeHandler} value={Continent}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}> {item.value}</option>
=======
                <Input type="number" onChange={priceChangeHandler} value={Price}/>
                <br />
                <br />
                <select onChange={categoryChangeHandler}>
                    {/* <option></option> */}
                    {Categories.map(item => (
                        <option key={item.key} value={Category}>{item.value}</option>
>>>>>>> a60bc97e8de03e84e7b052e780b2dd2a7eb7f62e
                    ))}
                </select>
                <br />
                <br />
<<<<<<< HEAD
                <button type="submit">
                    확인
                </button>
            </Form>


=======

                <label>사이즈</label>
                
                <SizeList list={Sizes} ondelete={handleRemoveSize}/>
                <Input name="size" onChange={updateSize} value={NewSize}/>
                <Button onClick={sizesHandler}>사이즈 추가</Button>
                <br />
                <br />
                <label>색상</label>
                
                <SizeList list={Colors} ondelete={handleRemoveColor}/>
                <Input name="color" onChange={updateColor} value={NewColor}/>
                <Button onClick={colorsHandler}>색상 추가</Button>
                <br />
                <br />
                <Button type="submit" onClick={submitHandler}>
                    확인
                </Button>



            </Form>
>>>>>>> a60bc97e8de03e84e7b052e780b2dd2a7eb7f62e
        </div>
    )
}

export default UploadProductPage
