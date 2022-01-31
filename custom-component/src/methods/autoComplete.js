export default function autoComplete(query, words) {

  var cursorIndex;

  query.addEventListener('input', function(e) {

    var autoCompleteUnit;
    var autoCompleteUnitCount = 0;
    var currentSearchWord = this.value;

    closeAutoComplete();

    if (!currentSearchWord) return false;

    cursorIndex = -1;

    var searchBar = document.getElementById('search-bar');

    var searchAutoComplete = document.createElement('DIV');
    searchAutoComplete.setAttribute('id', 'search-autocomplete');
    searchBar.appendChild(searchAutoComplete);

    for(let i = 0; i < words.length; i++) {
      let wordSubstr = words[i].substr(0, currentSearchWord.length);
      if(wordSubstr.toUpperCase() === currentSearchWord.toUpperCase()) {
        autoCompleteUnit = document.createElement('DIV');
        autoCompleteUnit.setAttribute('class', 'search-autocomplete-unit');
        
        autoCompleteUnit.innerHTML = '<strong>' + wordSubstr + '</strong>' + words[i].substr(currentSearchWord.length);
        autoCompleteUnit.innerHTML += '<input type="hidden" value="' + words[i] +'">';

        autoCompleteUnit.addEventListener('click', function(e) {
          query.value = this.getElementsByTagName('input')[0].value;

          closeAutoComplete();
        })
        searchAutoComplete.appendChild(autoCompleteUnit);

        autoCompleteUnitCount += 1;
        if (autoCompleteUnitCount === 5) break;
      }
    }

    if (document.getElementsByClassName('search-autocomplete-unit').length === 0)
      closeAutoComplete();

  });

  query.addEventListener('keydown', function(e) {
    var searchAutoComplete = document.getElementById('search-autocomplete');

    if (searchAutoComplete) {
      var autoCompleteWords = searchAutoComplete.getElementsByTagName('div');
    }

    // press down key
    if (e.keyCode === 40) {
      cursorIndex += 1;
      isSelected(autoCompleteWords);
    }
    // press up key
    else if (e.keyCode === 38) {
      cursorIndex -= 1;
      isSelected(autoCompleteWords);
    }
    // press ESC key
    else if (e.keyCode === 27) {
      closeAutoComplete();
    }
    // press ENTER key
    else if (e.keyCode === 13) {
      e.preventDefault();

      if (cursorIndex > -1) {
        if (autoCompleteWords)
          autoCompleteWords[cursorIndex].click();
      }
    }
  })

  function isSelected(autoCompleteWords) {
    if (!autoCompleteWords) return false;

    clearSelect(autoCompleteWords);

    cursorIndex = cursorIndex < 0 ? -1 : cursorIndex % autoCompleteWords.length;

    if (cursorIndex >= 0)
      autoCompleteWords[cursorIndex].classList.add('autocomplete-selected');
  }

  function clearSelect(autoCompleteWords) {
    for(let i = 0; i < autoCompleteWords.length; i++) {
      autoCompleteWords[i].classList.remove('autocomplete-selected');
    }
  }

  function closeAutoComplete() {
    var searchAutoComplete = document.getElementById('search-autocomplete');
    if (searchAutoComplete)
      document.getElementById('search-bar').removeChild(searchAutoComplete);
  }

  document.addEventListener("click", function (e) {
    closeAutoComplete(e.target);
  });
};