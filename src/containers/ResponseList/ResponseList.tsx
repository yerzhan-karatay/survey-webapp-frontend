import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers';
import { fetchGetResponsedSurveysAction } from '../../actions';
import history from '../../history';

const ResponseList: React.FC = () => {
  const dispatch = useDispatch();
  const { list: responses } = useSelector((state: State) => state.getResponsedSurveys);

  useEffect(() => {
    return () => {
      dispatch(fetchGetResponsedSurveysAction.request());
    };
  }, [dispatch]);

  return (
    <div className="response-list">
      <div className="response-list__header">
        <span>List of surveys you responded</span>
      </div>
      <div className="response-list__content">
        <table className="w-full">
          <thead>
            <tr>
              <th>Survey title</th>
              <th>Response date</th>
            </tr>
          </thead>
          <tbody>
            {responses.map(response => {
              return (
                <tr
                  key={response.responseId}
                  onClick={() => history.push(`/survey/${response.surveyId}/response/${response.responseId}`)}
                >
                  <th>{response.surveyTitle}</th>
                  <th>{response.created}</th>
                </tr>
              );
            })}
            {responses.length === 0 && (
              <tr><th colSpan={2}>You did not respond any surveys</th></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponseList;