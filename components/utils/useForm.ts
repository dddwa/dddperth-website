import React from 'react'

export function useForm<T>(callback: () => void, initialState: T) {
  const [values, setValues] = React.useState<T>(initialState)

  const handleSubmit = event => {
    if (event) {
      event.preventDefault()
    }
    callback()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.persist()
    setValues(prevValues => ({ ...prevValues, [event.target.name]: event.target.value }))
  }

  const resetForm = () => {
    setValues(initialState)
  }

  return {
    handleChange,
    handleSubmit,
    resetForm,
    values,
  }
}
