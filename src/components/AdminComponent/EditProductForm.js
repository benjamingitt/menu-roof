import { editNewProduct } from 'API/ProductService'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const EditProductForm = (product) => {
  const { id, name, src, description, price, size } = product

  const [sname, setSname] = useState(name)
  const [sdescription, setDescription] = useState(description)
  const [sprice, setPrice] = useState(price)
  const [ssize, setSize] = useState(size)
  const [sfile, setFile] = useState({
    image_file: null,
    image_preview: '',
  })

  const dispatch = useDispatch()
  const handleAction = () => {
    if (name.trim().length) {
      dispatch(
        editNewProduct({ sname, sfile, id, sprice, sdescription, ssize }),
      )
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
      <input value={sname} onChange={(e) => setSname(e.target.value)} />
      <textarea
        name="textarea"
        onChange={(e) => setDescription(e.target.value)}
        defaultValue={sdescription ? sdescription : ''}
      ></textarea>
      <input value={sprice} onChange={(e) => setPrice(e.target.value)} />
      <input value={ssize} onChange={(e) => setSize(e.target.value)} />

      <input type="file" onChange={handleChange} />
      <img src={sfile.image_preview} />
      <button onClick={handleAction}>Edit </button>
    </label>
  )
}

export default EditProductForm
