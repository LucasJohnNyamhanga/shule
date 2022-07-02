import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '../../../db/prisma';

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: 'Credentials',
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				// Add logic here to look up the user from the credentials supplied
				const userFromServer = await prisma.users.findFirst({
					where: {
						username: credentials?.username,
						password: credentials?.password,
					},
					select: {
						id: true,
						firstName: true,
						lastName: true,
						username: true,
					},
				});
				const userfound = await JSON.parse(JSON.stringify(userFromServer));

				const user = {
					id: userfound.id,
					name: `${userfound.firstName} ${userfound.lastName}`,
					email: userfound.username,
					image: '',
				};

				if (user) {
					// Any object returned will be saved in `user` property of the JWT
					return user;
				} else {
					// If you return null then an error will be displayed advising the user to check their details.
					return null;

					// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
				}
			},
		}),
	],
	pages: {
		signIn: '/Auth/SignIn',
	},
	callbacks: {
		async session({ session, user, token }) {
			console.log('session', { session, user });
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			const userFromServer = await prisma.users.findFirst({
				where: {
					username: token.email,
				},
				select: {
					id: true,
				},
			});
			const userfound = await JSON.parse(JSON.stringify(userFromServer));
			if (userfound) {
				console.log('User Exist', { userfound });
			} else {
				console.log('User does not Exist');
				//create user
			}
			console.log('jwt', { user, token });
			return token;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
});
