import { editNewCategory } from 'API/ProductService'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const EditCategoryForm = (category) => {
  const { id, name, index } = category

  const [sname, setName] = useState(name)
  const [sindex, setIndex] = useState(index)
  const [sfile, setFile] = useState({
    image_file: null,
    image_preview: '',
  })
  const dispatch = useDispatch()
  const handleAction = () => {
    if (sname.trim().length) {
      dispatch(editNewCategory({ sname, sfile, id, sindex }))
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
        placeholder="Name category"
        value={sname}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="index"
        value={sindex}
        onChange={(e) => setIndex(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <img src={sfile.image_preview} />
      <button onClick={handleAction}>Add </button>
    </label>
  )
}

export default EditCategoryForm
