import keymirror from 'keymirror'

export default {
  actionTypes : keymirror({
    CHANGE_APP_PAGE : null,
    GET_GALLERY  : null,
    GET_GALLERY_COMPLETED : null,
    GET_GALLERY_FAILED : null,
    ADD_RESOURCE : null,
    ADD_RESOURCE_COMPLETED : null,
    ADD_RESOURCE_FAILED : null,
    DELETE_RESOURCE : null,
    DELETE_RESOURCE_COMPLETED : null,
    DELETE_RESOURCE_FAILED : null
  })
}

