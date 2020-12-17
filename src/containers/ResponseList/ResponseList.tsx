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
                  key={response.response_id}
                  onClick={() => history.push(`/survey/${response.survey_id}/response/${response.response_id}`)}
                >
                  <td>{response.survey_title}</td>
                  <td>{response.created}</td>
                </tr>
              );
            })}
            {responses.length === 0 && (
              <tr><td colSpan={2}>You did not respond any surveys</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponseList;