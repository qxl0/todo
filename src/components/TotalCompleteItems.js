import React from 'react';
import { connect } from 'react-redux';

const TotalCompleteItems = ({todoItems}) => {
	const count = todoItems.filter(item => item.completed).length;
	return <h4 className='mt-3'>Total Complete Items: {count}</h4>;
};

const mapStateToProps = state => {
	return {
		todoItems: state.todos
	};
};

export default connect(mapStateToProps, null)(TotalCompleteItems);
