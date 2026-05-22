import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ApplicationForm from '../components/ApplicationForm';
import ApplicationItem from '../components/ApplicationItem';
import Spinner from '../components/Spinner';
import { getApplications, reset } from '../features/applications/applicationSlice';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { applications, isLoading, isError, message } = useSelector(
    (state) => state.applications
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
      return;
    }

    dispatch(getApplications());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Applications Dashboard</p>
      </section>

      <ApplicationForm />

      <section className='content'>
        {applications.length > 0 ? (
          <div className='applications'>
            {applications.map((application) => (
              <ApplicationItem key={application._id} application={application} />
            ))}
          </div>
        ) : (
          <h3>You have not set any applications</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
