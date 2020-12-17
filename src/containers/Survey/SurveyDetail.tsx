import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers';
import { fetchGetSurveyFullAction, actionSurveyFullAction } from '../../actions';
import Spin from '../../components/Spin';

interface SurveyDetailProps {
  surveyId: number;
}

const SurveyDetail: React.FC<SurveyDetailProps> = ({ surveyId }) => {
  const { survey, questions, isFetching } = useSelector((state: State) => state.getSurveyFull);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(actionSurveyFullAction.clear());
    };
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(fetchGetSurveyFullAction.request({ surveyId }));
    };
  }, [dispatch, surveyId]);

  return (
    <div className="survey-block">
      {isFetching ? <Spin size="md" /> : (
        <>
          <div className="survey-block__greeting my-10">
            Survey Detail page -
            <span className="text-xl font-bold">{survey.title}</span>
          </div>
          {
            questions.map((question, index) => {
              return (
                <div key={`q-block-${index}`} className="mb-5">
                  <div>{question.title}</div>
                  <div>
                    {question.options && question.options.map((option, opIndex) => {
                      return (
                        <div key={`o-block-${index}-${opIndex}`} className="flex items-center">
                          <input type="radio" name={`o-block-${index}`} />
                          <span className="ml-5">{option.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          }
        </>
      )}
    </div>
  );
};

export default SurveyDetail;
