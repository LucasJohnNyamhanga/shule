export default async function handler(req, res) {
	const { path, secret } = req.body;
	console.log({ path }, { secret });
	// Check for secret to confirm this is a valid request
	if (secret !== process.env.MY_SECRET_TOKEN) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	try {
		// this should be the actual path not a rewritten path
		// e.g. for "/blog/[slug]" this should be "/blog/post-1"
		await res.revalidate(path);
		return res.json({ revalidated: true });
	} catch (err) {
		console.log(err);
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		return res.status(500).send('Error revalidating');
	}
}
