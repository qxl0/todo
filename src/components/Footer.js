import React, { useContext } from 'react'
import { TodoListContext } from './TodoListContext';
import { VisibilityFilter } from './Constants';
import  Button  from './Button';

export const CHANGE_FILTER = "CHANGE_FILTER";

const BUTTONS_FILTER = [
  {
    id: 1,
    caption: "All",
    type: CHANGE_FILTER,
    filter: VisibilityFilter.SHOW_ALL
  },
  {
    id: 2,
    caption: "Active",
    type: CHANGE_FILTER,
    filter: VisibilityFilter.SHOW_ACTIVE
  },
  {
    id: 3,
    caption: "Completed",
    type: CHANGE_FILTER,
    filter: VisibilityFilter.SHOW_COMPLETED
  }
];
export default function Footer() {
  const { state, dispatch } = useContext(TodoListContext);
  return (
    <footer>
      {BUTTONS_FILTER.map(({ id, caption, type, filter }) => (
        <Button
          disabled={state.filter === filter}
          onClick={() => dispatch({ type, payload: filter })}
          key={id}
        >
          {caption}
        </Button>
      ))}
    </footer>
  )
}