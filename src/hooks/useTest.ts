import {useDispatch, useSelector} from 'react-redux';
import {selectTestProp1, testAction, TestProp1Type} from '../state/slices/test';

export const useTest = () => {
	const dispatch = useDispatch();
	const dispatchTestAction = (payload: TestProp1Type) => dispatch(testAction(payload));
	const testProp1 = useSelector(selectTestProp1);
	return {testProp1, dispatchTestAction};
};
