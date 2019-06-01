window.addEventListener('load', handlePageLoad);
window.addEventListener('hashchange', handlePageLoad);

function handlePageLoad(e) {
  renderTagList();
}

/**
 * check if tags are exist and if exist then render them
 */
function renderTagList() {
  const tags = getTagsPart();

  if (tags && tags.length > 0) {
    const ul = document.querySelector('#tag-list');

    if (tags.length > 0) {
      clearElementChildren(ul);

      tags.forEach(item => addTag(item, ul, removeTag));
    }
  }
}

function clearElementChildren(element) {
  if (element instanceof window.Element && element.children.length > 0) {
    element.innerHTML = '';
  }
}

function addTag(name, parent, callback) {
  const link = document.createElement('a');
  link.setAttribute('href', '#');
  const textContent = document.createTextNode(name);
  parent.appendChild(link);
  link.appendChild(textContent);
  link.classList.add('tag-link')

  link.addEventListener('click', callback);
}

function removeTag(event) {
  event.preventDefault();
  const tagList = document.querySelector('#tag-list');

  const { currentTarget } = event;

  if (tagList && currentTarget instanceof window.Element) {
    const { text } = currentTarget;
    tagList.removeChild(currentTarget);

    _.compose(
      deleteTagsPart,
      _.partial(removeElementFromTag, [text]),
      getTagsPart,
    )();
  }
}