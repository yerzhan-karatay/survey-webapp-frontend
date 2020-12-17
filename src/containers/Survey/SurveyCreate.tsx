import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers';
import { fetchPostSurveyFullAction, createSurveyFullAction } from '../../actions';
import { Form, InputGroup } from '../../components/Form';
import { QuestionRequest } from '../../models';
function SurveyCreate() {
  const { title, questions, isFetching, error } = useSelector((state: State) => state.createSurveyFull);
  const sampleQuesOpt = {
    title: '',
    options: ['', '', ''],
  };
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(createSurveyFullAction.clear());
    };
  }, [dispatch]);

  function handleUpdate(key: string, value: string | QuestionRequest[]) {
    dispatch(createSurveyFullAction.update({ key, value }));
  }

  function handleSubmit() {
    // TODO: move verification process to saga
    if (!title || questions.length === 0) {
      handleUpdate('error', 'Please fill out all required fields');
    } else {
      // TODO: add validation for empty question or option before submit
      dispatch(fetchPostSurveyFullAction.request({ title, questions }));
    }
  }

  return (
    <div className="survey-block">
      <div className="survey-block__greeting mt-10">
        <span className="text-xl font-bold">Create survey page
        </span> - add survey title and at least 1 question with options for creating a new Survey.
      </div>
      <Form
        isFetching={isFetching}
        errorMessage={error}
        onSubmit={() => handleSubmit()}
        submitLabel="Create Survey"
        className="my-10"
      >
        <InputGroup
          label="Enter survey title"
          isRequired={true}
          onChange={(val: string) => handleUpdate('title', val)}
          placeholder="Enter survey title"
          type="text"
          name="title"
          value={title}
        />
        <button
          className="btn bg-green-300 mb-5"
          onClick={() => {
            let temp = questions;
            temp.push(sampleQuesOpt);
            handleUpdate('questions', temp);
          }}
        >
          Add question with options block
        </button>

        {
          questions.map((question, index) => {
            return (
              <div key={`q-block-${index}`} className="survey-block__form__question-group">
                <div className="flex items-center mb-5">
                  <InputGroup
                    className="mr-auto w-full pr-10"
                    inputClassName="w-full mr-10"
                    label={`Enter question #${index + 1}`}
                    isRequired
                    onChange={(val: string) => {
                      let temp = questions;
                      temp[index].title = val;
                      handleUpdate('questions', temp);
                    }}
                    placeholder="Question title"
                    type="text"
                    name={`q-${index}`}
                    value={question.title}
                  />
                  <button 
                    disabled={questions.length === 1}
                    className={`${questions.length === 1 && 'cursor-not-allowed'} btn bg-red-300 h-10`}
                    onClick={(e) => {
                      e.preventDefault();
                      let temp = questions;
                      temp.splice(index, 1);
                      handleUpdate('questions', temp);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <div>
                  {question.options.map((option, opIndex) => {
                    return (
                      <div key={`o-block-${index}-${opIndex}`} className="grid gap-4 grid-cols-10 mb-5">
                        <input
                          required
                          className="common-form__group__input col-span-8"
                          type="text"
                          placeholder="Option title"
                          value={option}
                          onChange={(e) => {
                            let temp = questions;
                            temp[index].options[opIndex] = e.target.value;
                            handleUpdate('questions', temp);
                          }}
                        />
                        <button
                          className="btn bg-green-300"
                          onClick={(e) => {
                            e.preventDefault();
                            let temp = questions;
                            temp[index].options.push('');
                            handleUpdate('questions', temp);
                          }}
                        >
                          +
                        </button>
                        <button
                          disabled={question.options.length < 3}
                          className={`${question.options.length < 3 && 'cursor-not-allowed'} btn bg-red-300`}
                          onClick={(e) => {
                            e.preventDefault();
                            let tempQues = questions;
                            let tempOpt = tempQues[index].options;
                            tempOpt.splice(opIndex, 1);
                            tempQues[index].options = tempOpt;
                            handleUpdate('questions', tempQues);
                          }}
                        >
                          -
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        }
      </Form>
    </div>
  );
}

export default SurveyCreate;
