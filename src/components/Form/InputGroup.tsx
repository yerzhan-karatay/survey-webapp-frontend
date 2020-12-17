import React from 'react';
import classNames from 'classnames';
// TODO: add message below the input

interface InputGroupProps {
  children?: any;
  label: string;
  className?: string;
  isRequired?: boolean;
  onChange: Function;
  placeholder?: string;
  type: string;
  name: string;
};

const InputGroup: React.FC<InputGroupProps> = ({ 
  children, label, isRequired = false, className, onChange, placeholder, type, name,
}) => {
  const groupClasses = classNames(className, {
    'common-form__group': true,
  });

  const labelClasses = classNames({
    'common-form__group__label': true,
    'common-form__group__label--required': isRequired,
  });

  function handleUpdate(value: string) {
    onChange(value);
  }

  return (
    <div className={groupClasses}>
      <label className={labelClasses}>{label}</label>
      <input
        required={isRequired}
        className="common-form__group__input"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleUpdate(e.target.value)}
      />
      {children}
    </div>
  );
};

export default InputGroup;