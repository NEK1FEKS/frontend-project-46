install:
	npm ci
publish:
	npm publish --dry-run
	npm link --force
lint:
	npx eslint .
gendiff:
	node bin/gendiff.js
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-covarage:
	nom test -- --coverage --coverageProvider=v8