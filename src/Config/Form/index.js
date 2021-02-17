import {useState} from 'react';

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);
  return [
    form,
    (type, value) => {
      if (type === 'reset') {
        return setForm(initialValue);
      }
      return setForm({...form, [type]: value});
    },
  ];
};

export default useForm;
