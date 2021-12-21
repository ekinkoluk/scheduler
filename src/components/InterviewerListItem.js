import React from "react";
import classNames from "classnames";
import 'components/InterviewerListItem.scss';



export default function InterviewerListItem(props) {
  const { id, name, avatar, selected, onChange } = props;

  let interviewerClass = classNames('interviewers__item', {
		'interviewers__item--selected': selected
	});

  return (
    <li className={ interviewerClass } onClick={ onChange }>
      <img
        className='interviewers__item-image'
        id={ id }
        src={ avatar }
        alt={ name }
      />
      { props.selected && props.name }
    </li>
  );
} 