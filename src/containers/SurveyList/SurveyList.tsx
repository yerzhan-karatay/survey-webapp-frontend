import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers';
import { fetchGetSurveysAction } from '../../actions';
import history from '../../history';

const SurveyList: React.FC = () => {
  // TODO: show number of responses per survey - more detailed info
  const dispatch = useDispatch();
  const { list: surveys } = useSelector((state: State) => state.getSurveyList);

  useEffect(() => {
    return () => {
      dispatch(fetchGetSurveysAction.request());
    };
  }, [dispatch]);

  return (
    <div className="survey-list">
      <div className="survey-list__header">
        <span>List of surveys you created</span>
        <button
          className="btn btn--default bg-green-300"
          onClick={() => history.push('/survey/new')}
        >
          Create new
        </button>
      </div>
      <div className="survey-list__content">
        <table className="w-full">
          <thead>
            <tr>
              <th>Survey title</th>
              <th>Create date</th>
            </tr>
          </thead>
          <tbody>
            {surveys.map(survey => {
              return (
                <tr
                  key={survey.id}
                  onClick={() => history.push(`/survey/${survey.id}/detail`)}
                >
                  <th>{survey.title}</th>
                  <th>{survey.created}</th>
                </tr>
              );
            })}
            {surveys.length === 0 && (
              <tr><th colSpan={2}>You do not have any created surveys</th></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyList;