import callApi from '../callApi'
import { GOOGLE_API_KEY, GOOGLE_BOOKS_BASE_URL } from '../../constants'

export const queryVolumes = ({
  queryString,
  maxResults = 10,
  startIndex = 0,
}) => callApi({
  url: `${GOOGLE_BOOKS_BASE_URL}/volumes?q=${queryString}`,
  method: 'get',
  params: {
    key: GOOGLE_API_KEY,
    maxResults,
    startIndex,
  },
})
