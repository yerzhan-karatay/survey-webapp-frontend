import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers';
import { fetchGetSurveysAction, fetchDeleteSurveyAction } from '../../actions';
import history from '../../history';

const SurveyList: React.FC = () => {
  // TODO: show number of responses per survey - more detailed info
  const dispatch = useDispatch();
  const { list: surveys } = useSelector((state: State) => state.getSurveyList);
  const { isFetching } = useSelector((state: State) => state.deleteSurvey);

  useEffect(() => {
    return () => {
      dispatch(fetchGetSurveysAction.request());
    };
  }, [dispatch]);

  const deleteSurvey = (id: number) => {
    dispatch(fetchDeleteSurveyAction.request({ surveyId: id }));
  };

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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {surveys.map(survey => {
              return (
                <tr key={survey.id}>
                  <td
                    className="cursor-pointer"
                    onClick={() => window.location = `/survey/${survey.id}/detail` as unknown as Location}
                  >{survey.title}</td>
                  <td>{survey.created}</td>
                  <td>
                    <button
                      className="btn btn--default bg-green-500"
                      onClick={() => window.location = `/survey/${survey.id}/reply` as unknown as Location}
                    >
                      Go to reply
                    </button>
                    <button
                      className="btn btn--default bg-blue-500"
                      onClick={() => window.location = `/survey/${survey.id}/edit` as unknown as Location}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn--default bg-red-500"
                      disabled={isFetching}
                      onClick={() => deleteSurvey(survey.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {surveys.length === 0 && (
              <tr><td colSpan={2}>You do not have any created surveys</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyList;