install:
	npm ci
publish:
	npm publish --dry-run
	npm link --force
lint:
	npx eslint .
gendiff:
	node bin/gendiff.js