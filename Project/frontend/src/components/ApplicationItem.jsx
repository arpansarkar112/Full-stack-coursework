import { useDispatch } from 'react-redux';
import { deleteApplication } from '../features/applications/applicationSlice';

function ApplicationItem({ application }) {
  const dispatch = useDispatch();

  return (
    <div className='application'>
      <div>{new Date(application.createdAt).toLocaleString('en-US')}</div>
      <h2>{application.company}</h2>
      <p>Role: {application.role}</p>
      <div className={`status status-${application.status.toLowerCase()}`}>
        {application.status}
      </div>
      <button
        onClick={() => dispatch(deleteApplication(application._id))}
        className='close'
      >
        X
      </button>
    </div>
  );
}

export default ApplicationItem;
