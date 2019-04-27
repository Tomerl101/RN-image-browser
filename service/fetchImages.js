import axios from 'axios'
import configs from '../configs'

const fetchImagesRequest = async searchQuery => {
  try {
    return await axios.get(`${configs.SERVICE_URL}${searchQuery}`)
  } catch (error) {
    console.error(error)
  }
}

export default fetchImagesRequest
