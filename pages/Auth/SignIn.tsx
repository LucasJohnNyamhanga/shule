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
	const [loading, setLoading] = useState(false);
	const { setUserData } = useContext(NavContext);

	const password = useRef<HTMLInputElement>(null!);

	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

	let handletext = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		setFormData({ ...formData, username: value });
	};

	let handletextPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		setFormData({ ...formData, password: value });
	};

	const { query } = useRouter();
	const callback = query.callbackUrl;

	let signInWithGoogle = () => {
		setLoading(true);
		signIn('google', { callbackUrl: `${callback}` }).then(function (result) {
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

	return (
		<div className={Styles.container}>
			<Toaster position='bottom-left' />
			<div className={Styles.innerContainer}>
				<form className={Styles.form}>
					<div className={Styles.logInHeader}>
						<div>
							<AutoStoriesIcon className={Styles.icon} />
						</div>
						<div className={Styles.text}>Shule Account.</div>
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
								handletextPassword(event);
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
				</form>
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
