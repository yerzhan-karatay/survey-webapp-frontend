import React from 'react';
import classNames from 'classnames';
import Spin from '../Spin';

interface FormProps {
  children: any;
  className?: string;
  isFetching?: boolean;
  errorMessage?: string;
  onSubmit: Function;
  submitLabel?: string;
};

const Form: React.FC<FormProps> = ({ 
  children, className, onSubmit, submitLabel = "Submit",
  isFetching = false, errorMessage = "",
}) => {
  const classes = classNames(className, {
    'common-form': true,
  });

  return (
    <form className={classes}>
      {children}
      {!isFetching && errorMessage && (<div className="common-form__error">{errorMessage}</div>)}
      <button
        type="submit"
        disabled={isFetching}
        onClick={(e) => {
          e.preventDefault();
          onSubmit();
        }}className="common-form__submit btn">
        {isFetching ? (<><Spin /> <span className="inline">Loading</span></>) : submitLabel}
      </button>
    </form>
  );
};

export default Form;