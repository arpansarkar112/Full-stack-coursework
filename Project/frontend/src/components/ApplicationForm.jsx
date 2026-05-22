import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createApplication } from '../features/applications/applicationSlice';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Pending',
  });

  const { company, role, status } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createApplication({ company, role, status }));
    setFormData({ company: '', role: '', status: 'Pending' });
  };

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='company'>Company</label>
          <input
            type='text'
            name='company'
            id='company'
            value={company}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='role'>Role</label>
          <input
            type='text'
            name='role'
            id='role'
            value={role}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='status'>Status</label>
          <select name='status' id='status' value={status} onChange={onChange}>
            <option value='Pending'>Pending</option>
            <option value='Interview'>Interview</option>
            <option value='Rejected'>Rejected</option>
            <option value='Offer'>Offer</option>
          </select>
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Application
          </button>
        </div>
      </form>
    </section>
  );
}

export default ApplicationForm;
