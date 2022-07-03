import {
	ChangeEvent,
	ReactNode,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import Styles from '../../styles/auth.module.scss';
import { useSession, getSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { BsGoogle } from 'react-icons/bs';
import Loader from '../../components/tools/loader';
import toast, { Toaster } from 'react-hot-toast';
import { NavContext } from '../../components/context/StateContext';

const SignIn = ({}) => {
	const { status, data } = useSession();
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const [register, setRegister] = useState({
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		password2: '',
	});
	const [loading, setLoading] = useState(false);
	const [signUpAccount, setSignUpAccount] = useState(false);
	const [signInAccount, setSignInAccount] = useState(true);
	const { setUserData } = useContext(NavContext);

	const password = useRef<HTMLInputElement>(null!);
	const password1 = useRef<HTMLInputElement>(null!);
	const password2 = useRef<HTMLInputElement>(null!);

	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

	let handletext = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		let name = e.target.name;
		setFormData({ ...formData, [name]: value });
	};

	let handletextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		let name = e.target.name;
		setRegister({ ...register, [name]: value });
	};

	const { query } = useRouter();
	const callback = query.callbackUrl;

	let signInWithGoogle = () => {
		setLoading(true);
		signIn('google', { callbackUrl: `${callback}` }).then(function (result) {
			console.log(result);
			if (result?.error !== null) {
				if (result?.status === 401) {
					notifyError('Incorrect Credentials');
				} else {
					notifyError('Oops, something went wrong. Please try again');
				}
			} else {
				//getuserData
				//set userData
				setLoading(false);
				// console.log(result);
				// router.push(result.url);
			}
		});
	};

	let signInWithCredentials = async () => {
		if (formData.password != '' && formData.username != '') {
			setLoading(true);
			const data = await signIn('credentials', {
				redirect: false,
				...formData,
			}).then(function (result) {
				if (result?.error !== null) {
					if (result?.status === 401) {
						notifyError('Incorrect Credentials');
					}
					setLoading(false);
				} else {
					setLoading(false);

					// console.log(result);
					// router.push(result.url);
				}
			});
		} else {
			notifyError('Fill in all fields.');
		}
	};

	let togglePassword = (e: ChangeEvent<HTMLInputElement>) => {
		e.target.checked
			? (password.current.type = 'text')
			: (password.current.type = 'password');
	};

	let togglePasswordSignUp = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			password1.current.type = 'text';
			password2.current.type = 'text';
		} else {
			password1.current.type = 'password';
			password2.current.type = 'password';
		}
	};

	let signTo = () => {
		setSignInAccount(!signInAccount);
		setSignUpAccount(!signUpAccount);
	};

	return (
		<div className={Styles.container}>
			<Toaster position='bottom-left' />
			<div className={Styles.innerContainer}>
				<div>
					{signInAccount && (
						<form className={Styles.form}>
							<div className={Styles.logInHeader}>
								<div>
									<AutoStoriesIcon className={Styles.icon} />
								</div>
								<div className={Styles.text}>Shule Account</div>
							</div>
							<div className={Styles.credential}>
								<input
									type='text'
									value={formData.username}
									placeholder={`Username`}
									name={'username'}
									onChange={(event) => {
										handletext(event);
									}}
									autoComplete='off'
									autoCorrect='off'
									spellCheck={false}
								/>
								<input
									ref={password}
									type='password'
									value={formData.password}
									placeholder={`Password`}
									name={`password`}
									onChange={(event) => {
										handletext(event);
									}}
									autoComplete='off'
									autoCorrect='off'
									spellCheck={false}
								/>
								<div className={Styles.check}>
									<input
										type='checkbox'
										onChange={(e) => {
											togglePassword(e);
										}}
									/>
									Show Password
								</div>
							</div>
							<div onClick={signInWithCredentials} className={Styles.button}>
								Sign In
							</div>
							<div className={Styles.separator}>
								<hr className={Styles.line} />
								<div className={Styles.or}>Or</div>
								<hr className={Styles.line} />
							</div>
							<div className={Styles.button} onClick={signInWithGoogle}>
								<BsGoogle className={Styles.google} />
								<div>Sign in with Google</div>
							</div>
							<div className={Styles.separator}>
								<hr className={Styles.line} />
								<div className={Styles.or}>New User</div>
								<hr className={Styles.line} />
							</div>
							<div className={Styles.buttonSignUp} onClick={signTo}>
								<div>Sign Up</div>
							</div>
						</form>
					)}
				</div>
				<div>
					{signUpAccount && (
						<form className={Styles.form}>
							<div className={Styles.logInHeader}>
								<div>
									<AutoStoriesIcon className={Styles.icon} />
								</div>
								<div className={Styles.text}>Register to Shule</div>
							</div>
							<div className={Styles.credential}>
								<input
									type='text'
									value={register.firstName}
									placeholder={`First Name`}
									name={'firstName'}
									onChange={(event) => {
										handletextChange(event);
									}}
									autoComplete='off'
									autoCorrect='off'
									spellCheck={false}
								/>
								<input
									type='text'
									value={register.lastName}
									placeholder={`Last Name`}
									name={'lastName'}
									onChange={(event) => {
										handletextChange(event);
									}}
									autoComplete='off'
									autoCorrect='off'
									spellCheck={false}
								/>
								<input
									type='text'
									value={register.username}
									placeholder={`Username`}
									name={'username'}
									onChange={(event) => {
										handletextChange(event);
									}}
									autoComplete='off'
									autoCorrect='off'
									spellCheck={false}
								/>
								<input
									ref={password1}
									type='password'
									value={register.password}
									placeholder={`Password`}
									name={`password`}
									onChange={(event) => {
										handletextChange(event);
									}}
									autoComplete='off'
									autoCorrect='off'
									spellCheck={false}
								/>
								<input
									ref={password2}
									type='password'
									value={register.password2}
									placeholder={`Retype Password`}
									name={`password2`}
									onChange={(event) => {
										handletextChange(event);
									}}
									autoComplete='off'
									autoCorrect='off'
									spellCheck={false}
								/>
								<div className={Styles.check}>
									<input
										type='checkbox'
										onChange={(e) => {
											togglePasswordSignUp(e);
										}}
									/>
									Show Password
								</div>
							</div>
							<div onClick={signInWithCredentials} className={Styles.button}>
								Sign Up
							</div>

							<div className={Styles.separator}>
								<hr className={Styles.line} />
								<div className={Styles.or}>Already User</div>
								<hr className={Styles.line} />
							</div>
							<div className={Styles.buttonSignUp} onClick={signTo}>
								<div>Sign In</div>
							</div>
						</form>
					)}
				</div>
				<div className={Styles.loader}>{loading && <Loader />}</div>
			</div>
		</div>
	);
};

export default SignIn;

//*Removing default search bar :)
SignIn.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
