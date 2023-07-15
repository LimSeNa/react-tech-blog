import AuthForm from "../../components/auth/AuthForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm} from "../../modules/auth";
import {useEffect} from "react";

const LoginForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.login
    }));

    const onChange = e => {
        const {value, name} = e.target;

        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
    };

    // 컴포넌트가 처음 렌더링될 때 form을 초기화
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return (
        <AuthForm type="login"
                  form={form}
                  onChange={onChange}
                  onSubmit={onSubmit}
        />
    );
};

export default LoginForm;