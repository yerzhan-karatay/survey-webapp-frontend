import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers';
import {
  fetchGetSurveyFullAction, actionSurveyFullAction,
  fetchGetResponseAnswersAction,
} from '../../actions';
import Spin from '../../components/Spin';

interface SurveyDetailProps {
  surveyId: number;
  responseId: number;
}

const ResponseDetail: React.FC<SurveyDetailProps> = ({ surveyId, responseId }) => {
  const dispatch = useDispatch();
  const { survey, questions } = useSelector((state: State) => state.getSurveyFull);
  const { list, isFetching } = useSelector((state: State) => state.getReponseAnswers);

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

  useEffect(() => {
    return () => {
      dispatch(fetchGetResponseAnswersAction.request({ surveyId, responseId }));
    };
  }, [dispatch, surveyId, responseId]);

  return (
    <div className="survey-block">
      {isFetching ? <Spin size="md" /> : (
        <>
          <div className="survey-block__greeting my-10">
            View my Survey Reply
            <br />
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
                        <div
                          key={`o-block-${index}-${opIndex}`}
                          className="flex items-center"
                        >
                          <input
                            type="radio" name={`o-block-${index}`}
                            checked={list.filter(
                              item => item.question_id === question.id && item.option_id === option.id,
                            ).length === 1}
                            disabled
                            value={option.id}
                          />
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

export default ResponseDetail;
