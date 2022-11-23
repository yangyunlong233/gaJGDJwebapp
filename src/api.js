/*
  * 采用接口：/api/doc/list/${id}/${limited}
  * 接口方法：按栏目 id 取得栏目列表，用于版块显示
  * @params
  *     limited: 多少条
  *     id: 所在栏目 id
  */
async function getColumnList (id, limited) {
  let contains = []
  await this.$axios.get(`/api/doc/list/${id}/${limited}`)
    .then(response => {
      contains = response.data.data
      // console.log(`get list ${limited} from ${id}`, response.data)
    })
    .catch(error => {
      // this.$router.push('/404')
      console.log(error)
    })
  return contains
}

/*
  * 采用接口：/api/doc/recUpdate/${limited}/${page}
  * 接口方法：取最后更新的内容，综合了多个板块内容
  * @params
  *     limited: 分页每页多少条
  *     page: 第几页
  */
async function getUpgradeList (limited, page) {
  let contains = []
  await this.$axios.get(`/api/doc/recUpdate/${limited}/${page}`)
    .then(response => {
      contains = response.data.data
      // console.log(`get upgrade list, ${limited}/${page}`, response.data.data)
    })
    .catch(error => {
      // this.$router.push('/404')
      console.log(error)
    })
  return contains
}

/*
  * 采用接口：/api/links/body/${groupId}
  * 接口方法：从组里取文字链接
  * @params
  *     groupId: 组 id
  */
async function getGroupLinks (groupId) {
  let contains = []
  await this.$axios.get(`/api/links/body/${groupId}`)
    .then(response => {
      contains = response.data.data
      // console.log(`get group links from ${groupId}`, response.data.data)
    })
    .catch(error => {
      // this.$router.push('/404')
      console.log(error)
    })
  return contains
}

/*
  * 采用接口：/api/images/body/${groupId}
  * 接口方法：从组里取图片链接，用作广告
  * @params
  *     groupId: 组 id
  */
async function getGroupImgLinks (groupId) {
  let contains = []
  await this.$axios.get(`/api/images/body/${groupId}`)
    .then(response => {
      contains = response.data.data
      // console.log(`get group img links from ${groupId}`, response.data.data)
    })
    .catch(error => {
      // this.$router.push('/404')
      console.log(error)
    })
  return contains
}

/*
  * 采用接口：/api/doc/searchAll/${limited}/${page}?key=${key}
  * 接口方法：关键字搜索
  * @params
  *     key: 关键字
  *     limited: 分页每页多少条
  *     page: 第几页
  */
async function postSearch (limited, page, key) {
  let contains = []
  await this.$axios.post(`/api/doc/searchAll/${limited}/${page}?key=${key}`, {})
    .then(response => {
      contains = response.data
      // console.log(`search key ${key}`, response.data)
    })
    .catch(error => {
      // this.$router.push('/404')
      console.log(error)
    })
  return contains
}

/*
  * 采用接口：/api/doc/imgList?borderId=${ids}&limitSize=${limited}
  * 接口方法：从版块 id 取图片列表条目
  * @params
  *     idArray: 需要提取的版块 id  *Array
  *     limited: 取多少条
  */
async function getImgList (idArray, limited) {
  const ids = idArray.join(',')
  let contains = []
  await this.$axios.get(`/api/doc/imgList?borderId=${ids}&limitSize=${limited}`)
    .then(response => {
      contains = response.data.data
      // console.log(`get img list in id ${ids},limited:${limited}`, response.data.data)
    })
    .catch(error => {
      // this.$router.push('/404')
      console.log(error)
    })
  return contains
}

export {
  getColumnList,
  getUpgradeList,
  getGroupLinks,
  getGroupImgLinks,
  postSearch,
  getImgList
}
