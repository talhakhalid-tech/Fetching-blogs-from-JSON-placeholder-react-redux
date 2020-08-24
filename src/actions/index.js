import _ from 'lodash'
import JSONplaceholder from '../APIs/JSONplaceholder';

export const fetchBlogsAndUsers = () => async (dispatch,getState) =>{
   console.log('fetching Blogs')
   await dispatch(fetchblogs())
   const userIds = _.uniq(_.map(getState().blogs,'userId'))
   userIds.forEach(userId => dispatch(fetchuser(userId)))
}

export const fetchblogs= () =>{
     return async (dispatch) => {
        const responce = await JSONplaceholder.get('/posts')
        dispatch({type: 'FETCH_BLOGS',payload: responce.data})
     }
}

export const fetchuser = (id) =>{
   return async (dispatch) => {
      const responce = await JSONplaceholder.get(`/users/${id}`)
      dispatch({type:'FETCH_USER',payload: responce.data})
   }
}

// export const fetchuser = (id) => (dispatch)=> _fetchuser(id,dispatch)
// const _fetchuser = _.memoize(async (id,dispatch) =>{
//    const responce = await JSONplaceholder.get(`/users/${id}`)
//    dispatch({type:'FETCH_USER',payload: responce.data})
// })
