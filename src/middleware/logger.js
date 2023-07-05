const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log("The action: ", action);
	const results = next(action);
	console.log("the new state: ", store.getState());
	console.groupEnd();
	return results;
};

export default logger