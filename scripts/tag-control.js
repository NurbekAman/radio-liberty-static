const button = document.querySelector('.tag-button');
button.addEventListener('click', handleClick);

function handleClick(e) {
  const ul = document.querySelector('#tag-list');
  const input = document.querySelector('#tag-input');

  const { value } = input;

  if (value) {
    assertValueToTheHref(value);
    addTag(value, ul, removeTag);
  }
}

function assertValueToTheHref(value) {
  const url = window.location.href;

  if (/.+#tags=.+/.test(url)) {
    window.location.href += `,${value}`;
  }

  if (/.+#tags=$/.test(url)) {
    window.location.href += `${value}`;
  }

  if (!url.includes(CONSTANT.TAG_HREF)) {
    window.location.href = `${CONSTANT.TAG_HREF}=${value}`;
  }
}