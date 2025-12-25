install:
	npm ci
	chmod +x bin/brain-games.js

brain-games:
	node brain-games.js

brain-even:
	node brain-even.js



publish:
	npm publish --dry-run

make lint:
	npx eslint .