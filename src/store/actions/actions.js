export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUB = "SUB";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
	return {
		type: INCREMENT,
	};
};

export const decrement = () => {
	return {
		type: DECREMENT,
	};
};

export const add = (num) => {
	return {
		type: ADD,
		value: num,
	};
};

export const sub = (num) => {
	return {
		type: SUB,
		value: num,
	};
};

export const save_result = (result) => {
	return {
		type: STORE_RESULT,
		result: result,
	};
};

export const store_result = (result) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(save_result(result));
		}, 2000);
	};
};

export const delete_result = (id) => {
	return {
		type: DELETE_RESULT,
		resultElId: id,
	};
};
