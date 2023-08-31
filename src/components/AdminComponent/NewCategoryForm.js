import { addNewCategory } from 'API/ProductService'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const NewCategoryForm = () => {
  const [name, setName] = useState('')
  const [index, setIndex] = useState('')
  const [file, setFile] = useState({
    image_file: null,
    image_preview: '',
  })
  const dispatch = useDispatch()

  const handleAction = () => {
    if (name.trim().length) {
      dispatch(addNewCategory({ name, file, index }))
      setName('')
    }
  }
  console.log(file)
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
        placeholder="Name category"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="index"
        value={index}
        onChange={(e) => setIndex(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <img src={file.image_preview} />
      <button onClick={handleAction}>Add </button>
    </label>
  )
}

export default NewCategoryForm
