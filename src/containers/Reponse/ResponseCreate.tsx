import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers';
import {
  fetchGetSurveyFullAction, actionSurveyFullAction,
  fetchPostResponseAction, createResponseAction,
} from '../../actions';
import Spin from '../../components/Spin';
import { ReponseAnswerRequest } from '../../models';

interface SurveyDetailProps {
  surveyId: number;
}

const ResponseCreate: React.FC<SurveyDetailProps> = ({ surveyId }) => {
  const dispatch = useDispatch();
  const { survey, questions } = useSelector((state: State) => state.getSurveyFull);
  const { isFetching } = useSelector((state: State) => state.createResponse);
  const [resAns, setResAns] = useState<{[key: string]: number}>({});
  
  useEffect(() => {
    return () => {
      dispatch(actionSurveyFullAction.clear());
      dispatch(createResponseAction.clear());
    };
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(fetchGetSurveyFullAction.request({ surveyId }));
    };
  }, [dispatch, surveyId]);

  function handleSubmit() {
    let responsePayload:ReponseAnswerRequest[] = [];
    Object.keys(resAns).map(res => responsePayload.push({
      question_id: parseInt(res),
      option_id: resAns[res],
    }));
    // TODO: add validation for empty question or option before submit
    dispatch(fetchPostResponseAction.request({ surveyId, responseAnsList: responsePayload }));
  }

  return (
    <div className="survey-block">
      {isFetching ? <Spin size="md" /> : (
        <>
          <div className="survey-block__greeting my-10">
            Survey Reply page - This page can be shared to all users.
            <br />
            <span className="text-xl font-bold">{survey.title}</span>
          </div>
          {
            questions.map((question, index) => {
              return (
                <div key={`q-block-${index}`} className="mb-5">
                  <div>{question.title}</div>
                  <div>
                    {resAns && question.options && question.options.map((option, opIndex) => {
                      return (
                        <div
                          key={`o-block-${index}-${opIndex}`}
                          className="flex items-center"
                        >
                          <input
                            type="radio" name={`o-block-${index}`}
                            onChange={() => {
                              let temp = resAns;
                              temp[question.id] = option.id;
                              setResAns(temp);
                            }}
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
          <button
            type="submit"
            disabled={isFetching}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}className="common-form__submit btn">
            {isFetching ? (<><Spin /> <span className="inline">Loading</span></>) : 'Submit my response'}
          </button>
        </>
      )}
    </div>
  );
};

export default ResponseCreate;
