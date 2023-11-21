import { addNewProduct } from 'API/ProductService'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const NewProductForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [size, setSize] = useState('')
  const [file, setFile] = useState({
    image_file: null,
    image_preview: '',
  })
  const dispatch = useDispatch()
  const id = useSelector((state) => state.types)
  console.log(id)
  const handleAction = () => {
    if (name.trim().length) {
      dispatch(addNewProduct({ name, file, id, price, description, size }))
    }
  }
  function handleChange(e) {
    let image_as_base64 = URL.createObjectURL(e.target.files[0])
    let image_as_files = e.target.files[0]
    setFile({
      image_preview: image_as_base64,
      image_file: image_as_files,
    })
  }
  return (
    <label>
      <input
        placeholder="Name product"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
      <input
        placeholder="Price product"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <img src={file.image_preview} />
      <button onClick={handleAction}>Add </button>
    </label>
  )
}

export default NewProductForm
