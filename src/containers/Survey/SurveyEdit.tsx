import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers';
import {
  fetchGetSurveyFullAction,
  actionSurveyFullAction,
  fetchUpdateSurveyAction,
  updateSurveyAction,
} from '../../actions';
import Spin from '../../components/Spin';

interface SurveyEditProps {
  surveyId: number;
}

const SurveyEdit: React.FC<SurveyEditProps> = ({ surveyId }) => {
  const { survey, questions } = useSelector((state: State) => state.getSurveyFull);
  const { title, isFetching } = useSelector((state: State) => state.updateSurvey);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(actionSurveyFullAction.clear());
      dispatch(updateSurveyAction.clear());
    };
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(fetchGetSurveyFullAction.request({ surveyId }));
    };
  }, [dispatch, surveyId]);

  function handleUpdate(key: string, value: string) {
    dispatch(updateSurveyAction.update({ key, value }));
  }

  function handleSubmit() {
    dispatch(fetchUpdateSurveyAction.request({
      title,
      id: surveyId,
      user_id: survey.user_id,
    }));
  }

  useEffect(() => {
    handleUpdate('title', survey.title);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, survey.title]);

  return (
    <div className="survey-block">
      {isFetching ? <Spin size="md" /> : (
        <>
          <div className="survey-block__greeting my-10">
            Survey Edit page - only survey title is editable in V1
          </div>
          <form className="grid gap-4 grid-cols-10 mb-5">
            <input
              required
              className="common-form__group__input col-span-8"
              type="text"
              placeholder="Survey title"
              value={title}
              onChange={(e) => {
                handleUpdate('title', e.target.value);
              }}
            />
            <button
              className="btn bg-green-300"
              onClick={() => handleSubmit()}
            >
              Save
            </button>
          </form>
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

export default SurveyEdit;
