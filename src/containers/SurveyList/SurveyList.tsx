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
                  <th
                    className="cursor-pointer"
                    onClick={() => history.push(`/survey/${survey.id}/detail`)}
                  >{survey.title}</th>
                  <th>{survey.created}</th>
                  <th>
                    <button
                      className="btn btn--default bg-red-500"
                      disabled={isFetching}
                      onClick={() => deleteSurvey(survey.id)}
                    >
                      Delete
                    </button>
                  </th>
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