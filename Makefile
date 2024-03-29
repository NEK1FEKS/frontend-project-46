install:
	npm ci
publish:
	npm publish --dry-run
	npm link --force
lint:
	npx eslint .
test:
	npx jest
test-coverage:
	npm test -- --coverage --coverageProvider=v8