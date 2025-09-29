# git branch

## 브렌치 명령

### `git branch`

- git 프로젝트의 브렌치 목록 출력

### `git branch <브랜치명>`

- 새로운 브렌치 생성
- 작업 공간을 생성

### `git swith <브렌치명>`

- 브렌치 전환
- 작업 공간을 바꾸다.

## 서브(기능) 브렌치 워크플로우 

1. 브랜치 생성 
2. 브랜치 전환 
3. 작업
4. `git add.`
5. `git commit -m "커밋 메세지`
6. 브렌치 전환 `git switch main`
7. 브렌츠 병합 `git merge <newbranch>`
8. 브렌치 삭제 `git branch -d <newbranch>`
- 추후 문제 발생 가능성: 동일한 브렌치명을 못 사용한다는 문제  


### `git branch -d <브렌치명>`
- 병합이 된 브렌치만 삭제 

### `git branch -D <브렌치명>`
- 병합이 안됨 브렌치도 삭제(강제 삭제) 
- 조심히 사용해야 한다. 
