# demo-cypress
Foe demo and training

## Run test locally

### Install dependencies

```
yarn install
```

### Run test

```
yarn test
```

### Run test with tag

```
yarn test --env tags=@start
```

**Note:** report file can be found at .\cypress\reports\html\

## Run test in Docker

### Build image

```
docker build . -t demo-cypress
```

### Create folder to store report

```
mkdir c:\reports
```

### Run container

```
docker run --rm -v c:\reports:/opt/app/cypress/reports demo-cypress
```

**Note:** report file can be found at c:\reports\html\
