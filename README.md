# 원티드 프리온보딩 코스

## Toogle.js
#### ***구현한 방법***
- 현재 토글 상태를 담고있는 변수(toggle)을 false로 초기화하여 선언한다.
- 토글 상태에 따른 토글 스타일을 서로 다른 클래스에 부여한다.
  - **ON** 상태일때 : toggle-on, toggle-right
  - **OFF** 상태일때 : toggle-off, toggle-left  
- 토글 내부의 원을 클릭했을 경우 toggle의 값이 변화시킨다.
- 삼항연산자를 활용하여 toggle값에 따른 클래스를 할당 시킨다.
- 동일한 방식으로 아래 텍스트에도 toggle의 값에 따라 문자가 바뀌도록한다.
#### ***실행방법***
- 토글 내부의 원을 클릭한다.
- 원이 반대방향으로 이동하면서 상태가 바뀌는 것을 확인할 수 있다.

## Modal.js
#### ***구현한 방법***
- 모달창의 상태를 담고있는 변수(isShowModal)을 false로 초기화하여 선언한다.
- 모달 버튼을 구현하고 모달 버튼을 클릭했을 때 'modalToggle()' method가 선언되도록 한다.
- 모달을 구현하고 isShowModal 변수에 따라 'modal-hidden' 클래스가 부여되도록 한다.
- 모달이 'modal-hidden' 클래스를 포함하고 있는 경우 'display:none' 스타일이 부여되어 보이지 않도록 한다.
#### ***실행방법***
1. Open Modal 버튼을 누른다.
2. Modal 창이 등장하는 것을 확인한다.
3. 'X' 버튼을 눌러 모달창을 종료한다.

## Tab.js
#### ***구현한 방법***
  - 현재 선택되어있는 탭(currentTab)과 화면에 보여야하는 문구(currentContent)를 담는 변수를 선언한다.
  - useEffect를 활용하여 curretnTab의 숫자가 비뀔때 마다 해당 문구로 바꾸어 준다.
  - 각 버튼 별로 click 이벤트가 발생했을 때 currentTab의 숫자를 적절하게 변경한다.
#### ***실행방법***
  1. Tab1, Tab2, Tab3의 버튼을 누른다.
  2. 버튼에 따라 아래 텍스트가 변경되는 것을 확인한다.
     - Tab1 -> ONE
     - Tab2 -> TWO
     - Tab3 -> THREE

## Tag.js
#### ***구현한 방법***
1. 태그 추가
    - input 태그에 단어를 입력한 후 'Enter' 키를 눌렀을때 입력 값이 tagList에 추가한다.
    - .includes()를 통해 현재 입력되어있는 태그가 아닌 경우에만 태그가 추가되도록 한다.
    - 입력 값을 초기화 시켜준다.
2. 태그 삭제
    - 현재 태그되어있는 단어의 'X' 표시를 눌렀을 때 'click' 이벤트가 발생하도록한다.
    - .filter()를 활용하여 현재 클릭한 태그를 tagList에서 제외한다.
3. 태그 구현
    - tagList 변수내에 존재하는 값을 .map() 함수를 통해 각 요소를 담고있는 버튼을 생성한다.
4. input 포커싱
    - 현재 입력 부분의 Focus 여부를 담고있는 변수(inputFocus)를 선언한다.
    - onFocus()를 사용해 Focus 되었을 경우 inputFocus를 true로 바꾼다.
    - onBlur()를 사용해 Focus가 해제되었을 경우 inputFocus를 false로 바꾼다.
    - 삼항연산자를 사용하여 inputFocus의 값에 따라 'tag-barder' 클래스를 부여하여 스타일이 적용될 수 있도록 한다.
#### ***실행방법***
1. 태그 추가
    - 넣고싶은 태그를 오른쪽 입력창에 입력하고 Enter키를 입력한다.
    - 우측 태그 리스트에 입력한 태그가 추가되는 것을 확인한다.
2. 태그 삭제
    - 우측 태그 리스트 중 삭제하고 싶은 태그의 'X' 버튼을 누른다.
    - 태그가 삭제되는 것을 확인한다.

## AutoComplete.js
#### ***구현한 방법***
1. 단어를 입력할때
    - 현재 자동완성 리스트가 화면에 노출되어있다면, 자동완성 리스트를 제거한다.
    - 현재까지 입력한 단어와 단어 데이터의 단어를 하나씩 다음과 같이 비교하여 true가 return될 경우, 그 단어를 포함하는 컴포넌트를 생성한다.
        - 현재까지 입력한 단어와 단어 데이터의 단어를 입력한 단어의 길이만큼 잘라 비교했을 때 두 단어가 같으면 true를 return한다.  
              ex) 현재 입력 단어: 'ap'  
                  'apple'의 경우 return true ('ap' == '"ap"ple')  
                  'agree'의 경우 return false ('ap' != '"ag"ree')
    - 생성한 컴포넌트를 상위 컴포넌트인 'search-autocomplete'에 appendChild하여 화면에 노출시킨다.
    - 최대 5개의 자동완성 단어를 노출시킨다.
    - 만약 자동완성 단어가 5개보다 적을 경우 자동완성 리스트를 제거한다.
