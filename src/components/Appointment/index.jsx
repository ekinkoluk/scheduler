
import React from "react";
import Show from "./Show";
import Header from "./Header";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode";
import './styles.scss';


const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';



export default function Appointment(props) {
  const { id, time, interview } = props;
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  )
  return (
    <article className='appointment'>
       <Header time={ time } />
       { mode === EMPTY && <Empty onAdd={() => transition(CREATE)} /> } 
      { mode === SHOW && (
        <Show 
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      { mode === CREATE &&
        <Show

        /> }
    </article>
  );
} 