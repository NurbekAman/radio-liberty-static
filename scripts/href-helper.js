function getTagsPart() {
  const matchedTags = window.location.href.match(/.+#tags=(.+)/);

  const tags = matchedTags && matchedTags[1];

  if (tags) {
    return tags.split(',');
  }

  return null;
}

function getBasePart() {
  const matchedTags = window.location.href.match(/.+#tags=/);

  return matchedTags && matchedTags[0];
}

function deleteTagsPart(tagsPart) {
  window.location.href = getBasePart() + tagsPart;
}

function removeElementFromTag(text, tags) {
  if (tags && tags.length > 0) {
    const index = tags.lastIndexOf(text);

    delete tags[index];

    return tags.filter(x=>x).join(',');
  }

  return '';
}