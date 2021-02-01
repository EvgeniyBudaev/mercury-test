import {useState} from 'react'

const useForm = (initialValues, validateOnChange= false, validate) => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })

        if(validateOnChange) {
            validate({ [name]: value })
        }
    }

    const resetForm = () => {
        setValues(initialValues)
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}

export default useForm



// const useForm = (initialValues = {}) => {
//     const [values, setValues] = useState(initialValues)
//
//     const setValue = (key, value) => setValues({...values, [key]: value})
//
//     const onChange = (key) => (ev) =>
//         setValue(key, ev.target ? ev.target.value : ev)
//
//     return {
//         values,
//         reset: () => setValues(initialValues),
//         handlers: Object.keys(values).reduce(
//             (acc, key) => ({
//                 ...acc,
//                 [key]: {value: values[key], onChange: onChange(key)},
//             }),
//             {}
//         ),
//     }
// }
//
// export default useForm