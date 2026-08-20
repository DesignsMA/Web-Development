const root  = document.createElement('html');
root.lang = 'en';

const head = document.createElement('head');
const title = document.createElement('title');
title.appendChild(document.createTextNode('Document'));
head.appendChild(title);
root.appendChild(head);

const body = document.createElement('body');
root.appendChild(body);

document.appendChild(root);

const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('Hello World'));
body.appendChild(h1);

const p = document.createElement('p');
p.appendChild(document.createTextNode('This is a paragraph.'));
body.appendChild(p);