3. 입력상태에서 방향키를 통해 autocomplete 조작
    - (↑, ↓, Enter, Esc) 4가지의 사용자 키조작에 따라 다음과 같이 각각 작동하도록 구현.
        - ↑ ( 위쪽 방향키 ) : cursorIndex 값을 +1 시키고, isSelected() method를 호출하여 다음 단어로 포커싱을 옮긴다.
        - ↓ ( 아래쪽 방향키 ) : cursorIndex의 값을 -1 시키고, isSelected() method를 호출하여 이전 단어로 포커싱을 옮긴다.
        - ENTER : 현재 가리키고 있는 자동완성 단어의 click 이벤트를 활성화시켜, 해당 단어가 자동으로 검색 바에 입력될 수 있도록 한다.
        - Esc : 현재 화면에 보여지고 있는 자동완성 리스트를 제거한다.
5. isSelected()
    - cursorIndex를 통해 현재 사용자가 포커싱하고있는 단어에 'autocomplete-selected' 클래스를 부여하는 Method
    - 현재 CursorIndex가 음수인 경우 .length - 1을 return 하고 양수인 경우 현재 포커싱하고있는 index % .length를 return하여 index가 list의 길이를 넘어가지 않도록 한다.
    - 인자로 전달받은 자동완성 단어 리스트의 currentIndex에 해당하는 단어에 'autocomplete-seleced' 클래스를 부여한다.
6. clearSelect()
    - 인자로 전달받은 자동완성 단어 리스트를 반복문을 통해 'autocomplete-selected' 클래스를 없앤다.
    - 현재 포커싱 되어있는 자동완성 단어의 디자인을 없애주는 Method
7. closeAutoComplete()
    - 현재 화면에 랜더링되어있는 자동완성 리스트를 제거한다.
    - 'search-bar' id의 하위 태그인 'search-autocomplete' 클래스를 가진 요소를 제거한다.
#### ***실행방법***
1. 원하는 글자를 입력한다.
2. 글자를 입력함과 동시에 현재까지 입력한 글자를 포함하고 있는 5개의 자동완성단어들이 검색창 아래에 출력되는 것을 확인한다.
3. (↑, ↓, Enter, Esc)로 자동완성단어 리스트를 조작할 수 있다.
    - ↑ ( 위쪽 방향키 ) : 이전 단어를 선택한다.
    - ↓ ( 아래쪽 방향키 ) : 다음 단어를 선택한다.
    - ENTER : 현재 선택되어있는 단어로 작성 중인 검색어를 자동완성 시킨다.
    - Esc : 현재 화면에 보여지고 있는 자동완성 리스트를 제거한다.
4. X 버튼을 클릭했을 경우에 현재 자동완성 리스트가 제거되도록 한다.
    

## ClickToEdit.js
#### ***구현한 방법***
- 이름과 나이가 들어가는 input을 구성하고, default로 들어가는 값에 대해서 value 값으로 할당한다.
- 각 입력이 발생했을때 값이 변하는 변수(inputName/Age)와 Focus가 해제되었을때 값이 변화하는 변수 (UserName/Age)를 선언한다.
- 각 input tag 에서 입력이 발생할때는 input~ 변수들이 변하도록 한다. 그리고 입력이후 input에 대한 Focus가 없어졌을때 user~ 의 값에 input~ 값이 할당되도록 한다.
- user~ 값을 아래에 출력될 수 있도록 한다.
 
#### ***실행방법***
- 현재 입력되어있는 값을 지우고 원하는 이름과 나이를 각각 입력한다.
- 각 input에 입력한 후 바깥을 클릭하면 입력한 값으로 아래 글자가 바뀌는 것을 확인 할 수 있다.

## 구현하면서 어려웠던 점과 해결 방법
#### 1. ***test 데이터 로드***
랜덤 단어가 포함되어있는 .txt, .csv 로컬 파일에 대해서 다음과 같은 방법으로 데이터를 불러오려고 시도했습니다.
```
 fetch('./data.txt')
     .then(res => res.text())
     .then((data) => {
        console.log(data)
     });
```
하지만 .text()를 받아본 결과 html 코드가 나오는 이슈가 있어 js파일을 개별로 생성, 변수에 담긴 데이터를 import해서 사용하였습니다.

#### 2. ***Auto Complete 기능구현***
기능 구현에 대한 요구사항을 파악하는 부분에서는 어려움이 없었지만 코드로 구현하는 부분에서는 다양한 예시를 참고해 요구사항에 적절한 형태로 재구성하여 사용하였습니다.

#### 3. ClickToEdit에서 onChange 사용
각 input에 대해서 focus가 사라졌을때 각 데이터가 적용되어야하기 때문에 처음에는 onChange로만 해결하려 했습니다.
하지만 아래에 로드되는 이름과 나이부분이 글자가 입력되면서 같이 변경되는 이슈가 있었습니다.

그 원인으로 화면이 처음 로드 되었을때 초기 입력값이 input과 그 아래 결과 문구에 들어가 있어서, onChange로 값을 변경해줄때
아래 결과 문구와 충돌하기 때문이라고 생각했습니다.

그래서 변수를 2개 사용하여 onChange로 inputName/Age를 변경시키고,  
onBlur를 통해 Focus가 해제되는 경우 userInput/Age가 변경되도록 직접 구현해주었습니다.
