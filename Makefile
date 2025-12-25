install:
	npm ci
	chmod +x bin/brain-games.js

brain-games:
	node brain-games.js




publish:
	npm publish --dry-run