import * as contentful from 'contentful'

class ContentfulUtil {
  static client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  })
  
  static fetchAllProjectPosts = () => ContentfulUtil.client.getEntries({
      content_type: 'blog',
      order: '-sys.createdAt'
    })

  static fetchProjectByPathName = (pathName) => ContentfulUtil.client.getEntries({
      content_type: 'blog',
      'fields.path[in]': pathName
    })  
}
export default ContentfulUtil;