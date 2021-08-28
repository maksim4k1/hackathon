export function editInputValue(state, payload) {
  const newFormData = [...state.formData];
  const element = newFormData.find(item => item.name === payload.name);

  element.value = payload.value;

  return {
    ...state,
    formData: newFormData
  }
}

export function submitForm(state, payload){
  if(payload){
    return {
      ...state,
      error: payload
    }
  }
  let newFormData = [...state.formData];
  
  newFormData = newFormData.map(item => {
    item.value = "";
    return item;
  })

  return {
    ...state,
    formData: newFormData,
    error: ""
  }
}