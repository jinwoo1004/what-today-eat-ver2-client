import styled from "styled-components";
import { Button } from "../../components/CommonUI";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userLogin, userSession } from "../../redux/slices/userSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/dispatchHook";
import SNSLogin from "../../components/Login/SNSLogin";
import loginlogo from "../../assets/icons/logo-login-main.svg";
import { useEffect } from "react";

const SLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 5rem 1rem 2rem;
  background-color: #ffffffff;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 4rem 1rem 2rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 3rem 1rem 1.5rem;
  }
`;

const SLoginLayout = styled.div`
  flex: 1;
  max-width: 420px;
  background-color: #fff;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    max-width: 420px;
    padding: 2rem 1.5rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 95%;
    padding: 1.5rem 1rem;
  }
`;

const SForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const SLoginLogo = styled.div`
  margin-bottom: 2rem;
  img {
    width: 180px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    img {
      width: 150px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    img {
      width: 130px;
    }
  }
`;

const SErrorMsg = styled.div`
  margin-top: 4px;
  font-size: 0.75rem;
  color: red;
`;

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 0.8rem;
    font-weight: 600;
    color: #555;
  }

  input {
    padding: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    font-size: 0.9rem;
    background-color: #fafafa;

    &:focus {
      outline: none;
      border-color: #a5a5a5;
      background-color: #fff;
    }

    @media ${({ theme }) => theme.device.mobile} {
      padding: 8px;
      font-size: 0.8rem;
    }
  }
`;

const StyledLoginButton = styled(Button)`
  margin-top: 1rem;
  background-color: #0095f6;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  padding: 10px;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

const SDivider = styled.div`
  margin: 20px 0;
  text-align: center;
  color: #999;
  font-size: 0.8rem;
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 20%;
    height: 1px;
    background: #dbdbdb;
    vertical-align: middle;
    margin: 0 8px;
  }
`;

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { sessionStatus } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (sessionStatus) navigate("/");
  }, [sessionStatus]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const loginData = {
      username: data.email,
      password: data.password,
    };

    // 로그인 후 로그인 상태 검증
    dispatch(userLogin(loginData)).then(() => dispatch(userSession()));
  };

  return (
    <SLoginWrapper>
      <SLoginLayout>
        <SLoginLogo>
          <img src={loginlogo} alt="logo" />
        </SLoginLogo>
        <SForm onSubmit={handleSubmit(onSubmit)}>
          <StyledField>
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              type="text"
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value: /^\S+@\S+\.\S+/,
                  message: "이메일 형식을 확인해주세요.",
                },
              })}
            />
            <SErrorMsg>
              {errors.email && (
                <small role="alert">{errors.email.message}</small>
              )}
            </SErrorMsg>
          </StyledField>

          <StyledField>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                minLength: {
                  value: 8,
                  message: "8자리 이상을 입력해주세요.",
                },
              })}
            />
            <SErrorMsg>
              {errors.password && (
                <small role="alert">{errors.password.message}</small>
              )}
            </SErrorMsg>
          </StyledField>

          <StyledLoginButton type="submit" disabled={isSubmitting}>
            로그인
          </StyledLoginButton>
        </SForm>

        <SDivider>또는</SDivider>

        <SNSLogin />
      </SLoginLayout>
    </SLoginWrapper>
  );
};

export default LoginForm;
